import { uploadResume } from "../services/resumeService";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mic, 
  Map, 
  Lightbulb, 
  User, 
  Building2, 
  Settings, 
  UploadCloud, 
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";

const ResumeAnalyzer: React.FC = () => {
  const navigate = useNavigate();
  
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("No File Selected");
  const [resumeData, setResumeData] = useState<any>(null);
  
  const skillColors = [
    "bg-blue-950/40 text-blue-400 border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.05)]",
    "bg-red-950/40 text-red-400 border border-red-900/30 shadow-[0_0_15px_rgba(239,68,68,0.05)]",
    "bg-amber-950/40 text-amber-400 border border-amber-900/30 shadow-[0_0_15px_rgba(245,158,11,0.05)]",
    "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30 shadow-[0_0_15px_rgba(16,185,129,0.05)]",
    "bg-cyan-950/40 text-cyan-400 border border-cyan-900/30 shadow-[0_0_15px_rgba(6,182,212,0.05)]",
    "bg-yellow-950/40 text-yellow-400 border border-yellow-900/30 shadow-[0_0_15px_rgba(234,179,8,0.05)]",
    "bg-pink-950/40 text-pink-400 border border-pink-900/30 shadow-[0_0_15px_rgba(236,72,153,0.05)]",
    "bg-purple-950/40 text-purple-400 border border-purple-900/30 shadow-[0_0_15px_rgba(168,85,247,0.05)]",
    "bg-orange-950/40 text-orange-400 border border-orange-900/30 shadow-[0_0_15px_rgba(249,115,22,0.05)]",
    "bg-teal-950/40 text-teal-400 border border-teal-900/30 shadow-[0_0_15px_rgba(20,184,166,0.05)]",
    "bg-indigo-950/40 text-indigo-300 border border-indigo-900/30 shadow-[0_0_15px_rgba(99,102,241,0.05)]",
  ];  

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    const file = files[0];

    setFileName(file.name);
    setIsUploaded(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await uploadResume(formData);
      console.log(JSON.stringify(response.data, null, 2));
      setResumeData(response.data.resume);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030816] text-white font-sans relative text-2xl select-none">
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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
                
                <div onClick={() => navigate("/dashboard")} className="flex items-center gap-5 p-4 pl-6 cursor-pointer hover:text-white hover:bg-white/5 rounded-xl transition text-3xl">
                  <LayoutDashboard size={36}/> Dashboard
                </div>

                <div onClick={() => navigate("/resume-analyzer")} className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer">
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
                className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-10 text-3xl"
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
        <div className="bg-[#0b1329] p-8 rounded-2xl border border-blue-500/20 text-xl text-gray-200 mt-8">
          <p className="font-extrabold text-blue-400 mb-3 text-2xl">
            AI COACH RECOMMENDS:
          </p>
          <p>
            Focus on Data Analytics projects with real performance metrics.
          </p>
        </div>
      </aside>

      <main className="ml-[460px] p-12 pt-6 md:p-16 md:pt-8 flex flex-col min-h-screen bg-[#030816]">
        
        <header className="mb-8 flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Resume Analyzer
            </h1>
          </div>
          
          <div className="flex items-center gap-6 bg-[#0d1527] p-4 pl-7 pr-6 rounded-full border border-gray-800">
            <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
            <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">M</div>
            <span className="font-bold text-2xl text-gray-200 pr-1">MEHAK TAJ</span>
            <span className="text-gray-500 text-lg">▼</span>
          </div>
        </header>

        <div className="mb-10 flex items-center justify-center min-h-[60px]">
          {isUploaded && (
            <div className="bg-emerald-950/30 text-emerald-400 border border-emerald-500/20 px-10 py-4 rounded-xl flex items-center gap-4 text-xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300">
              <CheckCircle2 className="w-7 h-7" /> Resume uploaded successfully!
            </div>
          )}
        </div>

        <div className="space-y-10 flex-1 flex flex-col">
          
          <div className="bg-[#0b1224]/90 border-2 border-dashed border-blue-500/40 rounded-3xl p-16 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <div className="bg-blue-600/10 p-6 rounded-full border border-blue-500/20 text-blue-400 mb-6 shadow-lg">
              <UploadCloud className="w-16 h-16" />
            </div>
            <h2 className="text-4xl font-extrabold mb-3 tracking-wide">Upload Resume</h2>
            <p className="text-gray-400 text-xl mb-8 font-medium">Drag & Drop your PDF resume here</p>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".pdf,.doc,.docx"
              className="hidden" 
            />

            <button 
              onClick={handleButtonClick}
              className="bg-blue-600 hover:bg-blue-500 transition font-extrabold text-lg px-10 py-4 rounded-xl shadow-lg shadow-blue-950/50 mb-8"
            >
              Choose File
            </button>

            <p className="text-lg font-bold tracking-wide text-gray-400">
              FILE STATUS:{" "}
              <span className={`font-extrabold ${isUploaded ? "text-emerald-400" : "text-red-400"}`}>
                {fileName}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <div className="bg-[#0b1224]/90 p-10 rounded-2xl border border-blue-500/30 flex items-center gap-10 min-h-[300px] shadow-[0_0_25px_rgba(59,130,246,0.03)]">
              <div className="relative w-56 h-56 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className="stroke-[#111c35]" strokeWidth="8" fill="transparent" />
                  <circle cx="50" cy="50" r="40" className="stroke-emerald-500" strokeWidth="8" fill="transparent"
                    strokeDasharray={251.2} strokeDashoffset={251.2 - (251.2 * (resumeData?.score || 0)) / 100} strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-6xl font-black text-emerald-400 tracking-tight">  {resumeData?.score ? `${resumeData.score}%` : "0%"}</span>   
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl font-black tracking-wide">Resume Score</h3>
                <p className="text-emerald-400 font-black text-6xl tracking-tight">{resumeData?.score? `${resumeData.score}%` : "Upload Resume"}</p>
                <p className="text-gray-300 text-xl leading-relaxed font-semibold">
                  Excellent optimization for AI/ML and Data Analyst positions.
                </p>
              </div>
            </div>

            <div className="bg-[#0b1224]/90 p-10 rounded-2xl border border-blue-500/30 flex flex-col justify-center space-y-6 min-h-[300px] shadow-[0_0_25px_rgba(59,130,246,0.03)]">
              <h3 className="text-4xl font-black tracking-wide mb-2">
                AI Suggestions
              </h3>

              <div className="space-y-5 text-xl font-bold">
                {resumeData?.suggestions?.map(
                  (suggestion: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-5 text-gray-200"
                    >
                      <CheckCircle2 className="text-emerald-500 w-8 h-8 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{suggestion}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* DETECTED SKILLS */}
          <div className="bg-[#0b1224]/90 p-10 rounded-2xl border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.03)]">
            <h3 className="text-3xl font-extrabold tracking-wide mb-8">Detected Skills</h3>
            <div className="flex flex-wrap gap-4 text-xl font-extrabold">
              {resumeData?.skills?.map((skill: string, index: number) => {
                const colorClass = skillColors[index % skillColors.length];
                return (
                  <span
                    key={index}
                    className={`px-7 py-3 rounded-2xl tracking-wide transition duration-200 hover:scale-[1.05] cursor-default ${colorClass}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="w-full max-w-[3200px] mx-auto px-4 py-14 border-t border-white/5 mt-auto">
          <div className="bg-[#08101f]/70 border border-white/10 rounded-[40px] px-16 py-12 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-12">
            <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
              "Your future is shaped by what you build today.
              <br />
              Start small, think big, stay consistent!"
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
export default ResumeAnalyzer;