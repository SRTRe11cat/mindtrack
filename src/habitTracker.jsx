import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, firestore } from "./firebase";

function HabitTracker() {
  const [habit, setHabit] = useState("");
  const [icon, setIcon] = useState("⭐");
  const [frequency, setFrequency] = useState("");
  const [frequencyType, setFrequencyType] = useState("Day");
  const [list, setList] = useState([]);
  const [checkedIn, setCheckedIn] = useState({});

  useEffect(() => {
    if (auth.currentUser) {
      getHabit();
    }
  }, []);

  const createHabit = async (e) => {
    e.preventDefault();
    const habitsRef = collection(firestore, "users", auth.currentUser.uid, "habits");
    await addDoc(habitsRef, { habit, icon, frequency, frequencyType });
    getHabit();
  };

  const getHabit = async () => {
    const habitsRef = collection(firestore, "users", auth.currentUser.uid, "habits");
    const grab = await getDocs(habitsRef);
    const habits = grab.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setList(habits);
  };

  const deleteHabit = async (id) => {
    const userHabit = doc(firestore, "users", auth.currentUser.uid, "habits", id);
    await deleteDoc(userHabit);
    getHabit();
  };

  const checkIn = async (id) => {
    const userCheckIn = collection(firestore, "users", auth.currentUser.uid, "habits", id, "checkIns");
    await addDoc(userCheckIn, {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });
    setCheckedIn((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <h1 className="text-4xl text-[#2dd4bf] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Habit Tracker
        </h1>
        <p className="text-[#94a3b8] mb-10">Build consistency, one habit at a time.</p>

        {/* Form */}
        <div className="bg-[#1e293b] rounded-2xl p-8 border border-[#2dd4bf]/10 mb-10">
          <p className="text-[#f1f5f9] font-semibold mb-6">Create a New Habit</p>

          <form onSubmit={createHabit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Habit name"
              onChange={(e) => setHabit(e.target.value)}
              className="w-full bg-transparent border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2dd4bf]"
            />

            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] focus:outline-none focus:border-[#2dd4bf]"
            >
              <option value="⭐">⭐ Star</option>
              <option value="💪">💪 Strength</option>
              <option value="📚">📚 Reading</option>
              <option value="🏃">🏃 Running</option>
              <option value="🧘">🧘 Mindfulness</option>
            </select>

            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Times per"
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full bg-transparent border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2dd4bf]"
              />
              <select
                value={frequencyType}
                onChange={(e) => setFrequencyType(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] focus:outline-none focus:border-[#2dd4bf]"
              >
                <option value="Day">Day</option>
                <option value="Week">Week</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2dd4bf] text-[#0f172a] font-bold py-3 rounded-xl text-base hover:bg-[#14b8a6] transition-colors"
            >
              Save Habit
            </button>
          </form>
        </div>

        {/* Habit List */}
        <p className="text-[#f1f5f9] font-semibold mb-4">Your Habits</p>

        {list.length === 0 ? (
          <p className="text-[#94a3b8]">No habits yet. Create one above!</p>
        ) : (
          <div className="flex flex-col gap-3">
            {list.map((item) => (
              <div
                key={item.id}
                className="bg-[#1e293b] rounded-2xl px-6 py-5 border border-[#2dd4bf]/10 flex items-center justify-between flex-wrap gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="text-[#f1f5f9] font-semibold">{item.habit}</p>
                    <p className="text-[#94a3b8] text-sm">{item.frequency}x per {item.frequencyType}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => checkIn(item.id)}
                    disabled={checkedIn[item.id]}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      checkedIn[item.id]
                        ? "bg-[#2dd4bf]/10 text-[#94a3b8] cursor-not-allowed"
                        : "bg-[#2dd4bf]/15 text-[#2dd4bf] hover:bg-[#2dd4bf]/25"
                    }`}
                  >
                    {checkedIn[item.id] ? "✓ Done" : "Check In"}
                  </button>
                  <button
                    onClick={() => deleteHabit(item.id)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
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
}

export default HabitTracker;