import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMatchedJobs } from "../services/jobService";
import {
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
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Search,
  Rocket,
  GraduationCap,
  Database,
  Cloud,
  Code2,
  Globe,
  Award,
} from "lucide-react";

// Custom Wave Components
const BlueWave = () => (
  <svg width="120" height="40" viewBox="0 0 200 50" className="opacity-90">
    <path
      d="M0 40 Q 50 10, 100 40 T 200 40"
      fill="none"
      stroke="#4d7cff"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const GreenWave = () => (
  <svg width="120" height="40" viewBox="0 0 200 50" className="opacity-90">
    <path
      d="M0 40 Q 50 10, 100 40 T 200 40"
      fill="none"
      stroke="#22c55e"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const JobMatch = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<any>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  useEffect(() => {
  fetchJobs();
}, []);

const fetchJobs = async () => {
  try {
    const response = await getMatchedJobs();

    console.log(JSON.stringify(response.data, null, 2));

    setJobData(response.data);
  } catch (error) {
    console.error(error);
  }
};  

  const ProgressRing = ({
    percentage,
    colorId = "default",
    startColor,
    endColor,
    radius = 58,
    stroke = 10,
  }: {
    percentage: number;
    colorId?: string;
    startColor: string;
    endColor: string;
    radius?: number;
    stroke?: number;
  }) => {
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
          <defs>
            <linearGradient id={`gradient-${colorId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={startColor} />
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>
          </defs>
          <circle
            strokeWidth={stroke}
            stroke="#1f2937"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            stroke={`url(#gradient-${colorId})`}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <span className="absolute text-[16px] font-bold">{percentage}%</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030816] text-white flex">
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

                <div onClick={() => navigate("/job-match")} className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer">
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

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-[460px] px-12 py-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[60px] font-black">Job Match Module</h1>
          <div className="flex items-center gap-4 bg-[#081120] border border-[#1b2740] px-8 py-4 rounded-full">
            <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
            <div className="w-14 h-14 rounded-full bg-[#1d2b43] flex items-center justify-center text-[22px] font-semibold">M</div>
            <span className="text-[22px] font-semibold">MEHAK TAJ</span>
             <span className="text-gray-500 text-lg">▼</span>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-3 gap-7 mb-7">
          <div className="col-span-2 bg-[#071120] border border-[#1b2740] rounded-3xl p-8">
            <h3 className="text-[26px] text-gray-300 mb-6 font-semibold">Job Search Momentum</h3>
            <div className="grid grid-cols-2 gap-0">
              <div className="border-r border-[#1d2942] pr-6">
                <p className="text-gray-400 text-[18px] mb-2">Active Jobs (Today)</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-[72px] font-black text-[#4d7cff] leading-none">{jobData?.activeJobs || 0}</h2>
                  <BlueWave />
                </div>
              </div>
              <div className="pl-8">
                <p className="text-gray-400 text-[18px] mb-2">Match Velocity (New/24h)</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-[72px] font-black text-[#f4b544] leading-none"> {jobData?.matchVelocity || 0}</h2>
                  <GreenWave />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#071120] border border-[#1b2740] rounded-3xl p-8">
            <p className="text-[22px] text-gray-300 mb-6">Neural Match compatibility</p>
            <div className="flex items-center gap-6">
              <ProgressRing percentage={jobData?.matchPercentage || 0} colorId="main" startColor="#22c55e" endColor="#f59e0b" radius={58} stroke={9} />
              <div>
                <p className="text-gray-400 text-[18px]">Avg Compatibility:</p>
                <h2 className="text-[70px] text-[#ffb84d] font-black leading-none mt-2">{jobData?.matchPercentage || 0}%</h2>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-5 gap-7">
          <div className="col-span-3 bg-[#071120] border border-[#1b2740] rounded-3xl p-8">
            <h2 className="text-[40px] font-bold mb-8">Active Job Opportunities</h2>
            {jobData?.matchedJobs?.map((job: any, index: number) => (
              <div key={index} className="border-t border-[#1b2740] py-8 flex items-center justify-between">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-white text-black flex items-center justify-center text-5xl">{job.logo}</div>
                  <div>
                    <h3 className="text-[30px] font-semibold">{job.title} at {job.company}</h3>
                    <p className="text-[#32d583] text-[20px] mt-2 font-semibold">Neural Match: {job.match}</p>
                    <div className="flex gap-4 mt-5 flex-wrap">
                      {job.skillsRequired?.map((skill: string, i: number) => (
                        <span key={i} className="bg-[#111d35] border border-[#25314c] px-5 py-2.5 rounded-lg text-[17px] text-gray-300">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <button
  onClick={() => {
    setSelectedJob(job);
    setApplicationSubmitted(false);
  }}
  className="bg-[#2563eb] hover:bg-blue-500 transition px-10 py-5 rounded-xl text-[20px] font-semibold"
>
  Apply Now
</button>
              </div>
            ))}
            <div className="border-t border-[#1b2740] pt-8 mt-2">
                  <button className="text-blue-500 font-semibold text-[20px] hover:text-blue-400 transition">View All Matched Jobs →</button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-7">
            <div className="bg-[#071120] border border-[#1b2740] rounded-3xl p-8 flex-grow">
              <h2 className="text-[40px] font-bold mb-8">Your Career Match Analysis</h2>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-gray-400 text-[20px]">AI Match Score</p>
                  <h1 className="text-[96px] font-black text-[#55e6a5]">{jobData?.matchPercentage || 0}%
</h1>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-center">
                    <ProgressRing percentage={jobData?.technicalSkills || 0} colorId="ts" startColor="#22c55e" endColor="#22c55e" radius={60} stroke={12} />
                    <p className="text-[16px] text-gray-400 mt-3">Technical Skills</p>
                  </div>
                  <div className="text-center">
                    <ProgressRing percentage={jobData?.problemSolving || 0} colorId="ps" startColor="#22c55e" endColor="#f59e0b" radius={60} stroke={12} />
                    <p className="text-[16px] text-gray-400 mt-3">Problem Solving</p>
                  </div>
                  <div className="text-center">
                    <ProgressRing percentage={jobData?.teamwork || 0} colorId="tw" startColor="#22c55e" endColor="#22c55e" radius={60} stroke={12} />
                    <p className="text-[16px] text-gray-400 mt-3">Teamwork</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border border-[#24314b] rounded-2xl p-8 bg-[#0b1629]">
                <p className="text-[#32d583] text-[20px]">
                  Ready: Proficiency:
                  <span className="text-[#a855f7] ml-2">
                    {jobData?.topSkill}
                  </span>
                </p>

                <p className="text-[#32d583] text-[20px] mt-4">
                  Expert in Analytics:
                  <span className="text-[#eab308] ml-2">
                    {jobData?.analyticsSkill}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="bg-[#071120] border border-[#1b2740] rounded-3xl p-8">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-5">
                      <Code2 className="text-[#06b6d4] shrink-0" size={32} />
                      <p className="text-[20px] text-gray-200">High Proficiency: <span className="text-[#06b6d4] font-semibold">{jobData?.topSkill}</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                      <Database className="text-[#f59e0b] shrink-0" size={32} />
                      <p className="text-[20px] text-gray-200">Expert in Analytics: <span className="text-[#f59e0b] font-semibold">{jobData?.analyticsSkill}</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                      <Cloud className="text-[#2dd4bf] shrink-0" size={32} />
                      <p className="text-[20px] text-gray-200">Certified: <span className="text-[#2dd4bf] font-semibold">{jobData?.certification}</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                      <Globe className="text-[#a855f7] shrink-0" size={32} />
                      <p className="text-[20px] text-gray-200">Multilingual: <span className="text-[#a855f7] font-semibold">{jobData?.languages}</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                      <Award className="text-[#fb7185] shrink-0" size={32} />
                      <p className="text-[20px] text-gray-200">Recognition: <span className="text-[#fb7185] font-semibold">{jobData?.recognition}</span></p>
                    </div>
                  </div>
            </div>
          </div>
        </div>

        {/* QUICK ACCESS */}
        <div className="mt-10">
  <hr className="border-gray-800 mb-8" />

  <div className="flex justify-center mb-8">
    <p className="text-white text-[34px] font-black uppercase tracking-[6px] text-center">
      QUICK ACCESS
    </p>
  </div>

  <div className="bg-[#071120] border border-[#1b2740] rounded-3xl p-8">
    <div className="grid grid-cols-5 gap-8 justify-items-center">

      {/* Resume Analyzer */}
      <button
        onClick={() => navigate("/resume-analyzer")}
        className="bg-[#0b1629] border border-[#1b2740] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#111f3d] transition w-full max-w-[180px]"
      >
        <Search className="text-blue-400" size={36} />
        <span className="text-[20px] font-medium text-center">
          Analyze Resume
        </span>
      </button>

      {/* Career Roadmap */}
      <button
        onClick={() => navigate("/career-roadmap")}
        className="bg-[#0b1629] border border-[#1b2740] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#111f3d] transition w-full max-w-[180px]"
      >
        <Rocket className="text-green-400" size={44} />
        <span className="text-[17px] font-medium text-center">
          Explore Roadmap
        </span>
      </button>

      {/* AI Career Coach */}
      <button
        onClick={() => navigate("/ai-chat")}
        className="bg-[#0b1629] border border-[#1b2740] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#111f3d] transition w-full max-w-[180px]"
      >
        <MessageSquare className="text-cyan-400" size={44} />
        <span className="text-[17px] font-medium text-center">
          AI Career Coach
        </span>
      </button>

      {/* Mock Interview */}
      <button
        onClick={() => navigate("/mock-interview")}
        className="bg-[#0b1629] border border-[#1b2740] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#111f3d] transition w-full max-w-[180px]"
      >
        <Mic className="text-purple-400" size={44} />
        <span className="text-[17px] font-medium text-center">
          Mock Interview
        </span>
      </button>

      {/* Skills Development */}
      <button
        onClick={() => navigate("/skills")}
        className="bg-[#0b1629] border border-[#1b2740] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#111f3d] transition w-full max-w-[180px]"
      >
        <GraduationCap className="text-yellow-400" size={44} />
        <span className="text-[17px] font-medium text-center">
          Skills Development
        </span>
      </button>

    </div>
  </div>

  <hr className="border-gray-800 mt-8" />
</div>

        {/* FOOTER */}
        <footer className="w-full pt-7 border-t border-white/5">
          <div className="bg-[#08101f]/70 border border-white/10 rounded-[40px] px-16 py-12 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-12">
            <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
              "Match skills. Unlock opportunities..
              <br />
              Your dream job is just one smart match away!"
            </p>
            <div className="flex flex-col items-center lg:items-end gap-8">
              <div className="flex gap-8 text-gray-300">
                <div className="p-5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all"><Facebook className="w-10 h-10 text-blue-400 cursor-pointer" /></div>
                <div className="p-5 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-all"><Instagram className="w-10 h-10 text-pink-400 cursor-pointer" /></div>
                <div className="p-5 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all"><Youtube className="w-10 h-10 text-red-400 cursor-pointer" /></div>
                <div className="p-5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 transition-all"><Linkedin className="w-10 h-10 text-cyan-400 cursor-pointer" /></div>
              </div>
              <div className="flex gap-10 text-xl uppercase tracking-widest text-gray-500">
                <span>Legal</span><span>Links</span><span>Privacy</span><span>Labs</span><span>Policy</span>
              </div>
            </div>
          </div>
        </footer>
        {selectedJob && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

    <div className="bg-[#071120] border border-blue-500 rounded-3xl p-10 w-[650px]">

      {!applicationSubmitted ? (
        <>
          <h2 className="text-4xl font-bold mb-6">
            Apply for {selectedJob.title}
          </h2>

          <div className="space-y-4 text-xl">

            <p>
              <strong>Company:</strong> {selectedJob.company}
            </p>

            <p>
              <strong>Salary:</strong> {selectedJob.salary}
            </p>

            <p>
              <strong>Required Skills:</strong>
            </p>

            <div className="flex flex-wrap gap-3">
              {selectedJob.skillsRequired.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="bg-blue-600 px-3 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          <div className="flex justify-end gap-4 mt-10">

            <button
              onClick={() => setSelectedJob(null)}
              className="px-6 py-3 bg-gray-700 rounded-xl"
            >
              Cancel
            </button>

            <button
              onClick={() => setApplicationSubmitted(true)}
              className="px-6 py-3 bg-green-600 rounded-xl"
            >
              Submit Application
            </button>

          </div>
        </>
      ) : (
        <div className="text-center">

          <div className="text-7xl mb-6">
            ✅
          </div>

          <h2 className="text-4xl font-bold text-green-400">
            Successfully Applied!
          </h2>

          <p className="mt-5 text-xl">
            Your application for
          </p>

          <p className="text-3xl font-bold mt-3">
            {selectedJob.title}
          </p>

          <p className="text-2xl text-blue-400 mt-2">
            at {selectedJob.company}
          </p>

          <button
            onClick={() => setSelectedJob(null)}
            className="mt-10 bg-blue-600 px-8 py-3 rounded-xl"
          >
            Close
          </button>

        </div>
      )}

    </div>

  </div>
)}
      </main>
    </div>
  );
};
export default JobMatch;