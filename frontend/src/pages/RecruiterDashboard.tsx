  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { 
    Users,
    Briefcase,
    Rocket,
    Award,
    LayoutDashboard,
    FileText,
    MessageSquare,
    Mic,
    BookOpen,
    User,
    Search,
    ShieldCheck,
    ChevronDown,
    Bell,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    BrainCircuit,
    ClipboardList,
    BarChart3,
    Map,
    Lightbulb,
    Building2,
    Settings,
  } from 'lucide-react';
  import { useNavigate } from 'react-router-dom';

  const RecruiterDashboard = () => {
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState<any>(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
        const token = localStorage.getItem("token");

const res = await axios.get(
  "http://localhost:5000/api/dashboard/recruiter",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dashboard) {
    return <div>Loading...</div>;
  }

    return (
      <div className="min-h-screen bg-[#030816] text-white flex overflow-hidden">

        {/* SIDEBAR */}
        <aside className="w-[460px] border-r border-gray-800 p-10 flex flex-col bg-[#030816] z-20 justify-between">
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

            {/* NAVIGATION */}
            <nav className="space-y-12 flex-1 overflow-y-auto no-scrollbar text-2xl font-bold">
              
              {/* Authentication Section */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Authentication
                </p>
                <div className="space-y-6 text-gray-300">
                  <div onClick={() => navigate("/")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">
                    🏠 Landing Page
                  </div>
                  <div onClick={() => navigate("/login")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">
                    📄 Login
                  </div>
                  <div onClick={() => navigate("/register")} className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl">
                    👤 Register
                  </div>
                </div>
              </div>

              {/* Student Portal Section */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Student Portal
                </p>

                <div className="space-y-5 text-gray-300">
                  
                  <div onClick={() => navigate("/dashboard")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <LayoutDashboard size={36}/> Dashboard
                  </div>

                  <div onClick={() => navigate("/resume-analyzer")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <FileText size={36}/> Resume Analyzer
                  </div>

                  <div onClick={() => navigate("/job-match")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <Briefcase size={36}/> Job Match Module
                  </div>

                  <div onClick={() => navigate("/ai-chat")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <MessageSquare size={36}/> AI Career Coach Chat
                  </div>

                  <div onClick={() => navigate("/mock-interview")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <Mic size={36}/> Mock Interview Module
                  </div>

                  <div onClick={() => navigate("/career-roadmap")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <Map size={36}/> Career Roadmap
                  </div>

                  <div onClick={() => navigate("/skills")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <Lightbulb size={36}/> Skills Development
                  </div>

                  <div onClick={() => navigate("/profile")} className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl">
                    <User size={36}/> Profile Page
                  </div>
                </div>
              </div>

              {/* Recruiter Portal */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Recruiter Portal
                </p>

                <div
                  onClick={() => navigate("/recruiter-dashboard")}
                  className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer"
                >
                  <Building2 size={36}/> Recruiter Dashboard
                </div>
              </div>

              {/* Admin Portal */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Admin Portal
                </p>

                <div
                  onClick={() => navigate("/admin-dashboard")}
                  className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 text-3xl"
                >
                  <Settings size={36}/> Admin Dashboard
                </div>
              </div>

            </nav>
          </div>

          {/* SIDEBAR WIDGET */}
          <div className="bg-[#0b1329] p-8 rounded-2xl border border-blue-500/20 text-2xl text-gray-200 mt-8">
            <p className="font-extrabold text-blue-400 mb-3 text-3xl">
              AI COACH RECOMMENDS:
            </p>
            <p>
              Focus on Data Analytics projects with real performance metrics.
            </p>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 px-8 py-6 relative overflow-y-auto">

          {/* BACKGROUND EFFECT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_40%)] pointer-events-none" />

          {/* HEADER */}
          <div className="relative z-10 flex items-center justify-between mb-8">

            <h1 className="text-[56px] font-bold tracking-tight">
              Recruiter Dashboard
            </h1>

            <div className="flex items-center gap-6 bg-[#0d1527] p-4 pl-7 pr-6 rounded-full border border-gray-800">


              <div className="w-14 h-14 rounded-full bg-[#111b2d] border border-cyan-400/20 flex items-center justify-center cursor-pointer">
                <Bell size={24} className="text-cyan-300" />
              </div>

              <div className="flex items-center gap-3 bg-[#10192b] border border-cyan-400/20 px-5 py-3 rounded-full">

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />

                <span className="text-[20px] font-medium">
                    {dashboard.profile.name}

                </span>

                <ChevronDown size={20} className="text-slate-400" />

              </div>

            </div>

          </div>

          {/* TOP CARDS */}
          <div className="relative z-10 grid grid-cols-4 gap-5 mb-7">

            {[
              {
                title: 'TOTAL CANDIDATES',
                value: dashboard.stats.totalCandidates,
                sub: '+150 this week',
                icon: Users,
                glow: 'shadow-blue-500/20',
                border: 'border-blue-400/30',
                bg: 'from-blue-500/15 to-blue-400/5',
                iconBg: 'bg-blue-500/20',
                iconColor: 'text-blue-300',
              },
              {
                title: 'OPEN POSITIONS',
                value: dashboard.stats.openPositions,
                sub: '+3 active',
                icon: Briefcase,
                glow: 'shadow-green-500/20',
                border: 'border-green-400/30',
                bg: 'from-green-500/15 to-green-400/5',
                iconBg: 'bg-green-500/20',
                iconColor: 'text-green-300',
              },
              {
                title: 'ACTIVE CANDIDATES',
                value: dashboard.stats.activeCandidates,
                sub: '+25 today',
                icon: Rocket,
                glow: 'shadow-purple-500/20',
                border: 'border-purple-400/30',
                bg: 'from-purple-500/15 to-pink-500/5',
                iconBg: 'bg-purple-500/20',
                iconColor: 'text-purple-300',
              },
              {
                title: 'HIRES THIS MONTH',
                value: dashboard.stats.hiresThisMonth,
                sub: `Goal: ${dashboard.stats.openPositions * 3}`,
                icon: Award,
                glow: 'shadow-orange-500/20',
                border: 'border-orange-400/30',
                bg: 'from-orange-500/15 to-yellow-500/5',
                iconBg: 'bg-orange-500/20',
                iconColor: 'text-orange-300',
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`rounded-[24px] border ${card.border} bg-gradient-to-br ${card.bg} p-6 shadow-xl ${card.glow}`}
              >

                <div className="flex items-center justify-between mb-4">

                  <div>
                    <p className="text-[14px] tracking-[0.18em] text-slate-400 mb-3">
                      {card.title}
                    </p>

                    <h2 className="text-[54px] font-bold leading-none">
                      {card.value}
                    </h2>

                    <p className="text-[18px] text-slate-400 mt-3">
                      {card.sub}
                    </p>
                  </div>

                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${card.iconBg}`}>
                    <card.icon className={card.iconColor} size={40} />
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* MATCH TABLE */}
          <div className="relative z-10 rounded-[28px] border border-cyan-400/20 bg-[#0b1525]/90 p-7 shadow-[0_0_50px_rgba(0,255,255,0.08)] mb-7">

            <h2 className="text-[38px] font-semibold mb-8">
              TOP MATCHED CANDIDATES
            </h2>

            {/* HEADER */}
            <div className="grid grid-cols-4 text-slate-400 border-b border-cyan-500/10 pb-4 text-[21px]">
              <div>Candidate Name</div>
              <div>Current Role</div>
              <div>AI Match Score</div>
              <div>Match Status</div>
            </div>

            {/* ROWS */}
            <div className="space-y-1 mt-3">

              {dashboard.topCandidates.map((candidate:any, i:number) => (
                <div
                  key={i}
                  className="grid grid-cols-4 items-center py-5 border-b border-cyan-500/5 relative group"
                >

                  {/* NAME */}
                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />

                    <span className="text-[24px] font-medium">
                      {candidate.name}
                    </span>

                  </div>

                  {/* ROLE */}
                  <div className="text-[22px] text-slate-300">
                    {candidate.role}
                  </div>

                  {/* SCORE */}
                  <div className="text-[36px] font-bold text-[#59f2ae]">
                    {candidate.score}
                  </div>

                  {/* STATUS */}
                  <div>
                    <span
                      className={`px-5 py-2 rounded-full text-[18px] ${
                        candidate.color === "green"
  ? "bg-green-500/15 text-green-300"
  : candidate.color === "blue"
  ? "bg-blue-500/15 text-blue-300"
  : candidate.color === "purple"
  ? "bg-purple-500/15 text-purple-300"
  : "bg-slate-700/30 text-slate-400"
                      }`}
                    >
                      ● {candidate.status}
                    </span>
                  </div>

                  {/* HOVER CARD */}
                  {i === 0 && (
                    <div className="absolute left-[420px] top-[20px] hidden group-hover:block z-20">

                      <div className="w-[430px] rounded-[28px] border border-cyan-400/30 bg-[#091320] p-6 shadow-[0_0_50px_rgba(0,255,255,0.2)]">

                        <div className="flex items-center gap-4 mb-4">

                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />

                          <div>

                            <h3 className="text-[36px] font-bold">
                              {dashboard.hoverCandidate.name}
                            </h3>

                            <p className="text-[#59f2ae] text-[20px]">
                              AI Matching Score {dashboard.hoverCandidate.score}%
                            </p>

                          </div>

                        </div>

                        <p className="text-slate-300 text-[18px] mb-5">
                          Job Match:
{dashboard.hoverCandidate.role}
at
{dashboard.hoverCandidate.company}
                        </p>

                        <div className="flex flex-wrap gap-2">
  {dashboard.hoverCandidate.skills.map((tag: string, idx: number) => (
    <span
      key={idx}
      className="px-4 py-2 rounded-lg bg-slate-700/40 text-[16px] text-slate-200"
    >
      {tag}
    </span>
  ))}
</div>

                      </div>

                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* BOTTOM */}
          <div className="relative z-10 grid grid-cols-2 gap-7">

            {/* ACTIVITY */}
            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0b1525]/90 p-7">

              <h2 className="text-[38px] font-semibold mb-8">
                Candidate Activity Feed
              </h2>

              <div className="space-y-6">

                {dashboard.activities.map((item:any,i:number)=>(
                  <div key={i} className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                         <ClipboardList size={30} className="text-cyan-300" />
                         </div>

                      <div>

                        <p className="text-[22px]">
                          {item.title}
                        </p>

                        <p className="text-[18px] text-slate-400 mt-1">
                            {item.description}
                        </p>

                      </div>

                    </div>

                    <span className="text-[18px] text-slate-500">
                      {item.time}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* QUICK ACCESS */}
            <div className="rounded-[28px] border border-cyan-400/20 bg-[#0b1525]/90 p-7">

              <h2 className="text-[38px] font-semibold mb-8">
                Recruiter Quick Access
              </h2>

              <div className="grid grid-cols-4 gap-5">

                {dashboard.quickAccess.map((item, i) => (
  <div
    key={i}
    onClick={() => {
      if (i === 0) navigate("/recruiter/jobs");
      if (i === 1) navigate("/recruiter/candidates");
      if (i === 2) navigate("/recruiter/messages");
      if (i === 3) navigate("/recruiter/analytics");
    }}
    className="rounded-[24px] border border-cyan-400/10 bg-[#101a2b] p-5 flex flex-col items-center justify-center text-center hover:scale-[1.03] transition-all duration-300 cursor-pointer"
  >

                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-slate-700/30">
                      {
  [
    <Briefcase size={40} className="text-purple-300" />,
    <Users size={40} className="text-green-300" />,
    <MessageSquare size={40} className="text-yellow-300" />,
    <BarChart3 size={40} className="text-blue-300" />,
  ][i]
}
                    </div>

                    <p className="text-[20px] leading-7">
                      {item.title}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* FOOTER */}
          <footer className="w-full max-w-[3200px] mx-auto px-4 py-14 border-t border-white/5">

            <div className="bg-[#08101f]/70 border border-white/10 rounded-[40px] px-16 py-12 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-12">

              <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
                "Ready to contribute, eager to learn,
                <br />
                and passionate about building impactful AI-driven solutions."
              </p>

              <div className="flex flex-col items-center lg:items-end gap-8">

                <div className="flex gap-8 text-gray-300">

                  <div className="p-5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all">
                    <Facebook className="w-9 h-9 text-blue-400 cursor-pointer" />
                  </div>

                  <div className="p-5 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-all">
                    <Instagram className="w-9 h-9 text-pink-400 cursor-pointer" />
                  </div>

                  <div className="p-5 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all">
                    <Youtube className="w-9 h-9 text-red-400 cursor-pointer" />
                  </div>

                  <div className="p-5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 transition-all">
                    <Linkedin className="w-9 h-9 text-cyan-400 cursor-pointer" />
                  </div>

                </div>

                <div className="flex gap-10 text-xl uppercase tracking-widest text-gray-500">
                  <span>Legal</span>
                  <span>Links</span>
                  <span>Privacy</span>
                  <span>Labs</span>
                  <span>Policy</span>
                </div>

              </div>
            </div>
          </footer>

        </main>
      </div>
    );
  };

  export default RecruiterDashboard;