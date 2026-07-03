import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
  LayoutDashboard, FileText, MessageSquare, Mic, Map, Lightbulb, 
  User, Building2, Settings, Radio, Briefcase,
  FileSearch, Route, BrainCircuit, Headphones, BookOpen,
  Facebook, Instagram, Youtube, Linkedin
} from "lucide-react";

const MockInterview = () => {
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState<any>(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/interview")
      .then((res) => res.json())
      .then((data) => {
        console.log("FULL RESPONSE:", data);
        setInterviewData(data);
        console.log("Match Score:", data?.interviewMatchScore);
      });
  }, []);

  const handleSubmitAnswer = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/interview-answer/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            question: interviewData?.question,
            answer: answer,
          }),
        }
      );

const data = await res.json();
if (data.interviewFinished) {

    setInterviewData((prev:any)=>({
        ...prev,
        performanceScore:data.score,
        clarity:data.score-5,
        relevance:data.score-3,
        confidence:data.score-2,
        techAccuracy:data.score-4
    }));

    setResult(data.result);

    return;
}

setInterviewData((prev: any) => ({
  ...prev,
  question: data.nextQuestion,
  questionNumber: (prev.questionNumber || 1) + 1,
  performanceScore: data.score,
}));

setAnswer("");    } catch (err) {
      console.log(err);
    }
  };

  const handlePracticeRecording = () => {
    console.log("Practice recording started");
    // Add your recording logic here
  };

  return (
    <div className="min-h-screen bg-[#030816] text-white font-sans flex">
      <style>
        {`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      {/* FULL SIDEBAR */}
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
          <nav
            className="space-y-12 flex-1 overflow-y-auto text-2xl font-bold"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
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
                <div onClick={() => navigate("/mock-interview")} className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer">
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

            <div>
              <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                Recruiter Portal
              </p>
              <div onClick={() => navigate("/recruiter-dashboard")} className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-10 text-3xl">
                <Building2 size={36}/> Recruiter Dashboard
              </div>
            </div>

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
          <p>{interviewData?.recommendation}</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-[460px] p-20 flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl font-black">{interviewData?.interviewTitle}</h1>
          <div className="flex items-center gap-8 bg-[#0d1527] px-10 py-6 rounded-full border border-gray-800 text-3xl font-bold">
            <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
            <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">M</div>
            <span className="font-bold text-2xl text-gray-200 pr-1">MEHAK TAJ</span>
            <span className="text-gray-500 text-lg">▼</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 flex-grow">
          <div className="col-span-8 space-y-12">
            <div className="bg-[#0b1329] border border-blue-500/20 rounded-3xl p-14 flex gap-12">
              <div className="relative w-1/2 bg-[#050d1d] rounded-3xl flex flex-col items-center justify-center border border-gray-800 py-40">
                <div className="absolute top-8 right-8 bg-[#0b1329] p-3 rounded-full border border-gray-700">
                  <Radio className="text-red-500" size={32}/>
                </div>
                <div className="text-9xl mb-12">{interviewData?.candidateAvatar}</div>
                <p className="font-bold text-4xl">{interviewData?.candidateName}</p>
                <p className="text-blue-400 text-3xl mt-4">({interviewData?.focusScore}% Focus)</p>
              </div>

              <div className="w-1/2 space-y-10">
                <h2 className="font-bold text-4xl border-b border-gray-700 pb-8">AI Interviewer</h2>
                <p className="text-3xl text-blue-400 font-bold">Question {interviewData?.questionNumber}</p>
                <p className="text-3xl leading-relaxed">{interviewData?.question}</p>

                <div className="bg-[#050d1d] p-10 rounded-3xl border border-gray-800">
                  <div className="flex justify-between text-xl mb-6 text-gray-500">
                    <span className="font-bold">Live Transcription</span>
                    <span className="text-red-500 flex items-center gap-4">
                      <Radio size={24}/> RECORDING
                    </span>
                  </div>
                  <p className="text-3xl italic text-gray-300">{interviewData?.transcription}</p>
                </div>

                <textarea
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full bg-[#050d1d] border border-gray-800 rounded-3xl p-6 text-2xl text-white min-h-[180px]"
                ></textarea>

                <button onClick={handleSubmitAnswer} className="w-full bg-blue-600 py-8 rounded-3xl font-bold text-3xl hover:bg-blue-700">
                  {interviewData?.submitButtonText}
                </button>
                <button onClick={handlePracticeRecording} className="w-full bg-transparent border-2 border-gray-700 py-8 rounded-3xl font-bold text-3xl hover:border-gray-500">
                  {interviewData?.practiceButtonText}
                </button>
              </div>
            </div>

            <div className="bg-[#0b1329] border border-blue-500/20 rounded-3xl p-12">
              <p className="text-gray-400 font-bold mb-10 uppercase tracking-widest text-2xl">Quick Access</p>
              <div className="grid grid-cols-5 gap-8">
                <div onClick={() => navigate("/resume-analyzer")} className="flex flex-col items-center gap-6 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 hover:border-blue-500 cursor-pointer">
                  <FileSearch className="text-blue-500" size={56}/> <span className="text-lg font-bold uppercase tracking-wider">Analyze Resume</span>
                </div>
                <div onClick={() => navigate("/career-roadmap")} className="flex flex-col items-center gap-6 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 hover:border-blue-500 cursor-pointer">
                  <Route className="text-blue-500" size={56}/> <span className="text-lg font-bold uppercase tracking-wider">Explore Roadmap</span>
                </div>
                <div onClick={() => navigate("/ai-chat")} className="flex flex-col items-center gap-6 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 hover:border-blue-500 cursor-pointer">
                  <BrainCircuit className="text-blue-500" size={56}/> <span className="text-lg font-bold uppercase tracking-wider">AI Career Coach</span>
                </div>
                <div onClick={() => navigate("/mock-interview")} className="flex flex-col items-center gap-6 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 hover:border-blue-500 cursor-pointer">
                  <Headphones className="text-blue-500" size={56}/> <span className="text-lg font-bold uppercase tracking-wider">Mock Interview</span>
                </div>
                <div onClick={() => navigate("/skills")} className="flex flex-col items-center gap-6 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 hover:border-blue-500 cursor-pointer">
                  <BookOpen className="text-blue-500" size={56}/> <span className="text-lg font-bold uppercase tracking-wider">Skills Dev</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-12">
            <div className="bg-[#0b1329] border border-blue-500/20 rounded-3xl p-14">
              <h2 className="font-bold text-4xl mb-12">Live Interview Performance</h2>
              <div className="flex justify-center my-16">
                <div className="relative w-64 h-64 flex items-center justify-center rounded-full font-bold text-8xl" style={{ background: `conic-gradient(#f97316 ${interviewData?.performanceScore || 0}%, #1f2937 0)` }}>
                  <div className="w-52 h-52 bg-[#0b1329] rounded-full flex items-center justify-center">{interviewData?.performanceScore}%</div>
                </div>
              </div>

              {result && (
              <div className={`mt-10 p-8 rounded-2xl text-center font-bold text-4xl ${
              result==="PASS"
              ?"bg-green-600"
              :"bg-red-600"
              }`}>
              Interview Result : {result}
              </div>
              )}

              <div className="space-y-10">
                <div className="flex items-center gap-8">
                  <span className="w-40 text-2xl font-semibold">Clarity</span>
                  <div className="flex-1 h-8 bg-gray-800 rounded-full"><div className="h-8 bg-green-500 rounded-full" style={{ width: `${interviewData?.clarity || 0}%` }}></div></div>
                  <span className="text-3xl font-bold text-green-500">{interviewData?.clarity}%</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="w-40 text-2xl font-semibold">Relevance</span>
                  <div className="flex-1 h-8 bg-gray-800 rounded-full"><div className="h-8 bg-orange-500 rounded-full" style={{ width: `${interviewData?.relevance || 0}%` }}></div></div>
                  <span className="text-3xl font-bold text-orange-500">{interviewData?.relevance}%</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="w-40 text-2xl font-semibold">Confidence</span>
                  <div className="flex-1 h-8 bg-gray-800 rounded-full"><div className="h-8 bg-yellow-500 rounded-full" style={{ width: `${interviewData?.confidence || 0}%` }}></div></div>
                  <span className="text-3xl font-bold text-yellow-500">{interviewData?.confidence}%</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="w-40 text-2xl font-semibold">Tech Accuracy</span>
                  <div className="flex-1 h-8 bg-gray-800 rounded-full"><div className="h-8 bg-green-500 rounded-full" style={{ width: `${interviewData?.techAccuracy || 0}%` }}></div></div>
                  <span className="text-3xl font-bold text-green-500">{interviewData?.techAccuracy}%</span>
                </div>
              </div>
              <div className="mt-16 p-10 bg-[#050d1d] rounded-3xl border border-gray-800 text-2xl">
                <p className="text-gray-400"><span className="text-white font-bold">Feedback:</span> {interviewData?.feedback}</p>
              </div>
              
            </div>

            <div className="bg-[#0b1329] border border-blue-500/20 rounded-3xl p-14">
              <h3 className="font-bold text-3xl mb-10">Interview-Specific Match Score: <span className="text-green-500">{interviewData?.interviewMatchScore}%</span></h3>
              <div className="flex flex-wrap gap-5">
                {interviewData?.skills?.map((skill: string) => (
                  <span key={skill} className="px-8 py-4 bg-gray-800 rounded-2xl text-2xl font-medium text-gray-300 border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MockInterview;