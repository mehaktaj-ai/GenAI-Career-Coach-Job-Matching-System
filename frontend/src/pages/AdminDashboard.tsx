import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import {
  Users,
  Briefcase,
  ShieldCheck,
  Activity,
  BarChart3,
  Database,
  Brain,
  MessageSquare,
  Mic,
  Map,
  User,
  Building2,
  Settings,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  FileCheck,
  Search,
  Bell,
  Mail,
  FileText,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<any>(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

const res = await axios.get(
  "http://localhost:5000/api/dashboard/admin",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log("DASHBOARD DATA:", res.data);

      setDashboard(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!dashboard) {
    return <h1>Loading...</h1>;
  }
  console.log("DASHBOARD DATA:", dashboard);
  return (
    <div className="min-h-screen flex flex-col bg-[#050B18] text-white">
      <div className="flex flex-1">
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
            <nav
              className="space-y-12 flex-1 overflow-y-auto no-scrollbar text-2xl font-bold"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

              {/* Authentication Section */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Authentication
                </p>
                <div className="space-y-6 text-gray-300">
                  <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl"
                  >
                    🏠 Landing Page
                  </div>
                  <div
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl"
                  >
                    📄 Login
                  </div>
                  <div
                    onClick={() => navigate("/register")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white transition pl-2 text-3xl"
                  >
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
                  <div
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <LayoutDashboard size={42} /> Dashboard
                  </div>

                  <div
                    onClick={() => navigate("/resume-analyzer")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <FileText size={42} /> Resume Analyzer
                  </div>

                  <div
                    onClick={() => navigate("/job-match")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Briefcase size={42} /> Job Match Module
                  </div>

                  <div
                    onClick={() => navigate("/ai-chat")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <MessageSquare size={42} /> AI Career Coach Chat
                  </div>

                  <div
                    onClick={() => navigate("/mock-interview")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Mic size={42} /> Mock Interview Module
                  </div>

                  <div
                    onClick={() => navigate("/career-roadmap")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Map size={42} /> Career Roadmap
                  </div>

                  <div
                    onClick={() => navigate("/skills")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Lightbulb size={42} /> Skills Development
                  </div>

                  <div
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <User size={42} /> Profile Page
                  </div>
                </div>
              </div>

              {/* Recruiter Portal */}
              <div>
                <p className="text-gray-400 text-2xl uppercase mb-6 tracking-widest font-extrabold">
                  Recruiter Portal
                </p>

                <div
                  onClick={() => navigate("/recruiter-dashboard")}
                  className="flex items-center gap-5 text-gray-300 cursor-pointer hover:text-white transition pl-2 mb-10 text-3xl"
                >
                  <Building2 size={42} /> Recruiter Dashboard
                </div>
              </div>

              {/* Admin Portal */}
              <div>
                <p className="text-gray-400 text-xl uppercase mb-6 tracking-widest font-extrabold">
                  Admin Portal
                </p>

                <div
                  onClick={() => navigate("/admin-dashboard")}
                  className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer"
                >
                  <Settings size={42} /> Admin Dashboard
                </div>
              </div>
            </nav>
          </div>

          {/* SIDEBAR WIDGET */}
          <div className="bg-[#0b1329] p-8 rounded-2xl border border-blue-500/20 text-2xl text-gray-200 mt-8">
            <p className="font-extrabold text-blue-400 mb-3 text-3xl">
              AI COACH RECOMMENDS:
            </p>
            <p>Focus on Data Analytics projects with real performance metrics.</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-8 ml-[460px] w-full">
          {/* TOPBAR */}
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={() => navigate(-1)}
              className="px-7 py-4 bg-[#111827] rounded-2xl border border-white/10 text-[24px] hover:bg-[#1F2937] transition"
            >
              ← Back
            </button>

            <h1 className="text-[64px] font-bold tracking-wide">
              Admin Dashboard
            </h1>

            <div className="flex items-center gap-6 bg-[#0d1527] p-4 pl-7 pr-6 rounded-full border border-gray-800">
              <span className="text-4xl cursor-pointer hover:scale-110 transition">
                🔔
              </span>
              <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">
                M
              </div>
              <span className="font-bold text-2xl text-gray-200 pr-1">
                {" "}
                {dashboard.profile.name}
              </span>
              <span className="text-gray-500 text-lg">▼</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<Users size={44} />}
              title="Total Users"
              value={dashboard.stats.totalUsers}
              valueColor="text-blue-400"
              bg="from-blue-500/20 to-blue-700/10"
            />

            <StatCard
              icon={<Briefcase size={44} />}
              title="Active Jobs"
              value={dashboard.stats.activeJobs}
              valueColor="text-green-400"
              bg="from-green-500/20 to-green-700/10"
            />

            <StatCard
              icon={<ShieldCheck size={44} />}
              title="Recruiters"
              value={dashboard.stats.recruiters}
              valueColor="text-pink-400"
              bg="from-pink-500/20 to-pink-700/10"
            />

            <StatCard
              icon={<Activity size={44} />}
              title="AI Sessions"
              value={dashboard.stats.aiSessions}
              valueColor="text-yellow-400"
              bg="from-yellow-500/20 to-yellow-700/10"
            />
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* ANALYTICS */}
            <div className="bg-[#0C1726] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <BarChart3 className="text-blue-400" size={40} />
                <h2 className="text-[46px] font-semibold">Platform Analytics</h2>
              </div>

              <ProgressBar
                label="Student Registrations"
                value={`${dashboard.analytics.registrations}%`}
                width={`${dashboard.analytics.registrations}%`}
                color="bg-blue-500"
              />
              <ProgressBar
                label="Job Placements"
                value={`${dashboard.analytics.placements}%`}
                width={`${dashboard.analytics.placements}%`}
                color="bg-green-500"
              />
              <ProgressBar
                label="AI Usage"
                value={`${dashboard.analytics.aiUsage}%`}
                width={`${dashboard.analytics.aiUsage}%`}
                color="bg-pink-500"
              />
            </div>

            {/* STATUS */}
            <div className="bg-[#0C1726] border border-white/10 rounded-3xl p-8">
              {/* Heading */}
              <div className="flex items-center gap-4 mb-8">
                <Database className="text-green-400" size={28} />
                <h2 className="text-4xl font-bold">System Status</h2>
              </div>

              {/* Dynamic System Status */}
              <div className="space-y-3">
                {dashboard.systemStatus.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-white/10 rounded-xl px-5 py-4"
                  >
                    <span className="text-lg text-white">{item.name}</span>

                    <span className="text-green-400 font-medium">
                      ● {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="grid grid-cols-2 gap-6">
            {/* FEED */}
            <div className="bg-[#0C1726] border border-white/10 rounded-3xl p-8">
              <h2 className="text-[46px] font-semibold mb-8">
                Candidate Activity Feed
              </h2>
              {dashboard.activities.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-700"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <span className="text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>

            {/* QUICK ACCESS */}
            <div className="bg-[#0C1726] border border-white/10 rounded-3xl p-8">
              <h2 className="text-[46px] font-semibold mb-8">
                Recruiter Quick Access
              </h2>
              <div className="grid grid-cols-4 gap-5">
                <QuickCard
                  icon={<Briefcase size={36} className="text-blue-400" />}
                  title={dashboard.quickAccess[0].title}
                  onClick={() => navigate("/admin/jobs")}
                />
                <QuickCard
                  icon={<Users size={36} className="text-green-400" />}
                  title={dashboard.quickAccess[1].title}
                  onClick={() => navigate("/admin/matches")}
                />
                <QuickCard
                  icon={<MessageSquare size={36} className="text-yellow-400" />}
                  title={dashboard.quickAccess[2].title}
                  onClick={() => navigate("/admin/messages")}
                />
                <QuickCard
                  icon={<Brain size={36} className="text-purple-400" />}
                  title={dashboard.quickAccess[3].title}
                  onClick={() => navigate("/admin/analytics")}
                />
                <QuickCard
                  icon={<FileCheck size={36} className="text-emerald-400" />}
                  title={dashboard.quickAccess[4].title}
                  onClick={() => navigate("/admin/verify-docs")}
                />
                <QuickCard
                  icon={<Search size={36} className="text-orange-400" />}
                  title={dashboard.quickAccess[5].title}
                  onClick={() => navigate("/admin/search")}
                />
                <QuickCard
                  icon={<Bell size={36} className="text-red-400" />}
                  title={dashboard.quickAccess[6].title}
                  onClick={() => navigate("/admin/notifications")}
                />
                <QuickCard
                  icon={<Mail size={36} className="text-cyan-400" />}
                  title={dashboard.quickAccess[7].title}
                  onClick={() => navigate("/admin/email")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full px-4 py-14 ml-[400px] w-[calc(100%-340px)]">
        <div className="max-w-[95%] mx-auto bg-[#08101f] border border-white/10 rounded-[30px] px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
            "Empowering smarter decisions through data,
            <br />
            insights, and complete control. 🚀"
          </p>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6 text-gray-300">
              <div className="p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition-all cursor-pointer">
                <Facebook className="w-9 h-9 text-blue-400" />
              </div>
              <div className="p-3 rounded-full bg-white/5 hover:bg-pink-500/20 transition-all cursor-pointer">
                <Instagram className="w-9 h-9 text-pink-400" />
              </div>
              <div className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 transition-all cursor-pointer">
                <Youtube className="w-9 h-9 text-red-400" />
              </div>
              <div className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 transition-all cursor-pointer">
                <Linkedin className="w-9 h-9 text-cyan-400" />
              </div>
            </div>

            <div className="flex gap-8 text-lg uppercase tracking-wider text-gray-500 font-medium">
              <span className="hover:text-blue-400 cursor-pointer transition">
                Legal
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition">
                Links
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition">
                Privacy
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition">
                Labs
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition">
                Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;

/* STAT CARD */
const StatCard = ({ icon, title, value, valueColor, bg }: any) => {
  return (
    <div
      className={`bg-gradient-to-br ${bg} border border-white/10 rounded-3xl p-8 flex items-center justify-between`}
    >
      <div>
        <p className="text-gray-400 text-[24px] mb-3">{title}</p>
        <h2 className={`text-[72px] font-bold ${valueColor}`}>{value}</h2>
      </div>
      <div className="w-28 h-28 rounded-3xl bg-white/10 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

/* PROGRESS BAR */
const ProgressBar = ({ label, value, width, color }: any) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between mb-3">
        <span className="text-[26px] text-gray-300">{label}</span>
        <span className="text-[26px]">{value}</span>
      </div>
      <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`${color} h-full rounded-full`}
          style={{ width }}
        />
      </div>
    </div>
  );
};

/* STATUS ITEM */
const StatusItem = ({ title, status }: { title: string; status: string }) => {
  return (
    <div className="flex justify-between items-center bg-[#111C2D] border border-white/10 rounded-2xl px-6 py-6 mb-5">
      <span className="text-[26px] text-gray-300">{title}</span>
      <div className="flex items-center gap-3 text-green-400 text-[26px]">
        <div className="w-4 h-4 rounded-full bg-green-400" />
        {status}
      </div>
    </div>
  );
};

/* FEED ITEM */
const FeedItem = ({ title, time }: { title: string; time: string }) => {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-6">
      <div>
        <p className="text-[26px] text-gray-200">{title}</p>
        <p className="text-[20px] text-gray-500 mt-2">Updated 8 mins ago</p>
      </div>
      <span className="text-[22px] text-gray-400">{time}</span>
    </div>
  );
};

/* QUICK ACCESS CARD */
const QuickCard = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#111C2D] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#1B2940] transition cursor-pointer"
    >
      <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center">
        {icon}
      </div>

      <p className="text-[22px] text-center text-gray-300 leading-8">{title}</p>
    </div>
  );
};