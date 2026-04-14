import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Mood Tracking",
    description: "Log your daily emotions and reflect on your experiences.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Habit Tracking",
    description: "Build consistent routines and track your progress.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Insights",
    description: "Visualize trends with simple charts and summaries.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* HERO */}
      <div className="text-center py-24 md:py-40 px-6 border-b border-[#2dd4bf]/10">
        <h1
          className="text-5xl md:text-7xl text-[#2dd4bf] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          MindTrack
        </h1>
        <p className="text-[#94a3b8] text-lg mb-10 max-w-md mx-auto">
          Track your mood. Build better habits. Improve your well-being.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-[#2dd4bf] text-[#0f172a] font-bold px-8 py-3 rounded-xl text-base hover:bg-[#14b8a6] transition-colors">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-transparent text-[#2dd4bf] font-bold px-8 py-3 rounded-xl text-base border border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/10 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#1e293b] rounded-2xl p-8 border border-[#2dd4bf]/10 text-center transition-all duration-200 hover:border-[#2dd4bf]/30 hover:-translate-y-1"
            >
              <div className="bg-[#2dd4bf]/10 rounded-xl p-3 inline-flex mb-4">
                {feature.icon}
              </div>
              <p className="text-[#f1f5f9] font-semibold text-lg mb-2">{feature.title}</p>
              <p className="text-[#94a3b8] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6 border-t border-[#2dd4bf]/10">
        <h2
          className="text-[#f1f5f9] text-3xl md:text-4xl mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Start improving your daily routine today
        </h2>
        <Link to="/signup">
          <button className="bg-[#2dd4bf] text-[#0f172a] font-bold px-10 py-3 rounded-xl text-base hover:bg-[#14b8a6] transition-colors">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Home;