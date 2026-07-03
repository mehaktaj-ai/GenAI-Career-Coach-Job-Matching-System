import React, { useEffect, useState } from 'react';
import { getRoadmap } from "../services/roadmapService";
import { 
  BookOpen, Code2, BrainCircuit, Network, Target, Rocket, 
  Database, Terminal, Cpu, Activity, 
  BarChart, Github, MessageSquare, Star, Brain,
  Bot, Laptop, Globe, Briefcase
} from 'lucide-react';

const roadmapData = [
  { 
    stage: 1, title: 'FOUNDATION', duration: '(0–3 Months)', color: 'bg-purple-600', goalColor: 'bg-purple-600/20', icon: <BookOpen size={50} />, 
    skills: ['Learn Python', 'Basic Mathematics', 'Data Structures & Algorithms', 'Problem Solving'], 
    goal: 'Build a rock-solid foundation in programming, logic, and mathematics, which are the absolute pillars for any AI career.' 
  },
  { 
    stage: 2, title: 'CORE SKILLS', duration: '(3–6 Months)', color: 'bg-blue-600', goalColor: 'bg-blue-600/20', icon: <Code2 size={50} />, 
    skills: ['OOP in Python', 'SQL & Databases', 'Statistics & Probability', 'Explore NumPy, Pandas'], 
    goal: 'Master data manipulation and the core statistical concepts required to handle and interpret datasets effectively.' 
  },
  { 
    stage: 3, title: 'MACHINE LEARNING', duration: '(6–12 Months)', color: 'bg-teal-600', goalColor: 'bg-teal-600/20', icon: <BrainCircuit size={50} />, 
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Scikit-learn Projects'], 
    goal: 'Understand and implement core ML algorithms. Start building real-world models and learn how to evaluate their performance.' 
  },
  { 
    stage: 4, title: 'DEEP LEARNING', duration: '(12–18 Months)', color: 'bg-lime-600', goalColor: 'bg-lime-600/20', icon: <Network size={50} />, 
    skills: ['Neural Networks', 'Deep Learning Basics', 'TensorFlow / PyTorch', 'CNN, RNN, LSTM'], 
    goal: 'Dive into neural networks. Learn to build advanced architectures capable of handling complex unstructured data like images and text.' 
  },
  { 
    stage: 5, title: 'SPECIALIZATION', duration: '(18–24 Months)', color: 'bg-orange-600', goalColor: 'bg-orange-600/20', icon: <Target size={50} />, 
    skills: ['NLP / Computer Vision / RL', 'Deploy Models', 'MLOps Basics', 'Advanced Projects'], 
    goal: 'Choose a niche (NLP, Vision, or RL) and learn to deploy your models into production environments using MLOps practices.' 
  },
  { 
    stage: 6, title: 'CAREER GROWTH', duration: '(24+ Months)', color: 'bg-pink-600', goalColor: 'bg-pink-600/20', icon: <Rocket size={50} />, 
    skills: ['Build Portfolio', 'Contribute to Open Source', 'Apply for Jobs', 'Keep Learning & Grow'], 
    goal: 'Showcase your expertise through a professional portfolio and open-source contributions to land your dream AI Engineer role.' 
  },
];

const CareerRoadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [selectedStage, setSelectedStage] = useState<any>(null);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    try {
      const response = await getRoadmap();
      setRoadmap(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!roadmap) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#02040a] text-white p-12 md:p-20 font-sans select-none overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="flex items-center justify-center gap-8 mb-20 relative z-10">
        <div className="border-2 border-blue-500/50 p-4 rounded-full bg-blue-950/20 text-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.4)]">
          <Brain size={90} strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <h1 className="text-8xl font-black tracking-tight uppercase leading-none">
            <span className="text-blue-500 block mb-2">AI ENGINEER</span>
            <span className="text-white block">CAREER ROADMAP</span>
          </h1>
          <p className="text-3xl text-gray-400 font-medium mt-4">
            Your step-by-step guide to becoming an AI Engineer
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="w-full h-5 bg-gray-700 rounded-full">
          <div
            className="h-5 bg-green-500 rounded-full"
            style={{
              width: `${(completedStages.length / 6) * 100}%`
            }}
          ></div>
        </div>
        <p className="mt-3 text-2xl">
          Progress : {completedStages.length}/6 Stages Completed
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mb-16 relative z-10">
        {roadmap.stages.map((item, index) => {
          const design = roadmapData[index];
          return (
            <React.Fragment key={index}>
              <div
                onClick={() => setSelectedStage(item)}
                className={`w-[320px] min-h-[650px] cursor-pointer bg-[#050812] border rounded-[2rem]
                ${completedStages.includes(item.stage)
                  ? "border-green-500"
                  : "border-gray-800"}
                hover:border-blue-500 transition-all duration-500 hover:scale-105`}
              >
                <div className={`${design.color} py-6 text-center font-black text-3xl tracking-widest`}>
                  STAGE {item.stage}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-center mb-8">
                    <div className="bg-[#0a0f1d] p-7 rounded-full border border-gray-700 text-blue-400">
                      {design.icon}
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-black mb-3">{item.title}</h2>
                    <p className="text-blue-400 font-bold text-2xl">{item.duration}</p>
                  </div>
                  <ul className="space-y-6 mb-10 flex-1">
                    {item.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-4 text-2xl text-gray-300 font-medium">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mt-3 shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-auto ${design.goalColor} p-6 rounded-3xl border border-gray-800`}>
                    <p className="text-lg font-black text-blue-400 uppercase tracking-widest mb-3">Goal:</p>
                    <p className="text-xl font-semibold leading-relaxed text-gray-200">{item.goal}</p>
                  </div>
                </div>
              </div>
              {index !== roadmapData.length - 1 && (
                <div className="hidden xl:flex mx-2">
                  <svg width="70" height="70" viewBox="0 0 24 24" className="animate-pulse">
                    <defs>
                      <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M9 18l6-6-6-6" fill="none" stroke={`url(#grad${index})`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {selectedStage && (
        <div className="bg-[#050812] border border-blue-500 rounded-3xl p-8 mb-10">
          <h2 className="text-4xl font-bold text-blue-400">
            Stage {selectedStage.stage} - {selectedStage.title}
          </h2>
          <p className="text-gray-300 mt-4 text-2xl">
            {selectedStage.goal}
          </p>
          <button
            onClick={() => {
              if (!completedStages.includes(selectedStage.stage)) {
                setCompletedStages([...completedStages, selectedStage.stage]);
              }
            }}
            className="mt-8 bg-green-600 px-8 py-4 rounded-xl text-2xl font-bold"
          >
            Mark Stage Complete
          </button>
        </div>
      )}

      <div className="bg-[#050812] border border-gray-800 rounded-3xl p-10 mb-10 relative z-10">
        <h3 className="text-center text-3xl font-black uppercase tracking-widest text-gray-400 mb-10">Essential Skills to Master</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: 'Python', icon: <Terminal size={34} />, color: 'text-yellow-400' },
            { name: 'SQL', icon: <Database size={34} />, color: 'text-blue-400' },
            { name: 'Statistics', icon: <BarChart size={34} />, color: 'text-green-400' },
            { name: 'Machine Learning', icon: <BrainCircuit size={34} />, color: 'text-purple-400' },
            { name: 'Deep Learning', icon: <Network size={34} />, color: 'text-pink-400' },
            { name: 'TensorFlow / PyTorch', icon: <Cpu size={34} />, color: 'text-orange-500' },
            { name: 'Data Visualization', icon: <Activity size={34} />, color: 'text-red-400' },
            { name: 'Problem Solving', icon: <Target size={34} />, color: 'text-teal-400' },
            { name: 'Git & GitHub', icon: <Github size={34} />, color: 'text-gray-300' },
            { name: 'Communication', icon: <MessageSquare size={34} />, color: 'text-blue-300' }
          ].map((skill, i) => (
            <div key={i} className="flex flex-col items-center gap-3 hover:scale-110 transition duration-300">
              <div className={`bg-[#0a0f1d] p-5 rounded-2xl ${skill.color}`}>{skill.icon}</div>
              <span className="text-lg font-bold text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-3xl p-10 mb-10 relative z-10">
        <h3 className="text-center text-4xl font-black uppercase tracking-widest text-gray-300 mb-10">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-gray-300">
          {roadmap.tools.map((tool, index) => (
            <div key={index} className="bg-[#0a0f1d] px-8 py-5 rounded-2xl border border-gray-700">{tool}</div>
          ))}
        </div>
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-3xl p-10 mb-10 relative z-10">
        <h3 className="text-center text-4xl font-black uppercase tracking-widest text-gray-300 mb-10">Career Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {roadmap.careers.map((career, index) => (
            <div key={index} className="bg-[#0a0f1d] border border-gray-700 rounded-3xl p-8 flex flex-col items-center gap-5 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="text-blue-400">
                {index === 0 ? <Bot size={40} /> : index === 1 ? <BrainCircuit size={40} /> : index === 2 ? <BarChart size={40} /> : <Globe size={40} />}
              </div>
              <h4 className="text-2xl font-black text-center">{career}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
        <div className="bg-[#050812] border border-gray-800 rounded-3xl p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-900 p-4 rounded-xl">
              <Star className="text-purple-400" size={40} />
            </div>
            <h3 className="text-5xl font-black uppercase">Tips For Success</h3>
          </div>
          <ul className="grid grid-cols-2 gap-y-6 text-gray-400 text-3xl font-semibold leading-relaxed">
            {roadmap.tips.map((tip, index) => (
              <li key={index}>✓ {tip}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#050812] border border-gray-800 rounded-3xl p-10 flex items-center justify-between">
          <p className="text-4xl italic text-gray-300 font-medium max-w-2xl leading-relaxed">
            "The journey from student to AI Engineer begins with one line of code."
          </p>
          <Rocket size={80} className="text-blue-500" />
        </div>
      </div>

      <div className="flex justify-center mb-12 relative z-10">
        <button className="px-14 py-6 text-3xl font-black rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105">
          Start Your AI Journey Today
        </button>
      </div>

      <div className="text-center text-gray-500 text-2xl font-semibold relative z-10">
        Designed & Developed by Mehak Taj
      </div>
    </div>
  );
};

export default CareerRoadmap;