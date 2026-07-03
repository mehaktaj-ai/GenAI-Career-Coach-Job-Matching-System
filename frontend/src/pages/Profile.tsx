import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  LayoutDashboard, FileText, Bot, Briefcase, User, ChevronUp, 
  Home, LogIn, UserPlus, Mic, ShieldCheck, Users, Map, MessageSquare,
  Facebook, Instagram, Youtube, Linkedin, Building2, Settings, Lightbulb,
  BookOpen, Code2, BrainCircuit, Network, Target, Trophy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("summary");
  
  const [formData, setFormData] = useState({
    phone: "",
    location: "",
    bio: "",
    skills: "",
    linkedin: "",
    github: "",
    portfolio: "",
    desiredRole: "",
    preferredCompany: "",
    expectedSalary: "",
  });
  
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        
        setUser(res.data.user);
        setFormData({
          phone: res.data.user.phone || "",
          location: res.data.user.location || "",
          bio: res.data.user.bio || "",
          skills: res.data.user.skills?.join(", ") || "",
          linkedin: res.data.user.socialLinks?.linkedin || "",
          github: res.data.user.socialLinks?.github || "",
          portfolio: res.data.user.socialLinks?.portfolio || "",
          desiredRole: res.data.user.careerGoal?.desiredRole || "",
          preferredCompany: res.data.user.careerGoal?.preferredCompany || "",
          expectedSalary: res.data.user.careerGoal?.expectedSalary || "",
        });
      } catch (error) {
        console.log("Profile Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAI = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/ai/profile-analysis",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAnalysis(res.data.analysis);
      } catch (error) {
        console.log("AI Error:", error);
      }
    };

    fetchProfile();
    fetchAI();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const payload = {
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
        skills: formData.skills ? formData.skills.split(",").map((skill) => skill.trim()) : [],
        socialLinks: {
          linkedin: formData.linkedin,
          github: formData.github,
          portfolio: formData.portfolio,
        },
        careerGoal: {
          desiredRole: formData.desiredRole,
          preferredCompany: formData.preferredCompany,
          expectedSalary: formData.expectedSalary,
        },
      };

      const res = await axios.put(
        "http://localhost:5000/api/user/profile",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(res.data.user);
      setEditMode(false);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };
  
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      <aside className="fixed top-0 bottom-0 left-0 w-[520px] border-r border-gray-800 p-12 flex flex-col bg-[#030816] z-20 justify-between">
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center gap-6 mb-16 shrink-0 whitespace-nowrap">
            <div className="bg-blue-600/20 p-5 rounded-2xl border border-blue-500/30 text-blue-400 text-5xl flex items-center justify-center shrink-0">🔮</div>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-4xl font-extrabold tracking-wide">Career Advisor</span>
          </div>

          <nav className="space-y-16 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-3xl font-bold">
            <div>
              <p className="text-gray-400 text-2xl uppercase mb-8 tracking-widest font-extrabold">Authentication</p>
              <div className="space-y-8 text-gray-300">
                <div onClick={() => navigate("/")} className="flex items-center gap-6 cursor-pointer hover:text-white transition pl-2 text-4xl">🏠 Landing Page</div>
                <div onClick={() => navigate("/login")} className="flex items-center gap-6 cursor-pointer hover:text-white transition pl-2 text-4xl">📄 Login</div>
                <div onClick={() => navigate("/register")} className="flex items-center gap-6 cursor-pointer hover:text-white transition pl-2 text-4xl">👤 Register</div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-2xl uppercase mb-8 tracking-widest font-extrabold">Student Portal</p>
              <div className="space-y-8 text-gray-300">
                <div onClick={() => navigate("/dashboard")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><LayoutDashboard size={48}/> Dashboard</div>
                <div onClick={() => navigate("/resume-analyzer")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><FileText size={48}/> Resume Analyzer</div>
                <div onClick={() => navigate("/job-match")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><Briefcase size={48}/> Job Match Module</div>
                <div onClick={() => navigate("/ai-chat")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><MessageSquare size={48}/> AI Career Coach Chat</div>
                <div onClick={() => navigate("/mock-interview")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><Mic size={48}/> Mock Interview Module</div>
                <div onClick={() => navigate("/career-roadmap")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><Map size={48}/> Career Roadmap</div>
                <div onClick={() => navigate("/skills")} className="flex items-center gap-6 cursor-pointer hover:text-white p-6 pl-8 text-4xl"><Lightbulb size={48}/> Skills Development</div>
                <div onClick={() => navigate("/profile")} className="flex items-center gap-6 bg-blue-600/10 p-8 rounded-2xl text-blue-400 font-extrabold border border-blue-500/20 text-4xl cursor-pointer"><User size={48}/> Profile Page</div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-2xl uppercase mb-8 tracking-widest font-extrabold">Recruiter Portal</p>
              <div onClick={() => navigate("/recruiter-dashboard")} className="flex items-center gap-6 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-12 text-4xl"><Building2 size={48}/> Recruiter Dashboard</div>
            </div>

            <div>
              <p className="text-gray-400 text-2xl uppercase mb-8 tracking-widest font-extrabold">Admin Portal</p>
              <div onClick={() => navigate("/admin-dashboard")} className="flex items-center gap-6 text-gray-300 cursor-pointer hover:text-white transition pl-2 text-4xl"><Settings size={48}/> Admin Dashboard</div>
            </div>
          </nav>
        </div>

        <div className="bg-[#0b1329] p-10 rounded-3xl border border-blue-500/20 text-2xl text-gray-200 mt-10">
          <p className="font-extrabold text-blue-400 mb-5 text-3xl">AI COACH RECOMMENDS:</p>
          <p>Focus on Data Analytics projects with real performance metrics.</p>
        </div>
      </aside>

      <main className="flex-1 p-12 overflow-y-auto bg-[#0b0e14] ml-[520px]">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-semibold">User Profile: <span className="text-teal-400 ml-2">{user?.name}</span></h2>
          <div className="flex gap-3">
            {editMode && <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold">Save</button>}
            <button onClick={() => setEditMode(!editMode)} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold">{editMode ? "Cancel" : "Edit Profile"}</button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 bg-[#0d1117] p-10 rounded-3xl border border-teal-500/50 shadow-[0_0_30px_-10px_rgba(20,184,166,0.3)]">
            <div className="w-48 h-48 bg-gray-600 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl">👤</div>
            <h3 className="text-7xl font-bold text-center mb-14"> {user?.name}</h3>
            <div className="mt-6 text-2xl text-gray-300 space-y-8 font-semibold">
              <p><span className="text-gray-400 block text-lg font-normal uppercase tracking-widest">Full Name</span> {user?.name || "Not added"}</p>
              <p><span className="text-gray-400 block text-lg font-normal uppercase tracking-widest">Email Address</span> {user?.email || "Not added"} </p>
              <p>
                <span className="text-gray-400 block text-lg font-normal uppercase tracking-widest">Phone Number</span>
                {editMode ? (<input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (user?.phone || "Not added")}
              </p>
              <p className="border-b border-teal-400/50 pb-6">
                <span className="text-gray-500 block text-lg font-normal uppercase tracking-widest">Location</span>
                {editMode ? (<input type="text" value={formData.location} onChange={(e)=> setFormData({...formData, location:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (user?.location || "Not added")}
              </p>
            </div>
            
            <div className="mt-8 text-xl text-gray-300 leading-relaxed">
              <span className="font-bold text-teal-400 block mb-2">Bio:</span> 
              {editMode ? (<textarea rows={4} value={formData.bio} onChange={(e)=> setFormData({...formData, bio:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (user?.bio || "No bio available")}
            </div>

            <div className="mt-8 text-xl text-gray-300 leading-relaxed">
              <p className="font-bold text-teal-400 block mb-2">Skills:</p>
              {editMode ? (<input type="text" placeholder="React, Node, MongoDB" value={formData.skills} onChange={(e)=> setFormData({...formData, skills:e.target.value})} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p>{user?.skills?.join(", ") || "Not added"}</p>)}
            </div>

            <div className="mt-8 space-y-6 text-xl text-gray-300 leading-relaxed border-t border-teal-400/50 pt-6">
              <p className="font-bold text-teal-400 block mb-2 uppercase tracking-widest text-lg">Social Links</p>
              <div>
                <p className="font-bold text-gray-400 text-lg">LinkedIn</p>
                {editMode ? (<input type="text" value={formData.linkedin} onChange={(e)=> setFormData({...formData, linkedin:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.socialLinks?.linkedin || "Not added"}</p>)}
              </div>
              <div>
                <p className="font-bold text-gray-400 text-lg">GitHub</p>
                {editMode ? (<input type="text" value={formData.github} onChange={(e)=> setFormData({...formData, github:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.socialLinks?.github || "Not added"}</p>)}
              </div>
              <div>
                <p className="font-bold text-gray-400 text-lg">Portfolio</p>
                {editMode ? (<input type="text" value={formData.portfolio} onChange={(e)=> setFormData({...formData, portfolio:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.socialLinks?.portfolio || "Not added"}</p>)}
              </div>
            </div>

            <div className="mt-8 space-y-6 text-xl text-gray-300 leading-relaxed border-t border-teal-400/50 pt-6">
              <p className="font-bold text-teal-400 block mb-2 uppercase tracking-widest text-lg">Career Goals</p>
              <div>
                <p className="font-bold text-gray-400 text-lg">Desired Role</p>
                {editMode ? (<input type="text" value={formData.desiredRole} onChange={(e)=> setFormData({...formData, desiredRole:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.careerGoal?.desiredRole || "Not added"}</p>)}
              </div>
              <div>
                <p className="font-bold text-gray-400 text-lg">Preferred Company</p>
                {editMode ? (<input type="text" value={formData.preferredCompany} onChange={(e)=> setFormData({...formData, preferredCompany:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.careerGoal?.preferredCompany || "Not added"}</p>)}
              </div>
              <div>
                <p className="font-bold text-gray-400 text-lg">Expected Salary</p>
                {editMode ? (<input type="text" value={formData.expectedSalary} onChange={(e)=> setFormData({...formData, expectedSalary:e.target.value})} className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600"/>) : (<p className="text-gray-300">{user?.careerGoal?.expectedSalary || "Not added"}</p>)}
              </div>
            </div>
          </div>

          <div className="col-span-8 space-y-8">
            <div className="bg-[#0d1117] p-10 rounded-3xl border border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              <h3 className="text-5xl font-bold mb-8 text-center">AI Profile Analysis</h3>
              <div className="h-px w-full bg-gray-700 mb-8"></div>
              
              <div className="grid grid-cols-3 gap-8">
                {/* Strong Technical Skill Set */}
                <div className="bg-[#161b22] p-8 rounded-3xl border border-gray-800">
                    <h3 className="text-2xl font-bold text-teal-400 mb-6">Strong Technical Skill Set</h3>
                    <div className="space-y-4 text-gray-300">
                        <div className="flex items-center gap-3"><span className="text-green-400">✔</span> Python & Java Programming</div>
                        <div className="flex items-center gap-3"><span className="text-green-400">✔</span> SQL & MongoDB Database Skills</div>
                        <div className="flex items-center gap-3"><span className="text-green-400">✔</span> React & Node.js Development</div>
                        <div className="flex items-center gap-3"><span className="text-green-400">✔</span> Machine Learning Fundamentals</div>
                        <div className="flex items-center gap-3"><span className="text-green-400">✔</span> Fast Learner & Problem Solver</div>
                    </div>
                </div>
                
                {/* Project Match */}
                <div className="bg-[#161b22] p-8 rounded-3xl border border-gray-800">
                  <p className="text-2xl text-gray-300 mb-6 font-bold">Project Match Progress</p>
                  <div className="flex gap-3 items-end h-28 mb-4">
                    <div className="w-full bg-purple-500 rounded-t-lg h-[90%]"></div>
                    <div className="w-full bg-teal-400 rounded-t-lg h-[80%]"></div>
                    <div className="w-full bg-teal-400 rounded-t-lg h-[65%]"></div>
                    <div className="w-full bg-teal-400 rounded-t-lg h-[50%]"></div>
                    <div className="w-full bg-teal-400 rounded-t-lg h-[90%]"></div>
                  </div>
                  <p className="text-3xl font-bold text-teal-400 mb-4">{analysis?.projectMatchProgress ?? 0}%</p>
                  <p className="text-xl font-bold text-gray-300">Project Experience</p>
                </div>
                
                {/* Skills Overview */}
                <div className="bg-[#161b22] p-8 rounded-3xl border border-gray-800">
                  <p className="text-2xl text-gray-200 mb-6 font-bold text-center">Overall Score</p>
                  <div className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-full border-[12px] border-teal-500 flex flex-col items-center justify-center font-bold text-4xl text-teal-400">
                      <span className="text-white text-6xl">{analysis?.score ?? 0}%</span>
                      <span className="text-lg text-gray-400 font-normal">Overall</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI CAREER ROADMAP */}
            <div className="bg-[#0d1117] p-10 rounded-3xl border border-gray-800">
                <h3 className="text-4xl font-bold mb-12">AI Career Roadmap</h3>
                <div className="flex items-center justify-between gap-4">
                    {[
                        { name: 'FOUNDATION', icon: <BookOpen size={40}/>, color: 'bg-purple-600' },
                        { name: 'CORE SKILLS', icon: <Code2 size={40}/>, color: 'bg-blue-600' },
                        { name: 'MACHINE LEARNING', icon: <BrainCircuit size={40}/>, color: 'bg-green-600' },
                        { name: 'DEEP LEARNING', icon: <Network size={40}/>, color: 'bg-emerald-600' },
                        { name: 'SPECIALIZATION', icon: <Target size={40}/>, color: 'bg-orange-600' },
                        { name: 'CAREER ZENITH', icon: <Trophy size={40}/>, color: 'bg-indigo-600' }
                    ].map((stage, i) => (
                        <div key={i} onClick={() => navigate("/career-roadmap")} className="flex flex-col items-center flex-1 cursor-pointer hover:scale-105 transition-all">
                        <div className={`w-32 h-32 ${stage.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg border border-white/10`}>{stage.icon}</div>
                        <span className="text-lg font-extrabold tracking-wider">{stage.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended Jobs & Learning */}
            <div className="grid grid-cols-2 gap-8 mt-8">

              {/* Recommended Jobs */}
              <div className="bg-[#161b22] rounded-3xl border border-gray-800 p-8">

                <h2 className="text-3xl font-bold text-teal-400 mb-6">
                  Recommended Jobs
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <div>
                      <p className="font-bold">AI Engineer Intern</p>
                      <p className="text-gray-400 text-sm">Google</p>
                    </div>
                    <span className="text-green-400 font-bold">92%</span>
                  </div>

                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <div>
                      <p className="font-bold">Machine Learning Intern</p>
                      <p className="text-gray-400 text-sm">Microsoft</p>
                    </div>
                    <span className="text-green-400 font-bold">89%</span>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">Data Analyst</p>
                      <p className="text-gray-400 text-sm">Amazon</p>
                    </div>
                    <span className="text-green-400 font-bold">86%</span>
                  </div>

                </div>

              </div>

              {/* Learning Resources */}

              <div className="bg-[#161b22] rounded-3xl border border-gray-800 p-8">

                <h2 className="text-3xl font-bold text-teal-400 mb-6">
                  Learning Resources
                </h2>

                <div className="space-y-4">

                  <p>📘 React Official Documentation</p>

                  <p>🐍 Python Crash Course</p>

                  <p>🤖 Machine Learning Roadmap</p>

                  <p>📊 SQL Practice Problems</p>

                  <p>🎯 LeetCode Daily Challenge</p>

                  <p>☁ AWS Cloud Practitioner</p>

                </div>

              </div>

            </div>

            {/* New Grid Sections */}
            <div className="grid grid-cols-3 gap-8 mt-8">
                {/* Resume Insights */}
                <div className="bg-[#161b22] rounded-3xl border border-gray-800 p-8 min-h-[450px] flex flex-col">
                    <h3 className="text-2xl font-bold text-teal-400 mb-6">Resume Insights</h3>
                    <div className="space-y-5 flex-1">
                        <div className="flex justify-between"><span>Resume Score</span><span className="text-teal-400 font-bold">{analysis?.score ?? 90}%</span></div>
                        <div className="flex justify-between"><span>Skills Added</span><span>{user?.skills?.length || 0}</span></div>
                        <div className="flex justify-between"><span>Projects</span><span>4</span></div>
                        <div className="flex justify-between"><span>ATS Friendly</span><span className="text-green-400">Yes</span></div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-[#161b22] rounded-3xl border border-gray-800 p-8 min-h-[450px] flex flex-col">
                    <h3 className="text-2xl font-bold text-teal-400 mb-6">Recent Activity</h3>
                    <div className="space-y-4 flex-1">
                        <p>✅ Resume Uploaded</p>
                        <p>✅ Profile Updated</p>
                        <p>✅ AI Roadmap Generated</p>
                        <p>✅ Skills Updated</p>
                    </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-[#161b22] rounded-3xl border border-gray-800 p-8 min-h-[450px] flex flex-col">
                    <h3 className="text-2xl font-bold text-teal-400 mb-6">Upcoming Tasks</h3>
                    <div className="space-y-4 flex-1">
                        <p>📘 Learn Docker</p>
                        <p>💻 Build ML Project</p>
                        <p>📝 Practice DSA</p>
                        <p>🚀 Apply for Internship</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-[#161b22] p-10 rounded-3xl border border-gray-700 mt-8">
          <h3 className="text-xl text-gray-500 font-bold mb-8 tracking-widest uppercase">Quick Access</h3>
          <div className="flex gap-8 text-3xl">
            <div onClick={() => navigate("/resume-analyzer")} className="flex items-center gap-4 bg-[#0d1117] px-8 py-6 rounded-2xl border border-gray-800 cursor-pointer hover:bg-gray-800"><FileText size={40} className="text-blue-400"/> <span>Analyze Resume</span></div>
            <div onClick={() => navigate("/career-roadmap")} className="flex items-center gap-4 bg-[#0d1117] px-8 py-6 rounded-2xl border border-gray-800 cursor-pointer hover:bg-gray-800"><Map size={40} className="text-blue-400"/> <span>Explore Roadmap</span></div>
            <div onClick={() => navigate("/job-match")} className="flex items-center gap-4 bg-[#0d1117] px-8 py-6 rounded-2xl border border-green-900 cursor-pointer hover:bg-green-900/20"><Briefcase size={40} className="text-green-400"/> <span>Find Jobs</span></div>
            <div onClick={() => navigate("/ai-chat")} className="flex items-center gap-4 bg-[#0d1117] px-8 py-6 rounded-2xl border border-purple-900 cursor-pointer hover:bg-purple-900/20"><MessageSquare size={40} className="text-purple-400"/> <span>Chat Coach</span></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;