import { getChat, sendMessage } from "../services/chatService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Mic,
  Map,
  Lightbulb,
  User,
  Send,
  Home,
  Lock,
  UserPlus,
  Rocket,
  GraduationCap,
  Building2,
  Settings,
  CheckCircle2,
  Brain,
  Sparkles,
  Briefcase,
} from "lucide-react";

const AIChat = () => {
  const navigate = useNavigate();
  const [chatData, setChatData] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await getChat();
        const data = response.data;
        console.log("CHAT DATA:", data);
        setChatData(data);
        setMessages(data.messages || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchChat();
  }, []);

  const handleSend = async () => {
  if (!message.trim()) return;

  try {
    const response = await sendMessage(message);

    setChatData(response.data);
    setMessages(response.data.messages || []);
    setMessage("");
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="min-h-screen bg-[#020817] text-white flex overflow-hidden font-sans">
      {/* Add this style to hide scrollbars globally or just for the sidebar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* SIDEBAR */}
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
                <div className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer">
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
              <div onClick={() => navigate("/recruiter-dashboard")} className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-10 text-3xl">
                <Building2 size={36}/> Recruiter Dashboard
              </div>
            </div>

            {/* Admin Portal */}
            <div>
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                Admin Portal
              </p>
              <div onClick={() => navigate("/admin-dashboard")} className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 text-3xl">
                <Settings size={36}/> Admin Dashboard
              </div>
            </div>
          </nav>
        </div>

        {/* SIDEBAR WIDGET */}
        <div className="bg-[#0b1329] p-8 rounded-2xl border border-blue-500/20 text-xl text-gray-200 mt-8">
          <p className="font-extrabold text-blue-400 mb-3 text-2xl">
            AI COACH RECOMMENDS:
          </p>
          <p>
            Focus on Data Analytics projects with real performance metrics.
          </p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-7 overflow-hidden ml-[460px]">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-[48px] font-bold leading-tight">
            AI Interview Simulation: Machine Learning Intern at Microsoft
          </h1>

          <div className="flex items-center gap-4 bg-[#091325] border border-blue-500/20 px-6 py-3 rounded-full">
            <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
            <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">M</div>
            <span className="font-bold text-2xl text-gray-200 pr-1">MEHAK TAJ</span>
            <span className="text-gray-500 text-lg">▼</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex gap-7 h-[calc(100vh-130px)]">
          {/* CHAT */}
          <div className="w-[68%] rounded-[36px] border border-blue-500/20 bg-gradient-to-b from-[#071327] to-[#05101f] p-8 flex flex-col">
            {/* PROFILE */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl">
                M
              </div>
              <span className="text-[30px] font-bold tracking-wide">
                MEHAK
              </span>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto pr-3 space-y-7">
              {messages?.map((msg: any, index: number) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    msg.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {msg.role === "ai" && (
                    <div className="w-12 h-12 rounded-full bg-[#0f1c35] border border-blue-500/20 flex items-center justify-center text-xl">
                      🤖
                    </div>
                  )}

                  <div
                    className={`max-w-[60%] px-8 py-7 rounded-[28px] text-[20px] leading-9 ${
                      msg.role === "ai"
                        ? "bg-[#111c35] border border-blue-500/20"
                        : "bg-[#1b2843] border border-gray-600/30"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center font-bold">
                      M
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type your response..."
                  className="w-full bg-[#081425] border border-blue-500/20 rounded-3xl h-[85px] px-8 pr-24 text-[20px] text-white placeholder:text-gray-500 focus:outline-none"
                />
                <button onClick={handleSend}className="absolute right-5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Send size={24} />
                </button>
              </div>

              {/* QUICK ACCESS */}
              <div className="mt-8 border-t border-blue-500/10 pt-7">
                <p className="text-center text-gray-400 text-[16px] mb-7 tracking-[4px] uppercase font-semibold">
                  Quick Access
                </p>

                <div className="grid grid-cols-5 gap-5">
                    <button
  onClick={() => navigate("/resume-analyzer")}
  className="bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-400/20 rounded-3xl py-6 text-[17px] font-semibold flex flex-col items-center gap-3 hover:scale-105 transition"
>
                    <FileText size={24} className="text-cyan-300" />
                    Analyze Resume
                  </button>
                  <button
  onClick={() => navigate("/career-roadmap")}
  className="bg-gradient-to-br from-purple-600/30 to-pink-500/20 border border-pink-400/20 rounded-3xl py-6 text-[17px] font-semibold flex flex-col items-center gap-3 hover:scale-105 transition"
>
                    <Map size={24} className="text-pink-300" />
                    Explore Roadmap
                  </button>
                  <button
  onClick={() => navigate("/ai-chat")}
  className="bg-gradient-to-br from-orange-500/30 to-yellow-500/20 border border-yellow-300/20 rounded-3xl py-6 text-[17px] font-semibold flex flex-col items-center gap-3 hover:scale-105 transition"
>
                    <Rocket size={24} className="text-yellow-200" />
                    AI Career Coach
                  </button>
                  <button
  onClick={() => navigate("/mock-interview")}
  className="bg-gradient-to-br from-green-500/30 to-emerald-500/20 border border-green-300/20 rounded-3xl py-6 text-[17px] font-semibold flex flex-col items-center gap-3 hover:scale-105 transition"
>
                    <Mic size={24} className="text-green-200" />
                    Mock Interview
                  </button>
                  <button
  onClick={() => navigate("/skills")}
  className="bg-gradient-to-br from-indigo-500/30 to-violet-500/20 border border-violet-300/20 rounded-3xl py-6 text-[17px] font-semibold flex flex-col items-center gap-3 hover:scale-105 transition"
>
                    <GraduationCap size={24} className="text-violet-200" />
                    Skills Development
                  </button>
                </div>

                {/* QUOTE */}
                <div className="mt-8 rounded-3xl border border-blue-500/10 bg-gradient-to-r from-[#0b1529] to-[#091120] p-7 text-center shadow-lg">
                  <p className="text-[22px] leading-10 font-medium text-gray-200 italic">
                    “The future belongs to those who learn more skills and
                    combine them in creative ways.”
                  </p>
                  <p className="mt-4 text-blue-400 text-[18px] font-semibold">
                    — AI Career Mentor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 flex flex-col gap-7">
            {/* AI CARD */}
            <div className="rounded-[34px] border border-blue-500/20 bg-gradient-to-b from-[#0d1a34] to-[#091425] p-8">
              <p className="text-blue-400 font-bold text-[18px] mb-4">
                AI COACH RECOMMENDS:
              </p>
              <p className="text-gray-300 leading-9 text-[19px]">
                {chatData?.recommendation} like Azure ML and ONNX.
              </p>
            </div>

            {/* INSIGHTS */}
            <div className="flex-1 rounded-[34px] border border-blue-500/20 bg-gradient-to-b from-[#071327] to-[#05101f] p-8">
              <div className="flex items-center gap-4 mb-7">
                <CheckCircle2 size={26} className="text-blue-400" />
                <h2 className="font-bold text-[34px]">
                  Resume Insights
                </h2>
              </div>

              {/* SCORE */}
              <div className="rounded-3xl border border-blue-500/10 bg-[#0c1628] p-7 mb-7">
                <p className="text-gray-400 text-[18px] mb-3">
                  Live Match Score
                </p>
                <div className="text-8xl font-black text-green-400">
                  {chatData?.matchScore}%
                </div>
              </div>

              {/* SKILLS */}
              <div className="mt-8">
                <p className="text-gray-300 text-[22px] font-bold mb-6">
                  Relevant Detected Skills
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {chatData?.skills?.map((skill: string, index: number) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-5 font-bold text-[18px] shadow-lg flex items-center gap-3"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIChat;