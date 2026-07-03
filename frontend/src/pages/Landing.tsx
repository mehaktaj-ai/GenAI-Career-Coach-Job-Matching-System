import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Search, Map, Globe2, MessageSquare, 
  TrendingUp, Users, Briefcase, Layers,
  Facebook, Instagram, Youtube, Linkedin, Rocket
} from 'lucide-react';

export default function Landing() {   
  return (
    <div className="w-full min-h-screen bg-[#020613] text-gray-100 font-sans relative overflow-x-hidden selection:bg-blue-500/30">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />
      
      <div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <header className="w-full max-w-[3200px] mx-auto px-3 sm:px-4 lg:px-5 pt-8">
        <div className="bg-[#080f21]/70 backdrop-blur-xl border border-white/5 rounded-full h-24 px-12 flex items-center justify-between shadow-xl">
          
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2.5 rounded-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>

            <span className="text-xl font-semibold tracking-widest text-white uppercase">
              CareerCoachAI
            </span>
          </div>

          <nav className="hidden md:flex gap-12 text-lg font-medium tracking-widest uppercase text-gray-400">
            {['Features', 'Roadmap', 'Job Match', 'AI Coach', 'Pricing'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">

            <Link
              to="/login"
              className="text-lg font-bold uppercase text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold uppercase px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:shadow-2xl"
            >
              Register
            </Link>

          </div>
        </div>  
      </header>

      <main className="w-full max-w-[3200px] mx-auto px-3 sm:px-4 lg:px-5 pt-28 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">

          <div className="space-y-10">

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[110px] font-black tracking-tight leading-[1.05] text-white">
              NAVIGATE YOUR CAREER <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                WITH CAREERCOACHAI.
              </span>
            </h1>

            <p className="text-gray-400 max-w-3xl text-3xl leading-[55px]">
              Harness AI to analyze your resume, build a personalized roadmap,
              and match with global opportunities in real-time.
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="bg-blue-600 px-10 py-5 rounded-xl font-bold uppercase text-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:shadow-2xl"
              >
                Get Started For Free
              </a>

              <a
                href="#"
                className="bg-white/5 border border-white/10 px-10 py-5 rounded-xl font-bold uppercase text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                Learn More
              </a>

            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative">

            <div className="relative w-[500px] h-[500px] bg-blue-500/10 rounded-full flex items-center justify-center animate-pulse">

              <Rocket className="w-56 h-56 text-blue-500 rotate-45" />

              <div className="absolute -top-12 -right-12 bg-indigo-500 p-6 rounded-full">
                <Globe2 className="w-14 h-14 text-white" />
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Resume Analyzer",
              sub: "AI Resume Analysis (1-100 Score)",
              icon: Search,
              bg: "bg-blue-500",
              border: "border-cyan-500/20",
              text: "text-cyan-300"
            },
            {
              title: "Career Roadmap",
              sub: "Personalized Skill Roadmaps",
              icon: Map,
              bg: "bg-emerald-500",
              border: "border-emerald-500/20",
              text: "text-emerald-300"
            },
            {
              title: "Smart Job Match",
              sub: "Neural Job Matching (95%+ Sync)",
              icon: Globe2,
              bg: "bg-purple-500",
              border: "border-purple-500/20",
              text: "text-purple-300"
            },
            {
              title: "AI Career Coach",
              sub: "24/7 Mock Interviews & Coaching",
              icon: MessageSquare,
              bg: "bg-pink-500",
              border: "border-pink-500/20",
              text: "text-pink-300"
            }
          ].map((card, i) => (

            <div
              key={i}
              className={`bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#020617] border ${card.border} rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-xl`}
            >

              <div className={`w-16 h-16 ${card.bg} rounded-xl flex items-center justify-center mb-8 shadow-lg`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className={`${card.text}/80 text-lg font-medium leading-8`}>
                {card.sub}
              </p>

            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] border border-cyan-500/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-xl">

            <h4 className="text-lg font-bold text-gray-400 uppercase mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              Skills Overview
            </h4>

            <div className="space-y-6">

              {[ 
                { label: 'Skills Overview', val: '85%' },
                { label: 'Node.js', val: '85%' }
              ].map(s => (

                <div key={s.label}>

                  <div className="flex justify-between text-lg text-gray-400 mb-3">
                    <span>{s.label}</span>

                    <span className="text-cyan-400 font-bold">
                      {s.val}
                    </span>
                  </div>

                  <div className="w-full bg-slate-900 h-3 rounded-full">
                    <div className="bg-cyan-500 h-3 rounded-full w-[85%]" />
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-gradient-to-br from-[#1e1b4b] via-[#111827] to-[#020617] border border-purple-500/10 rounded-2xl p-8 flex items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-xl">

            <div>
              <h4 className="text-lg font-bold text-gray-400 uppercase mb-3">
                Platform Analytics
              </h4>

              <div className="text-7xl font-black text-white">
                75%
              </div>

              <p className="text-lg uppercase font-bold text-gray-500 mt-2">
                Overall
              </p>
            </div>

            <div className="relative w-28 h-28 flex items-center justify-center">

              <svg className="w-full h-full -rotate-90">

                <circle
                  cx="56"
                  cy="56"
                  r="46"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-purple-900/30"
                />

                <circle
                  cx="56"
                  cy="56"
                  r="46"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="289"
                  strokeDashoffset="72"
                  className="text-purple-400"
                  strokeLinecap="round"
                />
              </svg>

              <span className="absolute text-lg font-bold text-white">
                75
              </span>

            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] border border-emerald-500/10 rounded-2xl p-8 flex items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-xl">

            <span className="text-3xl font-bold text-white">
              Trusted By
            </span>

            <div className="flex gap-12">

              {[
                {
                  icon: Users,
                  val: "2,540",
                  label: "Total Users",
                  color: "text-cyan-400"
                },
                {
                  icon: Briefcase,
                  val: "184",
                  label: "Active Jobs",
                  color: "text-emerald-400"
                },
                {
                  icon: Layers,
                  val: "86",
                  label: "Recruiters",
                  color: "text-pink-400"
                }
              ].map((m, i) => (

                <div key={i} className="flex items-center gap-4">

                  <m.icon className={`w-8 h-8 ${m.color}`} />

                  <div>
                    <div className="text-lg text-gray-400 uppercase">
                      {m.label}
                    </div>

                    <div className="text-3xl font-bold text-white">
                      {m.val}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-[3200px] mx-auto px-4 py-14">

        <div className="bg-[#08101f]/70 border border-white/10 rounded-[40px] px-16 py-12 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-center gap-12">

          <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
            "The best way to predict the future is to create it.
            <br />
            Start your AI journey today!"
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
  );
}