import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Normal from './Normal';
import Files from './Files';
import filesData from './FilesData';
import {useEffect } from 'react';
import MarioGame from './MarioGame';
import Socials from './Socials';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import SkillsPage from './SkillsPage';
import { Link } from 'react-router-dom';
import psLogo from './assets/ps.png';

function PS5UI(){
    const [showIntro, setShowIntro] = useState(true);
    const [slideOut, setSlideOut] = useState(false);
    const [screenReveal, setScreenReveal] = useState(false);

    const handleIntroClose = () => {
      setSlideOut(true);
      setTimeout(() => {
        setShowIntro(false);
        setScreenReveal(true);
      }, 1800);
    };
    const [view, setView] = useState('ps5');
    const [activeFile, setActiveFile] = useState(0);
    const [showSocials, setShowSocials] = useState(false);

    const current = filesData[activeFile] || filesData[0];

    // Card / button -> destination view
    const openFile = (file) => {
      if (!file) return;

      if (file.title === 'Projects') {
        setView('projects');
      } else if (file.title === 'Resume') {
        setView('resume');
      } else if (file.title === 'Skills') {
        setView('skills');
      } else if (file.title === 'Play') {
        setView('mario');
      } else {
        setView('normal');
      }
    };

    useEffect(() =>{
      const Arrow =(e) => {
        if(view !== 'ps5' || showSocials) return;

        if(e.key ==='ArrowRight'){
          setActiveFile((prev)=>
            prev === filesData.length - 1 ? 0 : prev + 1
          )
        }

        if(e.key ==='ArrowLeft'){
          setActiveFile((prev)=>
            prev === 0 ?filesData.length - 1  : prev - 1
          );
        }
        if (e.key === 'Enter') {
          openFile(current);
        }
      };

      window.addEventListener('keydown',Arrow);

      return() => {
        window.removeEventListener('keydown',Arrow);
      };
    },[view,current,showSocials]);


    return(
      <>
        {showIntro && (
          <div
            onClick={handleIntroClose}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center cursor-pointer overflow-hidden"
          >

            <div className="absolute inset-0 bg-black"></div>

            <div className="absolute inset-0 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.2 + Math.random() * 0.8,
                    animationDuration: `${5 + Math.random() * 6}s`,
                  }}
                ></span>
              ))}
            </div>

            <div className="relative flex items-center justify-center">

              <div className="absolute w-40 h-40 rounded-full border border-white/90 shadow-[0_0_35px_rgba(255,255,255,0.9)] animate-[ping_5.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>

              <div className="absolute w-40 h-40 rounded-full border border-white/70 shadow-[0_0_50px_rgba(255,255,255,0.7)] animate-[ping_5.5s_cubic-bezier(0,0,0.2,1)_infinite_1.8s]"></div>

              <div className="absolute w-40 h-40 rounded-full border border-white/50 shadow-[0_0_65px_rgba(255,255,255,0.5)] animate-[ping_5.5s_cubic-bezier(0,0,0.2,1)_infinite_3.6s]"></div>

              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_45px_rgba(255,255,255,0.95)] z-10">
                <img
                  src={psLogo}
                  alt="PS Logo"
                  className="w-14 h-14 object-contain brightness-0"
                />
              </div>
            </div>

            <div className="absolute bottom-24 text-white text-lg tracking-[0.3em] uppercase font-light animate-[pulse_3.5s_ease-in-out_infinite]">
              Click On The Centre To Enter
            </div>

            <div
              className={`absolute inset-0 bg-black transition-opacity duration-[1800ms] ease-in-out ${
                slideOut ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        )}

        <div className={`text-white flex flex-col bg-black relative ${view === 'ps5' ? 'h-[100dvh] overflow-hidden md:h-screen' : 'min-h-[100dvh] md:min-h-screen'}`}>
          
          <div
            className={`fixed inset-0 z-[9998] bg-black pointer-events-none transition-opacity duration-[1800ms] ease-in-out ${
              screenReveal ? "opacity-0" : "opacity-100"
            }`}
          ></div>

            {/* NAVBAR */}
            {view !== 'mario' && view !== 'projects' && (
              <nav className={`flex flex-wrap justify-between items-center gap-x-2 gap-y-1 p-2 sm:p-4 md:flex-nowrap md:p-6 w-full z-50 ${view === 'ps5' ? 'absolute top-0 left-0' : 'sticky top-0'}`}>
                
                {/* LEFT CONTAINER */}
                <div className="flex items-center gap-2 px-1 py-2 transition-all duration-300 md:gap-6 md:px-8 md:py-3">
                  <ul className="flex flex-wrap items-center cursor-pointer gap-2 md:flex-nowrap md:gap-8">
                        <li className="flex items-center">
                          <button
                            type="button"
                            aria-label="Return to PS5 view"
                            className="flex h-10 w-10 items-center justify-center md:h-[45px] md:w-[45px]"
                            onClick={() => setView('ps5')}
                          >
                            <motion.img
                              src={psLogo}
                              alt=""
                              className="h-full w-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </button>
                        </li>
                        
                        {/* Vertical separator */}
                        <div className="hidden h-8 w-px bg-white/30 md:block" />
                        
                        <button 
                          className="whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-3 py-2 text-[11px] font-semibold shadow-lg transition-all hover:scale-105 hover:bg-white/30 md:px-5 md:text-sm md:tracking-wide"
                          onClick={() => setView('normal')}
                        >
                          Want A Normal View ?
                        </button>
                        <Link
                          to="/"
                          className="whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-3 py-2 text-[11px] font-semibold shadow-lg transition-all hover:scale-105 hover:bg-white/30 md:px-5 md:text-sm md:tracking-wide"
                        >
                          View Selection
                        </Link>
                    </ul>
                </div>
                
                {/* RIGHT CONTAINER */}
                <div className="flex items-center px-1 py-2 transition-all duration-300 md:px-8 md:py-4">
                  <ul className="flex flex-row gap-3 text-white/90 font-medium text-sm tracking-wide md:gap-8">
                    <li className="cursor-pointer text-sm transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-2xl">Settings</li>
                        <li
                          className="cursor-pointer text-sm transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-2xl"
                          onClick={() => setShowSocials(true)}
                        >
                          Socials
                        </li>
                    </ul>
                </div>
            </nav>
            )}
            

            {/* MAIN */}
            <main className="flex-1 relative z-10 flex flex-col">
                <AnimatePresence mode="wait">

                    {/* NORMAL VIEW */}
                    {view === 'normal' ? (
                        <motion.div
                            key="normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full flex-1"
                        >
                            <Normal />
                        </motion.div>
                    ) : view === 'mario' ? (

                          <motion.div

                            key="mario"

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                            transition={{ duration: 0.6 }}

                            className="relative z-10 w-full flex-1"

                          >

                            <MarioGame onBack={() => setView('ps5')} />

                          </motion.div>

) : view === 'projects' ? (

                          <motion.div
                            key="projects"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full flex-1"
                          >
                            <ProjectsPage onBack={() => setView('ps5')} />
                          </motion.div>

) : view === 'resume' ? (

                          <motion.div
                            key="resume"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full flex-1"
                          >
                            <ResumePage onBack={() => setView('ps5')} />
                          </motion.div>

) : view === 'skills' ? (

                          <motion.div
                            key="skills"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full flex-1"
                          >
                            <SkillsPage />
                          </motion.div>

) :

                    (

                        /* PS5 VIEW */
                        <motion.div
                            key="ps5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative flex-1 flex flex-col overflow-hidden w-full"
                        >

                            {/* 🌌 Dynamic Background with Fallback to Hero */}
                            <motion.div
                                key={current.bg || 'default-bg'}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 bg-hero bg-cover bg-center"
                                style={current.bg ? { backgroundImage: `url(${current.bg})` } : {}}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* 🎮 Top Cards */}
                            <div className="relative z-10 w-full pt-32 md:pt-28">
                                <Files
                                    files={filesData}
                                    active={activeFile}
                                    setActive={setActiveFile}
                                    onSelect={openFile}
                                />
                            </div>

                            {/* 📝 Bottom Left Content */}
                            <div className="absolute bottom-20 left-4 right-4 z-10 max-w-xl md:left-10 md:right-auto">
                                
                                <h1 className="mb-3 text-3xl font-bold drop-shadow-lg md:mb-4 md:text-5xl">
                                    {current.title}
                                </h1>

                                <p className="mb-5 text-base text-gray-200 drop-shadow-md md:mb-8 md:text-xl">
                                    {current.desc}
                                </p>

                                <button
                                    onClick={() => openFile(current)}
                                    className="rounded-full bg-white px-6 py-3 font-bold text-black shadow-lg transition hover:scale-105 md:px-8"
                                >
                                    {current.button || "Play"}
                                </button>
                            </div>
                            <div className="position-absolute">

                            </div>

                            {/* ⬇️ Bouncing Arrow with Hover Panel */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 group flex flex-col items-center">
                                
                                {/* Arrow */}
                                <div className="flex flex-col gap-1 text-center justify-center animate-bounce cursor-pointer text-white text-3xl">
                                  <h4 className = "font-blackops">Hover</h4><br></br>
                                    ↓
                                </div>

                                {/* Hover Panel */}
                                <div className="mt-3 max-h-0 w-[calc(100vw-1rem)] max-w-5xl overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[50vh] md:w-[98vw] md:max-w-none">
                                  <div className="h-[50vh] w-full rounded-xl border border-white/20 bg-black/10 p-3 text-sm text-white shadow-lg backdrop-blur-lg sm:p-6">
                                    <h3 className="mb-2 text-lg font-semibold sm:text-2xl">GitHub Streak</h3>

                                        <img 
                                            src="https://ghchart.rshah.org/208637/Varun2976"
                                            alt="GitHub Streak"
                                            className="rounded-lg w-full"
                                        />
                                        <div className="mt-2 flex items-stretch gap-2 sm:gap-4">
                                          <div className="flex h-24 flex-1 flex-col justify-center rounded-lg border border-white/30 bg-white/20 p-2 text-center sm:h-32 sm:p-4">
                                            <p className="flex items-center justify-center gap-1 text-xs text-gray-300 sm:gap-2 sm:text-lg">
                                              CodeChef
                                              <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/codechef.png" alt="codechef"/>
                                            </p>
                                            <p className="text-xl font-semibold sm:text-3xl">2⭐</p>
                                          </div>

                                          <div className="flex h-24 flex-1 flex-col justify-center rounded-lg border border-white/30 bg-white/20 p-2 text-center sm:h-32 sm:p-4">
                                            <p className="flex items-center justify-center gap-1 text-xs text-gray-300 sm:gap-2 sm:text-lg">
                                              Codeforces
                                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="codeforces"/>
                                            </p>
                                            <p className="text-xl font-semibold sm:text-3xl">900+</p>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>

        <Socials open={showSocials} onClose={() => setShowSocials(false)} />
      </>
    );
}

export default PS5UI;