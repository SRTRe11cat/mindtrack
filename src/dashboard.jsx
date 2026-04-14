import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl text-[#2dd4bf] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            MindTrack
          </h1>
          <p className="text-[#94a3b8] text-base">
            What would you like to track today?
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          <Link to="/habitTracker" className="no-underline">
            <div className="bg-[#1e293b] rounded-2xl px-8 py-7 flex items-center gap-6 border border-[#2dd4bf]/10 transition-all duration-200 hover:border-[#2dd4bf]/40 hover:-translate-y-0.5 cursor-pointer">
              <div className="bg-[#2dd4bf]/10 rounded-xl p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[#f1f5f9] font-semibold text-lg mb-1">Habit Tracker</p>
                <p className="text-[#94a3b8] text-sm">Build and manage your daily habits</p>
              </div>
            </div>
          </Link>

          <Link to="/moodTracker" className="no-underline">
            <div className="bg-[#1e293b] rounded-2xl px-8 py-7 flex items-center gap-6 border border-[#2dd4bf]/10 transition-all duration-200 hover:border-[#2dd4bf]/40 hover:-translate-y-0.5 cursor-pointer">
              <div className="bg-[#2dd4bf]/10 rounded-xl p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[#f1f5f9] font-semibold text-lg mb-1">Mood Tracker</p>
                <p className="text-[#94a3b8] text-sm">Log and reflect on how you're feeling</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;