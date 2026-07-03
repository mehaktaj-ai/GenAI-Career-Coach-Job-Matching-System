import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Chrome,
  Linkedin,
  CheckCircle2,
  Eye,
  EyeOff,
  Instagram, 
  Youtube,
  Briefcase,
  MessageSquare,
  Search,
  Map,
  Rocket,
  Bot,
} from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon = (props: IconProps) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

export default function Login() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/dashboard");
    }, 2000);

  } catch (error: any) {
    alert(error.response?.data?.message || "Login Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#030816] overflow-hidden text-white relative flex flex-col items-center justify-center px-12 py-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[950px] h-[950px] bg-blue-600/20 blur-[280px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[950px] h-[950px] bg-cyan-500/10 blur-[280px] rounded-full"></div>

      {/* CHATBOT */}
      <div className="fixed bottom-10 right-10 z-50">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 rounded-full shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:scale-110 transition-all duration-300 cursor-pointer">
          <Bot className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[3400px] border border-white/10 rounded-[45px] bg-[#08101f]/70 backdrop-blur-xl shadow-2xl p-20 relative">

        {/* SUCCESS POPUP */}
        {showPopup && (
          <div className="absolute top-10 right-16 z-50">
            <div className="bg-[#243454]/95 border border-blue-400/40 backdrop-blur-xl rounded-3xl px-14 py-7 flex items-center gap-7 shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-in fade-in slide-in-from-top-5 duration-300">
              <CheckCircle2 className="w-16 h-16 text-green-400" />
              <span className="text-5xl font-semibold text-white">
                Login Successful
              </span>
            </div>
          </div>
        )}

        {/* TOP GLOW */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-[2px] opacity-70"></div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-40 items-center">

          {/* LEFT SIDE */}
          <div className="relative h-[950px] flex items-center justify-center">

            {/* ROCKET PATH */}
            <div className="absolute left-0 top-52 w-[850px] h-[350px] border-t-[18px] border-l-[18px] border-cyan-400/70 rounded-full blur-[1px] rotate-[-12deg]"></div>

            {/* ROCKET */}
            <Rocket
              className="w-[420px] h-[420px] text-cyan-300 rotate-45 drop-shadow-[0_0_80px_rgba(34,211,238,0.9)]"
              strokeWidth={1.5}
            />
          </div>

          {/* LOGIN CARD */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1250px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[45px] px-24 py-24 shadow-[0_0_40px_rgba(255,255,255,0.06)]">

              <h1 className="text-8xl font-light text-center mb-20 tracking-wide leading-tight">
                SIGN IN TO YOUR AI JOURNEY
              </h1>

              <form onSubmit={handleSignIn} className="space-y-12">

                {/* EMAIL */}
                <div className="relative">
                  <Mail className="absolute left-7 top-7 w-10 h-10 text-gray-300" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mehaktaj123@gmail.com"
                    required
                    className="w-full bg-[#111827]/80 border border-white/20 rounded-[32px] py-8 pl-28 pr-8 text-4xl text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                {/* PASSWORD */}
                <div className="relative">
                  <Lock className="absolute left-7 top-7 w-10 h-10 text-gray-300" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="mehaktaj123"
                    required
                    className="w-full bg-[#111827]/80 border border-blue-500/50 rounded-[32px] py-8 pl-28 pr-28 text-4xl text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                  />

                  {showPassword ? (
                    <EyeOff
                      onClick={() => setShowPassword(false)}
                      className="absolute right-7 top-7 w-10 h-10 text-gray-300 cursor-pointer"
                    />
                  ) : (
                    <Eye
                      onClick={() => setShowPassword(true)}
                      className="absolute right-7 top-7 w-10 h-10 text-gray-300 cursor-pointer"
                    />
                  )}
                </div>

                {/* REMEMBER ME + FORGOT PASSWORD */}
                <div className="flex items-center justify-between">

                  <label className="flex items-center gap-4 text-2xl text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500"
                    />
                    Remember Me
                  </label>

                  <div className="text-3xl text-gray-300 hover:text-white cursor-pointer">
                    Forgot Password?
                  </div>
                </div>

                {/* SIGN IN BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-[1.02] transition-all duration-300 py-8 rounded-[32px] font-semibold text-5xl shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  {loading ? "LOADING..." : "SIGN IN"}
                </button>
              </form>

              {/* SOCIAL BUTTONS */}
              <div className="space-y-8 mt-12">

                <button className="w-full border border-white/20 hover:bg-white/10 transition-all py-8 rounded-[32px] flex items-center justify-center gap-6 font-medium text-4xl">
                  <Chrome className="w-10 h-10" />
                  CONTINVE WITH GOOGLE
                </button>

                <button className="w-full border border-white/20 hover:bg-white/10 transition-all py-8 rounded-[32px] flex items-center justify-center gap-6 font-medium text-4xl">
                  <Linkedin className="w-10 h-10 text-blue-400" />
                  CONTINVE WITH LINKEDIN
                </button>
              </div>

              {/* SIGNUP */}
              <p className="text-center text-gray-300 mt-14 text-4xl">
                Don't have an account?{" "}
                <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
                  Sign Up
                </span>
              </p>

            </div>
          </div>
        </div>

        {/* QUICK ACCESS */}
        <div className="mt-24 bg-white/5 border border-white/10 rounded-[45px] px-24 py-16">
          <div className="text-center text-gray-300 uppercase tracking-[10px] text-4xl mb-16">
            QUICK ACCESS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-32">
            {[
              { icon: Search, label: "Analyze Resume", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-400/30" },
              { icon: Map, label: "Explore Roadmap", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-400/30" },
              { icon: Briefcase, label: "Find Jobs", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-400/30" },
              { icon: MessageSquare, label: "Chat Coach", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/30" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`p-8 rounded-[32px] border ${item.bg} ${item.border}`}>
                  <item.icon className={`w-14 h-14 ${item.color}`} />
                </div>

                <span className="font-medium text-5xl text-gray-200 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 border-t border-white/10 pt-14 flex flex-col lg:flex-row justify-between items-center gap-12">

          <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
            "Shape your future with the power of AI.
            <br />
            Start your journey with CareerCoachAI!"
          </p>

          <div className="flex flex-col items-center lg:items-end gap-8">

            <div className="flex gap-10 text-gray-300">

              <div className="p-6 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all">
                <FacebookIcon className="w-10 h-10 text-blue-400 cursor-pointer" />
              </div>

              <div className="p-6 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-all">
                <Instagram className="w-10 h-10 text-pink-400 cursor-pointer" />
              </div>

              <div className="p-6 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all">
                <Youtube className="w-10 h-10 text-red-400 cursor-pointer" />
              </div>

              <div className="p-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 transition-all">
                <Linkedin className="w-10 h-10 text-cyan-400 cursor-pointer" />
              </div>
            </div>

            <div className="flex gap-12 text-2xl uppercase tracking-widest text-gray-400">
              <span>Legal</span>
              <span>Links</span>
              <span>Privacy</span>
              <span>Labs</span>
              <span>Policy</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}