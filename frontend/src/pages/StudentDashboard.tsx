import React from "react";
import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, BrainCircuit, Briefcase, Cloud, LayoutDashboard, 
  FileText, MessageSquare, Mic, Map, Lightbulb, User, Building2, Settings,
  BarChart3, Target, Flame, TrendingUp
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState<any>(null);

  const activityIcons = [
    {
      icon: <CheckCircle2 className="text-green-500 w-8 h-8" />,
      bg: "bg-green-500/10",
    },
    {
      icon: <BrainCircuit className="text-blue-500 w-8 h-8" />,
      bg: "bg-blue-500/10",
    },
    {
      icon: <Briefcase className="text-purple-500 w-8 h-8" />,
      bg: "bg-purple-500/10",
    },
  ];
 
  useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {
    const response = await getDashboardData();

    console.log(JSON.stringify(response.data, null, 2));

    setDashboardData(response.data);
  } catch (error) {
    console.error("Dashboard Error:", error);
  }
};

  return (
    <div className="min-h-screen w-full bg-[#030816] text-white font-sans relative text-2xl select-none">
      
      {/* Inject custom styling to completely hide the scrollbar track */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* SIDEBAR - WIDTH 460px */}
      <aside className="fixed top-0 bottom-0 left-0 w-[460px] border-r border-gray-800 p-10 flex flex-col bg-[#030816] z-20 justify-between">
        <div className="flex flex-col flex-1 min-h-0">
          
          {/* LOGO HEADER */}
          <div className="flex items-center gap-4 mb-12 shrink-0 whitespace-nowrap">
            <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30 text-blue-400 text-4xl flex items-center justify-center shrink-0">
              🔮
            </div>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-4xl font-extrabold tracking-wide">
              Career Advisor
            </span>
          </div>

          {/* SCROLLABLE NAVIGATION CONTAINER */}
          <nav className="space-y-12 flex-1 overflow-y-auto no-scrollbar text-2xl font-bold">
            
            {/* Authentication Section */}
            <div>
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">Authentication</p>
              <div className="space-y-6 text-gray-300">
                <div onClick={() => navigate("/")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">🏠 Landing Page</div>
                <div onClick={() => navigate("/login")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">📄 Login</div>
                <div onClick={() => navigate("/register")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">👤 Register</div>
              </div>
            </div>

            {/* Student Portal Section */}
            <div>
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">Student Portal</p>
              <div className="space-y-5 text-gray-300">
                <div onClick={() => navigate("/dashboard")} className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-3xl cursor-pointer">
                  <LayoutDashboard size={36}/> Dashboard
                </div>
                <div onClick={() => navigate("/resume-analyzer")} className="flex items-center gap-5 cursor-pointer hover:text-white hover:bg-white/5 p-4 py-3 pl-6 rounded-xl transition text-3xl">
                  <FileText size={36}/> Resume Analyzer
                </div>
                <div onClick={() => navigate("/job-match")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl">
                  <Briefcase size={36}/> Job Match Module
                </div>
                <div onClick={() => navigate("/ai-chat")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl">
                  <MessageSquare size={36}/> AI Career Coach Chat
                </div>
                <div onClick={() => navigate("/mock-interview")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl"><Mic size={36}/> Mock Interview Module</div>
                <div onClick={() => navigate("/career-roadmap")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl"><Map size={36}/> Career Roadmap</div>
                <div onClick={() => navigate("/skills")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl"><Lightbulb size={36}/> Skills Development</div>
                <div onClick={() => navigate("/profile")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 py-3 pl-6 text-3xl"><User size={36}/> Profile Page</div>
              </div>
              <div
  onClick={() => navigate("/voice-interview")}
  className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
>
  🎤 Voice Interview
</div>
            </div>

            {/* Recruiter & Admin Sections */}
            <div>
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">Recruiter Portal</p>
              <div onClick={() => navigate("/recruiter-dashboard")} className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-10 text-3xl"><Building2 size={36}/> Recruiter Dashboard</div>
              
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">Admin Portal</p>
              <div onClick={() => navigate("/admin-dashboard")} className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 text-3xl"><Settings size={36}/> Admin Dashboard</div>
            </div>
          </nav>
        </div>

        {/* SIDEBAR WIDGET */}
        <div className="bg-[#0b1329] p-8 rounded-2xl border border-blue-500/20 text-xl text-gray-200 mt-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] shrink-0">
          <p className="font-extrabold text-blue-400 mb-3 tracking-wide text-2xl">AI COACH RECOMMENDS:</p>
          <p className="leading-relaxed font-medium">Focus on specific Data Analytics projects with performance metrics for higher score jobs.</p>
        </div>
      </aside>

      {/* MAIN CONTENT CONTAINER */}
      <main className="ml-[460px] p-12 pt-6 md:p-16 md:pt-8 flex flex-col min-h-screen bg-[#030816]">
        
        {/* HEADER */}
        <header className="mb-8 flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight flex items-center gap-2">
              Welcome back, {dashboardData?.user?.name}👋
            </h1>
            <p className="text-gray-400 text-2xl font-medium mt-2">Track your progress and achieve your career goals</p>
          </div>
          
          <div className="flex items-center gap-6 bg-[#0d1527] p-4 pl-7 pr-6 rounded-full border border-gray-800">
            <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
            <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">M</div>
            <span className="font-bold text-2xl text-gray-200 pr-1">MEHAK TAJ</span>
            <span className="text-gray-500 text-lg">▼</span>
          </div>
        </header>

        {/* TOP 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 shrink-0">
          {[
  {
    label: "Resume Score",
    val: `${dashboardData?.stats?.resumeScore}%`,
    icon: <BarChart3 className="text-purple-400 w-10 h-10" />,
    sub: "Good Score",
    arrow: <TrendingUp className="text-purple-500 w-8 h-8" />,
    bg: "bg-[#1e1533]",
  },
  {
    label: "Jobs Matched",
    val: dashboardData?.stats?.jobsMatched,
    icon: <Briefcase className="text-green-400 w-10 h-10" />,
    sub: "New Matches",
    arrow: <TrendingUp className="text-green-500 w-8 h-8" />,
    bg: "bg-[#152e25]",
  },
  {
    label: "AI Sessions",
    val: dashboardData?.stats?.aiSessions,
    icon: <Flame className="text-blue-400 w-10 h-10" />,
    sub: "This Month",
    arrow: <TrendingUp className="text-blue-500 w-8 h-8" />,
    bg: "bg-[#152033]",
  },
  {
    label: "Career Level",
    val: dashboardData?.stats?.careerLevel,
    icon: <Target className="text-orange-400 w-10 h-10" />,
    sub: "Keep Going!",
    arrow: <TrendingUp className="text-orange-500 w-8 h-8" />,
    bg: "bg-[#332215]",
  },
].map((stat) => (
            <div key={stat.label} className="bg-[#0b1224] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between h-[180px]">
              <div className="flex items-center gap-6">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xl font-bold uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-5xl font-black">{stat.val}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400 text-lg font-medium">{stat.sub}</p>
                {stat.arrow}
              </div>
            </div>
          ))}
        </div>

        {/* PANELS CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 flex-1 min-h-[480px]">
          
          {/* RECENT ACTIVITY CARD */}
          <div className="lg:col-span-2 bg-[#0b1224]/90 p-8 rounded-2xl border border-gray-800/80 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-2 mb-6">
                <span>🕒</span> Recent Activity
              </h2>
              <div className="space-y-4">
                 {dashboardData?.activities?.map((item: any, i: number) => (

                  <div key={i} className="flex justify-between items-start bg-[#0e172e]/40 p-6 rounded-xl border border-gray-800/40 hover:bg-[#0e172e]/80 transition duration-200">
                    <div className="flex items-start gap-5">
                      <div className={`p-4 rounded-xl ${activityIcons[i % activityIcons.length].bg} shrink-0`}>{activityIcons[i % activityIcons.length].icon}</div>
                      <div>
                        <p className="font-extrabold text-2xl text-gray-100">{item.title}</p>
                        <p className="text-lg text-gray-400 mt-1.5 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-lg font-medium shrink-0 pl-4">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="text-lg text-blue-400 hover:underline font-bold">View All Activity →</button>
            </div>
          </div>

          {/* SKILLS OVERVIEW */}
          <div className="bg-[#0b1224]/90 p-8 rounded-2xl border border-gray-800/80 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-wide mb-6 flex items-center gap-2">
                  <span>📊</span> Skills Overview
                </h2>
                
                <div className="flex flex-col items-center mb-8 relative">
                  <div className="w-48 h-48 rounded-full border-[12px] border-[#1e293b] border-t-purple-500 border-r-blue-500 border-b-green-500 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-[#070d19]">
                    <span className="text-5xl font-black text-white tracking-tight">
                        {dashboardData?.skills?.overall}%
                    </span>
                    <span className="text-sm text-gray-400 uppercase tracking-widest font-extrabold mt-1">
                      Overall
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
  {
    name: "React",
    w: `${dashboardData?.skills?.react}%`,
    c: "bg-purple-500",
  },
  {
    name: "TypeScript",
    w: `${dashboardData?.skills?.typescript}%`,
    c: "bg-blue-500",
  },
  {
    name: "Node.js",
    w: `${dashboardData?.skills?.nodejs}%`,
    c: "bg-green-500",
  },
  {
    name: "Problem Solving",
    w: `${dashboardData?.skills?.problemSolving}%`,
    c: "bg-orange-500",
  },
  {
    name: "SQL",
    w: `${dashboardData?.skills?.sql}%`,
    c: "bg-red-500",
  },
].map((s) => (
                    <div key={s.name} className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${s.c} shrink-0`}></div>
                      <div className="flex-1">
                         <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-gray-200 text-xl">{s.name}</span>
                           <span className="text-gray-300 font-extrabold">{s.w}</span>
                         </div>
                         <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                           <div className={`h-full ${s.c} rounded-full`} style={{width: s.w}}></div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border border-purple-500/20 bg-purple-950/10 rounded-xl p-6 text-lg text-gray-200 leading-relaxed font-medium">
                <span className="text-purple-400 font-extrabold text-xl">🤖 AI COACH RECOMMENDS:</span> {dashboardData?.recommendation}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BANNER */}
        <div className="bg-gradient-to-r from-[#0b1224] to-[#111c3a] p-10 rounded-2xl border border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-5 shadow-xl mt-auto shrink-0">
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="text-6xl filter drop-shadow-md">🏆</div>
            <div>
              <h3 className="text-3xl font-extrabold mb-1 tracking-wide">Keep it up, Mehak!</h3>
              <p className="text-gray-300 text-xl font-medium">You're doing great. Consistency is the key to success.</p>
            </div>
          </div>
          <button onClick={() => navigate("/career-roadmap")} className="bg-blue-600 hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.99] text-white px-10 py-5 rounded-xl font-extrabold text-xl transition duration-300 shadow-lg shadow-blue-950 whitespace-nowrap">
            View Career Roadmap
          </button>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;