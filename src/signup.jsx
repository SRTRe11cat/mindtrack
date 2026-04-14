import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userDoc = doc(firestore, "users", userCredential.user.uid);
      await setDoc(userDoc, {
        email: userCredential.user.email,
        createdAt: new Date().toISOString(),
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className="w-full max-w-sm bg-[#1e293b] rounded-2xl p-10 border border-[#2dd4bf]/10">

        <h1
          className="text-4xl text-[#2dd4bf] text-center mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          MindTrack
        </h1>
        <p className="text-[#94a3b8] text-center text-sm mb-8">Create your account</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2dd4bf]"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-[#2dd4bf]/20 rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2dd4bf]"
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-[#2dd4bf] text-[#0f172a] font-bold py-3 rounded-xl text-base hover:bg-[#14b8a6] transition-colors mt-2"
          >
            Create Account
          </button>
        </div>

        <p className="text-[#94a3b8] text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#2dd4bf] no-underline hover:underline">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;