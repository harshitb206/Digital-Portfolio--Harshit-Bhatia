
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Terminal, Shield, Cpu, Activity, Mail, Github, Linkedin, Download, ExternalLink, ChevronRight, GraduationCap, Award } from 'lucide-react';
import CloudBubbles from './CloudBubbles';

interface UIOverlayProps {
  activeBlock: number;
  onNavigate: (index: number) => void;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ activeBlock, onNavigate }) => {
  const GITHUB_URL = "https://github.com/harshitb206";
  const LINKEDIN_URL = "https://www.linkedin.com/in/harshit-bhatia206/";
  const EMAIL = "harshitbhatia206@gmail.com";
  
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.print();
  };

  const navItems = [
    { label: 'HOME', icon: <Activity size={14} /> },
    { label: 'ABOUT', icon: <Shield size={14} /> },
    { label: 'SKILLS', icon: <Cpu size={14} /> },
    { label: 'PROJECTS', icon: <ExternalLink size={14} /> },
    { label: 'CERTIFICATIONS', icon: <Award size={14} /> },
    { label: 'CONTACT', icon: <Mail size={14} /> },
  ];

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-section, .print-section * { visibility: visible !important; }
          .print-section { 
            position: absolute !important; 
            left: 0 !important; 
            top: 0 !important; 
            width: 100% !important;
            height: auto !important;
            background: white !important;
            color: black !important;
            padding: 40px !important;
            display: block !important;
          }
          .no-print { display: none !important; }
        }
        
        .custom-h-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 255, 136, 0.3) transparent;
          scroll-padding-inline: 2rem;
        }

        .custom-h-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .custom-h-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          margin: 0 2rem;
        }
        .custom-h-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 136, 0.2);
          border-radius: 10px;
          border: 1px solid transparent;
          background-clip: content-box;
          transition: all 0.3s ease;
        }
        .custom-h-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 136, 0.6);
          background-clip: content-box;
        }
        
        @media (min-width: 1024px) {
          .custom-h-scroll {
            scroll-padding-inline: 6rem;
          }
          .custom-h-scroll::-webkit-scrollbar-track {
            margin: 0 6rem;
          }
        }
      `}</style>
      
      {/* Printable Resume Layer */}
      <div className="hidden print-section fixed inset-0 bg-white text-black p-12 z-[100] overflow-visible font-sans">
        <div className="max-w-4xl mx-auto border-4 border-black p-8">
          <header className="text-center mb-10 border-b-2 border-black pb-6">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-2 text-black">Harshit Bhatia</h1>
            <p className="text-base font-bold">{EMAIL} | GitHub: harshitb206 | LinkedIn: harshit-bhatia206</p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-black border-b-2 border-black uppercase mb-4 py-1 text-black">Experience</h2>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between font-bold text-lg">
                  <span>{exp.role} @ {exp.organization}</span>
                  <span>{exp.duration}</span>
                </div>
                <ul className="list-disc ml-6 text-sm mt-2 space-y-1">
                  {exp.description.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black border-b-2 border-black uppercase mb-4 py-1 text-black">Featured Projects</h2>
            {PROJECTS.map((proj, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between font-bold text-lg">
                  <span>{proj.title} • {proj.type}</span>
                  <span>{proj.date || ''}</span>
                </div>
                <p className="text-sm mt-1 leading-relaxed">{proj.description}</p>
                <p className="text-xs font-bold mt-2 uppercase tracking-wider">Tech: {proj.stack.join(', ')}</p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black border-b-2 border-black uppercase mb-4 py-1 text-black">Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>{edu.degree}</span>
                  <span>{edu.institution}</span>
                </div>
                <div className="flex justify-between text-sm italic">
                   <span>Result: {edu.details}</span>
                   <span>{edu.duration}, {edu.location}</span>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-10 flex print:hidden">
        {/* Navigation Sidebar */}
        <div className="hidden md:flex flex-col justify-center p-8 pointer-events-auto h-full w-48 lg:w-56 items-start">
          <div className="space-y-6 flex flex-col items-start w-full">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className="group flex items-center gap-4 focus:outline-none w-full text-left"
              >
                <div className={`w-1 h-8 rounded-full transition-all duration-500 ${activeBlock === idx ? 'bg-[#00ff88] shadow-[0_0_15px_#00ff88]' : 'bg-zinc-800'}`} />
                <span className={`text-[11px] font-mono tracking-widest transition-all duration-300 ${activeBlock === idx ? 'text-[#00ff88] translate-x-2 font-bold' : 'text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1'}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col relative h-full">
          {/* Header */}
          <div className="p-6 flex justify-between items-start pointer-events-auto">
            <div className="font-mono">
              <h1 className="text-xl font-bold text-[#00ff88] tracking-tighter">HARSHIT BHATIA</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest"></p>
            </div>
            <div className="text-right font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <p className="text-[#00ff88]">System: ACTIVE</p>
              <p>Amity University Punjab</p>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeBlock === 0 && (
                <motion.div 
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="max-w-4xl relative">
                    <CloudBubbles />
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter text-white z-10 relative"
                    >
                      HARSHIT <span className="text-[#00ff88]">BHATIA</span>
                    </motion.h2>
                    
                    <motion.div 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.1 }}
                       className="mb-10 z-10 relative"
                    >
                      <p className="text-[#00ff88] text-sm md:text-xl mb-3 uppercase tracking-[0.2em] font-bold">
                        Computer Engineering Undergraduate
                      </p>
                      <p className="text-zinc-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed border-t border-zinc-800 pt-4">
                        Applied AI • Machine Learning • System Architecture
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col items-center gap-6 pointer-events-auto z-10 relative"
                    >
                       <button onClick={handleDownload} className="flex items-center gap-2 px-10 py-5 bg-[#00ff88] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_#00ff8844] group">
                         <Download size={14} /> Download Resume <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                       <div className="flex gap-4">
                         <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-5 border border-zinc-800 text-white hover:bg-[#00ff88] hover:text-black transition-all bg-black/40 shadow-xl">
                           <Github size={20} />
                         </a>
                         <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-5 border border-zinc-800 text-white hover:bg-[#00ff88] hover:text-black transition-all bg-black/40 shadow-xl">
                           <Linkedin size={20} />
                         </a>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeBlock === 1 && (SectionContainer(
                "About Me",
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl w-full">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="shrink-0 relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-emerald-600 rounded-2xl blur opacity-20"></div>
                    <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl">
                       <img 
                        src="https://raw.githubusercontent.com/harshitb206/harshitb206/main/profile.jpg" 
                        alt="Harshit Bhatia" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://ui-avatars.com/api/?name=Harshit+Bhatia&background=0D0D0D&color=00FF88&size=512";
                        }}
                       />
                       <div className="absolute inset-0 border-8 border-black/40 pointer-events-none"></div>
                    </div>
                    <div className="mt-4 p-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-lg text-center">
                       <p className="text-[10px] text-[#00ff88] font-mono font-bold uppercase tracking-widest">Identity: BHATIA_206</p>
                    </div>
                  </motion.div>

                  <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed flex-1 relative">
                    <CloudBubbles />
                    <div className="flex items-center gap-3 text-[#00ff88] mb-6">
                      <Shield size={20} />
                      <span className="text-xs uppercase tracking-[0.3em]">Personal Profile</span>
                    </div>
                    <p className="border-l-4 border-zinc-800 pl-6 py-2 transition-all hover:border-[#00ff88]">
                      Hi, I’m <span className="text-[#00ff88] font-bold text-lg">Harshit Bhatia</span>, a pre-final B.Tech Computer Science Engineering student at <span className="text-white font-bold">Amity University, Punjab</span>.
                    </p>
                    <p className="border-l-4 border-zinc-800 pl-6 py-2 transition-all hover:border-[#00ff88]">
                      I specialize in <span className="text-white font-bold">Machine Learning and AI</span>, with hands-on experience in K-Means, KNN, Image Processing, and Generative AI.
                    </p>
                    <p className="border-l-4 border-[#00ff88] pl-6 py-2 text-white bg-[#00ff88]/5 italic shadow-inner">
                      "I’m enthusiastic about solving complex problems and creating innovative solutions that make a difference."
                    </p>
                  </div>
                </div>
              ))}

              {activeBlock === 2 && (SectionContainer(
                "Skills",
                <div className="relative w-full overflow-hidden">
                  <CloudBubbles />
                  <div 
                    ref={skillsRef}
                    className="flex gap-6 overflow-x-auto pb-10 px-4 pt-4 snap-x snap-mandatory pointer-events-auto custom-h-scroll"
                  >
                    {SKILL_CATEGORIES.map((cat, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="min-w-[280px] md:min-w-[350px] p-8 border border-zinc-800 bg-black/60 backdrop-blur-xl hover:border-[#00ff88]/50 transition-all shadow-2xl snap-center rounded-sm"
                      >
                        <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-8 flex items-center gap-3">
                          <Cpu size={14} className="animate-pulse" /> {cat.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {cat.skills.map((skill, j) => (
                            <span key={j} className="px-3 py-1.5 bg-zinc-900/80 text-zinc-300 text-[10px] font-mono border border-zinc-800 hover:text-[#00ff88] hover:border-[#00ff88] transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {activeBlock === 3 && (SectionContainer(
                "Projects",
                <div className="relative w-full overflow-hidden">
                  <CloudBubbles />
                  <div 
                    ref={projectsRef}
                    className="flex gap-10 overflow-x-auto pb-12 px-6 pt-6 snap-x snap-mandatory pointer-events-auto custom-h-scroll"
                  >
                    {PROJECTS.map((proj, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="min-w-[320px] md:min-w-[480px] p-8 border border-zinc-800 bg-black/40 backdrop-blur-md group hover:border-[#00ff88] transition-all relative flex flex-col h-[400px] shadow-2xl snap-center rounded-lg overflow-hidden"
                      >
                        {/* Background Image Layer */}
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                          <img src={proj.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-8">
                            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] bg-black/40 px-2 py-1 rounded"> ID: {proj.id}</div>
                            <div className={`text-[9px] font-mono px-3 py-1 border ${proj.status === 'STABLE' ? 'border-[#00ff88] text-[#00ff88]' : 'border-yellow-500 text-yellow-500'} bg-black/40`}>
                              {proj.status === 'STABLE' ? 'STABLE' : 'PENDING'}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors flex items-center gap-3">
                            {proj.title}
                            {proj.link && (
                              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform bg-[#00ff88] p-2 rounded-full text-black shadow-lg">
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </h3>
                          
                          <div className="text-[10px] text-[#00ff88] font-mono mb-4 uppercase tracking-[0.2em] font-bold">{proj.type} {proj.date ? `| ${proj.date}` : ''}</div>
                          
                          <p className="text-xs md:text-sm text-zinc-300 font-mono mb-6 leading-relaxed flex-grow line-clamp-3 overflow-hidden">{proj.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-700/30">
                            {proj.stack.map((s, j) => (
                              <span key={j} className="text-[9px] text-[#00ff88] font-mono px-2 py-1 bg-[#00ff88]/5 border border-[#00ff88]/20 rounded uppercase">#{s}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {activeBlock === 4 && (SectionContainer(
                "Certifications",
                <div className="relative w-full overflow-hidden">
                  <CloudBubbles />
                  <div 
                    ref={certsRef}
                    className="flex gap-8 overflow-x-auto pb-12 px-6 pt-6 snap-x snap-mandatory pointer-events-auto custom-h-scroll"
                  >
                    {CERTIFICATIONS.map((cert, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="min-w-[260px] md:min-w-[320px] bg-black/60 border border-zinc-800 p-6 rounded-xl hover:border-[#00ff88]/50 transition-all shadow-2xl snap-center relative group"
                      >
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            <img src={cert.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                         </div>
                         <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#00ff88] transition-colors">{cert.title}</h4>
                         <p className="text-[#00ff88] text-[10px] font-mono uppercase tracking-widest mb-1">{cert.issuer}</p>
                         <p className="text-zinc-500 text-[9px] font-mono mb-6">ISSUED: {cert.date}</p>
                         <a 
                           href={cert.link} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-[10px] text-zinc-400 hover:text-white font-bold uppercase tracking-widest transition-colors border-t border-zinc-800 pt-4"
                         >
                           View on LinkedIn <ExternalLink size={12} />
                         </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {activeBlock === 5 && (
                <motion.div 
                  key="contact"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="absolute inset-0 flex items-center justify-center p-6 pointer-events-auto"
                >
                  <div className="max-w-xl w-full border border-zinc-800 bg-black/80 p-12 md:p-16 text-center backdrop-blur-3xl relative shadow-2xl rounded-sm">
                     <CloudBubbles />
                     <div className="flex justify-center mb-10 text-[#00ff88] relative">
                       <Mail size={56} strokeWidth={1} />
                       <div className="absolute inset-0 blur-xl bg-[#00ff88]/20 rounded-full"></div>
                     </div>
                     <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase text-white">Contact Identity</h2>
                     <p className="text-zinc-400 font-mono text-sm mb-12 leading-relaxed max-w-sm mx-auto">
                       Ready for strategic collaboration and high-impact AI research opportunities.
                     </p>
                     <div className="flex flex-col gap-5 relative z-10">
                       <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-4 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#00ff88] transition-all shadow-2xl">
                         <Mail size={18} /> {EMAIL}
                       </a>
                       <div className="grid grid-cols-2 gap-4">
                         <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all bg-black/40">
                           <Github size={18} /> GitHub
                         </a>
                         <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all bg-black/40">
                           <Linkedin size={18} /> LinkedIn
                         </a>
                       </div>
                     </div>
                     <div className="mt-16 font-mono text-[10px] text-zinc-700 uppercase tracking-[0.4em]">
                       HARSHIT BHATIA • SYSTEM VERSION 2.5
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-6 flex justify-end items-center pointer-events-auto">
            <div className="flex items-center gap-4">
               <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                 CONNECTION: <span className="text-[#00ff88] font-bold uppercase tracking-widest">ENCRYPTED</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function SectionContainer(title: string, children: React.ReactNode) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 flex items-center justify-center lg:justify-start p-6 lg:p-24 pointer-events-none"
    >
      <div className="max-w-7xl w-full flex flex-col pointer-events-auto relative">
        <div className="flex items-center gap-4 mb-8 opacity-40 select-none">
           <div className="h-px w-12 bg-zinc-700" />
           <span className="text-[10px] uppercase font-mono tracking-[0.5em]">{title}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default UIOverlay;
