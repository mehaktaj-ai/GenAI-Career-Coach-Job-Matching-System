import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Chrome,
  Linkedin,
  Search,
  Map,
  Briefcase,
  MessageSquare,
  Instagram,
  Youtube,
  CheckCircle2,
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon = (props: IconProps) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const Register = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const getPasswordStrength = () => {
    if (password.length === 0) return 0;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
  };

  const strength = getPasswordStrength();
  console.log("Create Account button clicked");

 const handleCreateAccount = async () => {
  // Validation Logic
  if (!username || !email || !password || !confirmPassword) {
    setErrorMessage("Please fill all the required fields");
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setErrorMessage("Please enter a valid email address");
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
    return;
  }

  if (password !== confirmPassword) {
    setErrorMessage("Passwords do not match");
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
    return;
  }

  if (strength < 3) {
    setErrorMessage("Password is too weak");
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name: username,
        email,
        password,
      }
    );

    alert("Registration Success");
    console.log(res.data);
    setShowNotification(true);

setTimeout(() => {
  setShowNotification(false);
  navigate("/login");
}, 2000);

  } catch (error: any) {
  console.log("SERVER ERROR:", error.response?.data);
  setErrorMessage(error.response?.data?.message || "Registration failed");
  setShowError(true);
  setTimeout(() => setShowError(false), 3000);
}
};

    return (
      <div className="min-h-screen bg-[#030816] text-white flex items-center justify-center px-12 py-16 font-sans overflow-hidden relative">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-180px] left-[-180px] w-[900px] h-[900px] bg-blue-600/20 blur-[260px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-180px] right-[-180px] w-[900px] h-[900px] bg-cyan-500/10 blur-[260px] rounded-full pointer-events-none"></div>
        
        <div className="w-full max-w-[3400px] bg-[#111827]/50 border border-gray-800 rounded-[50px] px-20 py-20 shadow-2xl relative z-50 backdrop-blur-xl">

          {/* SUCCESS POPUP */}
          {showNotification && (
            <div className="absolute top-8 right-8 bg-[#243454]/95 border border-blue-500/30 px-10 py-7 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.5)] z-50 flex items-center gap-6 animate-in fade-in slide-in-from-top-5">
              <CheckCircle2 className="w-14 h-14 text-green-400" />
              <div>
                <p className="text-3xl font-semibold">
                  Account Created Successfully!
                </p>
                <p className="text-xl text-gray-300">
                  Welcome to your AI journey 🚀
                </p>
              </div>
            </div>
          )}

          {/* ERROR POPUP */}
          {showError && (
            <div className="absolute top-8 right-8 bg-red-500/20 border border-red-500/40 px-10 py-7 rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.5)] z-50 flex items-center gap-6 animate-in fade-in slide-in-from-top-5">
              <div>
                <p className="text-3xl font-semibold text-red-400">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-28 items-center">

            {/* LEFT SIDE */}
            <div className="hidden md:flex flex-col relative h-[850px]">

              {/* ROCKET PATH */}
              <div className="absolute top-40 left-0 w-full h-[350px] border-b-[18px] border-cyan-400/40 rounded-full transform -rotate-12"></div>

              {/* GLOW */}
              <div className="absolute top-48 left-20 w-[500px] h-[280px] bg-cyan-400/20 blur-[130px] rounded-full"></div>

            {/* ROCKET */}
            <div className="absolute top-56 left-44 text-[220px] rotate-45 z-10 drop-shadow-[0_0_55px_rgba(34,211,238,0.8)]">
              🚀
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            {/* REGISTER BOX */}
            <div className="w-full max-w-[1400px] bg-[#1a2235]/80 border border-white/10 backdrop-blur-2xl rounded-[45px] px-24 py-24 shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              {/* HEADING */}
              <h2 className="text-7xl font-bold mb-16 tracking-wide text-center text-white leading-tight">
                START YOUR AI JOURNEY
              </h2>

              {/* USERNAME */}
              <div className="relative mb-8">
                <User className="absolute left-6 top-7 text-gray-500 w-10 h-10" />

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#111827]/80 border border-gray-600 rounded-[28px] py-7 pl-24 pr-8 text-4xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* EMAIL */}
              <div className="relative mb-8">
                <Mail className="absolute left-6 top-7 text-gray-500 w-10 h-10" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111827]/80 border border-gray-600 rounded-[28px] py-7 pl-24 pr-8 text-4xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* PASSWORD + CONFIRM PASSWORD */}
              <div className="grid grid-cols-2 gap-8 mb-8">

                <div className="relative">
                  <Lock className="absolute left-6 top-7 text-gray-500 w-10 h-10" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#111827]/80 border border-gray-600 rounded-[28px] py-7 pl-24 pr-24 text-4xl outline-none focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-6 top-7 text-gray-500 w-10 h-10" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#111827]/80 border border-gray-600 rounded-[28px] py-7 pl-24 pr-24 text-4xl outline-none focus:border-blue-500"
                  />

                  {showPassword ? (
                    <EyeOff
                      onClick={() => setShowPassword(false)}
                      className="absolute right-6 top-7 text-gray-500 cursor-pointer w-10 h-10"
                    />
                  ) : (
                    <Eye
                      onClick={() => setShowPassword(true)}
                      className="absolute right-6 top-7 text-gray-500 cursor-pointer w-10 h-10"
                    />
                  )}
                </div>
              </div>

              {/* PASSWORD */}
              <div className="text-2xl text-gray-400 flex justify-between pt-2 mb-4">
                <span>PASSWORD STRENGTH</span>

                <button className="text-blue-400 hover:underline">
                  Generate Password
                </button>
              </div>

              {/* PASSWORD STRENGTH BAR */}
              <div className="w-[55%] h-3 bg-gray-700 rounded-full overflow-hidden mb-10">

                <div
                  className={`h-full transition-all duration-500 ${
                    strength === 1
                      ? 'w-1/4 bg-red-500'
                      : strength === 2
                      ? 'w-2/4 bg-yellow-500'
                      : strength === 3
                      ? 'w-3/4 bg-blue-500'
                      : strength === 4
                      ? 'w-full bg-green-500'
                      : 'w-0'
                  }`}
                ></div>

              </div>

              {/* BUTTON */}
              <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-[1.02] transition-all duration-300 py-7 rounded-[28px] text-4xl font-bold shadow-lg shadow-blue-900/20 cursor-pointer"
              >
                CREATE ACCOUNT
              </button>
              {/* DIVIDER */}
              <div className="text-center text-2xl text-gray-500 py-8">
                — OR CONTINUE WITH —
              </div>

              {/* GOOGLE */}
              <button className="w-full border border-gray-600 py-7 rounded-[28px] hover:bg-gray-800/60 transition flex items-center justify-center gap-5 mb-6 text-3xl">
                <div className="text-4xl font-bold">
                  <span className="text-blue-500">G</span>
                </div>
                Continue with Google
              </button>

              {/* LINKEDIN */}
              <button className="w-full border border-gray-600 py-7 rounded-[28px] hover:bg-gray-800/60 transition flex items-center justify-center gap-5 text-3xl">
                <Linkedin className="w-9 h-9 text-blue-400" />
                Continue with LinkedIn
              </button>

            </div>
          </div>
        </div>

        {/* QUICK ACCESS */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-[40px] px-20 py-16">

          <div className="text-center text-gray-300 uppercase tracking-[10px] text-3xl mb-14">
            QUICK ACCESS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-24">

            {[
              { icon: Search, label: "Analyze Resume", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-400/30" },
              { icon: Map, label: "Explore Roadmap", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-400/30" },
              { icon: Briefcase, label: "Find Jobs", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-400/30" },
              { icon: MessageSquare, label: "Chat Coach", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/30" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 hover:scale-105 transition-all duration-300 cursor-pointer">

                <div className={`p-7 rounded-[28px] border ${item.bg} ${item.border}`}>
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>

                <span className="font-medium text-4xl text-gray-200 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-10">

          <p className="text-gray-300 text-4xl italic text-center lg:text-left leading-[70px]">
            "Unlock your AI-powered experience.
            <br />
              Start your journey with CareerCoachAI."
          </p>

          <div className="flex flex-col items-center lg:items-end gap-6">

            <div className="flex gap-8">

              <div className="p-5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all">
                <FacebookIcon className="w-9 h-9 text-blue-400 cursor-pointer" />
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
      </div>
    </div>
  );
};

export default Register;