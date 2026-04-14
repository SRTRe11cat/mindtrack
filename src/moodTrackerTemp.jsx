import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Calm", emoji: "😌" },
  { label: "Okay", emoji: "🙂" },
  { label: "Stressed", emoji: "😣" },
  { label: "Sad", emoji: "😢" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchEntries = async () => {
      const moodsRef = collection(firestore, "users", userId, "moods");
      const snap = await getDocs(moodsRef);
      const fetched = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      fetched.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(fetched);
    };
    fetchEntries();
  }, [userId]);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("userId:", userId);

    if (!selectedMood) {
      alert("Please select a mood.");
      return;
    }

    const newEntry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString(),
    };

    try {
      const moodsRef = collection(firestore, "users", userId, "moods");
      const docRef = await addDoc(moodsRef, newEntry);
      console.log("Saved successfully, docId:", docRef.id);
      setEntries([{ id: docRef.id, ...newEntry }, ...entries]);
      setSelectedMood("");
      setNote("");
    } catch (err) {
      console.error("Firestore error:", err);
    }
  };

  const handleDelete = async (entryId) => {
    await deleteDoc(doc(firestore, "users", userId, "moods", entryId));
    setEntries(entries.filter((e) => e.id !== entryId));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <h1
          className="text-4xl text-[#2dd4bf] mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Daily Mood Tracker
        </h1>
        <p className="text-[#94a3b8] mb-10">How are you feeling today?</p>

        {/* Form */}
        <form
          onSubmit={handleSave}
          className="bg-[#1e293b] rounded-2xl p-8 border border-[#2dd4bf]/10 mb-10"
        >
          {/* Mood Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {moods.map((mood) => (
              <div
                key={mood.label}
                onClick={() => setSelectedMood(`${mood.emoji} ${mood.label}`)}
                className={`flex flex-col items-center px-4 py-3 min-w-[90px] rounded-xl cursor-pointer border transition-all duration-200 ${
                  selectedMood === `${mood.emoji} ${mood.label}`
                    ? "border-[#2dd4bf] bg-[#2dd4bf]/15"
                    : "border-[#2dd4bf]/15 bg-transparent hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/8"
                }`}
              >
                <span className="text-3xl mb-1">{mood.emoji}</span>
                <span className="text-[#f1f5f9] text-xs">{mood.label}</span>
              </div>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Write a short reflection..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full bg-transparent border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2dd4bf] resize-none mb-4"
          />

          <button
            type="submit"
            className="w-full bg-[#2dd4bf] text-[#0f172a] font-bold py-3 rounded-xl text-base hover:bg-[#14b8a6] transition-colors"
          >
            Save Entry
          </button>
        </form>

        {/* Past Entries */}
        <p className="text-[#f1f5f9] font-semibold mb-4">Past Entries</p>

        {entries.length === 0 ? (
          <p className="text-[#94a3b8]">No mood entries yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#1e293b] rounded-2xl px-6 py-5 border border-[#2dd4bf]/10"
              >
                <p className="text-[#f1f5f9] font-semibold text-lg mb-1">{entry.mood}</p>
                <p className="text-[#94a3b8] text-sm mb-3">{entry.note || "No note added."}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#475569] text-xs">{entry.date}</span>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="bg-red-500/10 text-red-400 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MoodTracker;