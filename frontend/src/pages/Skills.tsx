import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSkills } from "../services/skillsService";

import {
  MoreHorizontal,
  BotMessageSquare,
  Search,
  Briefcase,
  Bot,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Mic,
  Map,
  Lightbulb,
  User,
  Building2,
  Settings,
  Facebook,
  Youtube,
} from "lucide-react";

/* =========================
    TYPES
========================= */

interface MetricCardProps {
  name: string;
  percentage: string;
  bars: number[];
}

interface SkillBadgeProps {
  text: string;
  color: "cyan" | "green" | "yellow" | "purple";
}

/* =========================
    MAIN COMPONENT
========================= */

const SkillsMatchAnalysisPage = () => {

  const navigate = useNavigate();
  const [skillData, setSkillData] = useState<any>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getSkills();
        console.log(res.data);
        setSkillData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSkills();
  }, []);

  const categories = [
    {
      name: "Technical Skills",
      percentage: "94%",
      bars: [80, 72, 58, 62, 88],
    },
    {
      name: "Soft Skills",
      percentage: "85%",
      bars: [82, 70, 58, 64, 84],
    },
    {
      name: "Culture Fit",
      percentage: "88%",
      bars: [76, 64, 52, 58, 82],
    },
    {
      name: "Project Experience",
      percentage: "90%",
      bars: [80, 68, 64, 54, 82],
    },
  ];

  const skillGroups = skillData?.skills
    ? [
        {
          group: "ML & AI",
          skills: (skillData.skills.ml_ai || []).map((s: string) => ({
            text: s,
            color: "cyan" as const,
          })),
        },
        {
          group: "Data Science",
          skills: (skillData.skills.data_science || []).map((s: string) => ({
            text: s,
            color: "green" as const,
          })),
        },
        {
          group: "Cloud & Tools",
          skills: (skillData.skills.cloud || []).map((s: string) => ({
            text: s,
            color: "yellow" as const,
          })),
        },
        {
          group: "Project",
          skills: (skillData.skills.project || []).map((s: string) => ({
            text: s,
            color: "purple" as const,
          })),
        },
      ]
    : [];

  const quickAccess = [
  {
    label: "Analyze Resume",
    icon: BotMessageSquare,
    route: "/resume-analyzer",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-400/40",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-300",
  },
  {
    label: "Explore Roadmap",
    icon: Search,
    route: "/career-roadmap",
    glow: "shadow-blue-500/20",
    border: "border-blue-400/20",
    iconBg: "bg-slate-700/30",
    iconColor: "text-slate-300",
  },
  {
    label: "Find Jobs",
    icon: Briefcase,
    route: "/job-match",
    glow: "shadow-green-500/20",
    border: "border-green-400/40",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-300",
  },
  {
    label: "Chat Coach",
    icon: Bot,
    route: "/ai-chat",
    glow: "shadow-pink-500/20",
    border: "border-pink-400/40",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-300",
  },
];

  return (
    <div className="min-h-screen bg-[#030817] text-white overflow-hidden">
      <style>
        {`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex">

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
            <nav className="space-y-12 flex-1 overflow-y-auto text-2xl font-bold">

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
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl text-gray-300"
                  >
                    <LayoutDashboard size={36} />
                    Dashboard
                  </div>

                  <div
                    onClick={() => navigate("/resume-analyzer")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <FileText size={36} />
                    Resume Analyzer
                  </div>

                  <div
                    onClick={() => navigate("/job-match")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Briefcase size={36} />
                    Job Match Module
                  </div>

                  <div
                    onClick={() => navigate("/ai-chat")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <MessageSquare size={36} />
                    AI Career Coach Chat
                  </div>

                  <div
                    onClick={() => navigate("/mock-interview")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Mic size={36} />
                    Mock Interview Module
                  </div>

                  <div
                    onClick={() => navigate("/career-roadmap")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <Map size={36} />
                    Career Roadmap
                  </div>

                  <div
                    onClick={() => navigate("/skills")}
                    className="flex items-center gap-5 bg-blue-600/10 p-5 rounded-xl text-blue-400 font-extrabold border border-blue-500/20 text-3xl cursor-pointer"
                  >
                    <Lightbulb size={36} />
                    Skills Development
                  </div>

                  <div
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-5 cursor-pointer hover:text-white p-4 pl-6 text-3xl"
                  >
                    <User size={36} />
                    Profile Page
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
                  <Building2 size={36} />
                  Recruiter Dashboard
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
                  <Settings size={36} />
                  Admin Dashboard
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
        <main className="flex-1 ml-[460px] px-12 py-12">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-16">

            <h1 className="text-[28px] md:text-[42px] font-bold leading-tight">
              Skills & Match Analysis:
              <span className="font-light text-slate-300 ml-4">
                Machine Learning Intern at Microsoft (Bengaluru)
              </span>
            </h1>

            <div className="flex items-center gap-6 text-slate-300">
              <span className="text-4xl cursor-pointer hover:scale-110 transition">🔔</span>
              <div className="bg-[#1e293b] rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl text-gray-200 border border-gray-700">M</div>
              <span className="font-bold text-2xl text-gray-200 pr-1">MEHAK TAJ</span>
              <span className="text-gray-500 text-lg">▼</span>
            </div>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_0.8fr] gap-10">

            {/* LEFT */}
            <div>

              {/* AI MATCH CARD */}
              <div className="relative rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-[#081525] via-[#07111d] to-[#07101c] p-12 shadow-[0_0_80px_rgba(0,255,255,0.06)] overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_45%)]" />

                <div className="relative z-10">

                  <h2 className="text-center text-[40px] font-bold mb-16 text-white">
                    AI Match Analysis
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">

                    {/* LEFT METRICS */}
                    <div className="flex flex-col gap-16">
                      <MetricCard
                        name="Technical Skills"
                        percentage={`${skillData?.categories?.technical ?? 0}%`}
                        bars={[80, 72, 58, 62, 88]}
                      />

                      <MetricCard
                        name="Soft Skills"
                        percentage={`${skillData?.categories?.soft ?? 0}%`}
                        bars={[82, 70, 58, 64, 84]}
                      />

                      <MetricCard
                        name="Culture Fit"
                        percentage={`${skillData?.categories?.culture ?? 0}%`}
                        bars={[76, 64, 52, 58, 82]}
                      />

                      <MetricCard
                        name="Project Experience"
                        percentage={`${skillData?.categories?.project ?? 0}%`}
                        bars={[80, 68, 64, 54, 82]}
                      />

                    </div>

                    {/* DONUT */}
                    <div className="flex items-center justify-center">

                      <div className="relative w-[360px] h-[360px]">

                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `conic-gradient(
                              #ffb21d 0% 30%,
                              #64f2d3 30% 65%,
                              #9b5cff 65% ${skillData?.matchScore || 91}%,
                              rgba(255,255,255,0.08) ${skillData?.matchScore || 91}% 100%
                            )`,
                          }}
                        />

                        <div className="absolute inset-[32px] rounded-full bg-[#07111d] border border-cyan-400/10 flex items-center justify-center">

                          <div className="absolute inset-7 rounded-full bg-[#081525]" />

                          <span className="relative z-10 text-[84px] font-extrabold text-[#ffbf2f]">
                            {skillData?.matchScore || 91}%
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* RIGHT METRICS */}
                    <div className="flex flex-col gap-16">
                      <MetricCard {...categories[1]} />
                      <MetricCard {...categories[3]} />
                    </div>

                  </div>

                  {/* FEEDBACK */}
                  <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-[#0a1523]/80 backdrop-blur-md px-10 py-8 text-[30px] leading-[52px] text-slate-300 shadow-inner">

                    <span className="text-cyan-300 font-semibold">
                      AI Feedback:
                    </span> {skillData?.feedback ?? " Loading feedback..."}

                  </div>

                </div>
              </div>

              {/* QUICK ACCESS */}
              <div className="mt-16">

                <h3 className="text-center text-slate-400 tracking-[0.5em] text-[24px] font-bold mb-10">
                  QUICK ACCESS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                  {quickAccess.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => navigate(item.route)}

                      className={`rounded-[2rem] border ${item.border} bg-[#091320]/90 p-8 flex items-center gap-6 shadow-lg ${item.glow} hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                    >

                      <div
                        className={`w-20 h-20 rounded-[2rem] flex items-center justify-center ${item.iconBg}`}
                      >
                        <item.icon
                          className={`${item.iconColor}`}
                          size={36}
                        />
                      </div>

                      <span className="font-semibold text-[24px] text-slate-100">
                        {item.label}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* FOOTER */}
              <footer className="w-full max-w-[3200px] mx-auto px-4 py-14">

                <div className="bg-[#08101f]/70 border border-white/10 rounded-[40px] px-16 py-12 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-12">

                  <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
                    "Success in tech is not built by talent alone.
                    <br />
                    It grows through consistent learning, real projects, and evolving skills!"
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

            </div>

            {/* RIGHT PANEL */}
            <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-[#0b1626] to-[#091320] p-12 shadow-[0_0_60px_rgba(0,255,255,0.06)]">

              <h2 className="text-[42px] font-extrabold text-center mb-16">
                Relevant Detected Skills
              </h2>

              <div className="space-y-12">
                {skillGroups.length === 0 ? (
                  <div className="text-center py-20 text-slate-400">
                    <div className="text-6xl mb-6">🧠</div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      No Skills Found
                    </h3>
                    <p className="text-xl">
                      Skills will appear here after analysis is loaded.
                    </p>
                  </div>
                ) : (
                  skillGroups.map((group, index) => (
                    <div key={index}>

                      <h3 className="text-white uppercase tracking-[0.4em] text-[22px] mb-8 font-extrabold">
                        {group.group}
                      </h3>

                      <div className="flex flex-wrap gap-6">

                        {group.skills.map((skill) => (
                          <SkillBadge
                            key={skill.text}
                            text={skill.text}
                            color={skill.color}
                          />
                        ))}

                      </div>

                    </div>
                  ))
                )}
              </div>

              {/* STRENGTHS */}
              <div className="mt-12">

                <h2 className="text-[30px] font-bold text-green-400 mb-6">
                  💪 Strengths
                </h2>

                <div className="space-y-4">

                  {skillData?.strengths?.map((item:any,index:number)=>(
                    <div
                      key={index}
                      className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 text-2xl font-semibold"
                    >
                      ✅ {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
};

/* =========================
    METRIC CARD
========================= */

const MetricCard: React.FC<MetricCardProps> = ({
  name,
  percentage,
  bars,
}) => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-end gap-5 h-[140px]">

        {bars.map((height, idx) => (
          <div
            key={idx}
            className={`w-10 rounded-t-xl ${
              idx === 0
                ? "bg-gradient-to-t from-[#9b5cff] to-[#c08dff]"
                : "bg-gradient-to-t from-[#18d5d2] to-[#6ef0d2]"
            }`}
            style={{
              height: `${height + 20}px`,
            }}
          />
        ))}

      </div>

      <p className="mt-8 text-[26px] font-medium text-slate-100">
        {name}{" "}
        <span className="text-[#63f2d2] font-bold">
          ({percentage})
        </span>
      </p>

    </div>
  );
};

/* =========================
    SKILL BADGE
========================= */

const SkillBadge: React.FC<SkillBadgeProps> = ({
  text,
  color,
}) => {
  const styles = {
    cyan: "border-cyan-400 text-cyan-200 bg-cyan-500/10",
    green: "border-green-400 text-green-200 bg-green-500/10",
    yellow: "border-yellow-400 text-yellow-200 bg-yellow-500/10",
    purple: "border-purple-400 text-purple-200 bg-purple-500/10",
  };

  return (
    <span
      className={`px-8 py-5 rounded-full border bg-[#09111d] text-[24px] font-semibold ${styles[color]}`}
    >
      {text}
    </span>
  );
};

export default SkillsMatchAnalysisPage;