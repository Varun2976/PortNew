import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Normal from './Normal';
import Files from './Files';
import filesData from './FilesData';
import {useEffect } from 'react';


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

    const current = filesData[activeFile] || filesData[0];

    useEffect(() =>{
      const Arrow =(e) => {
        if(view !== 'ps5') return;

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
      };

      window.addEventListener('keydown',Arrow);

      return() => {
        window.removeEventListener('keydown',Arrow);
      };
    },[view]);


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
                  src="src/assets/ps.png"
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

        <div className={`text-white flex flex-col bg-black relative ${view === 'ps5' ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
          
          <div
            className={`fixed inset-0 z-[9998] bg-black pointer-events-none transition-opacity duration-[1800ms] ease-in-out ${
              screenReveal ? "opacity-0" : "opacity-100"
            }`}
          ></div>

            {/* NAVBAR */}
            <nav className={`flex justify-between items-center p-6 w-full z-50 ${view === 'ps5' ? 'absolute top-0 left-0' : 'sticky top-0'}`}>
                
                {/* LEFT CONTAINER */}
                <div className="flex items-center gap-6 px-8 py-3 transition-all duration-300">
                    <ul className="flex items-center cursor-pointer gap-8">
                        <li 
                          className="transition-transform hover:scale-110 flex items-center"
                          onClick={() => setView('ps5')}
                        >
                          <img src="src/assets/ps.png" width="45px" height="45px" alt="PS Logo" />
                        </li>
                        
                        {/* Vertical separator */}
                        <div className="w-[1px] h-8 bg-white/30" />
                        
                        <button 
                          className="bg-white/10 border border-white/30 px-5 py-2 rounded-full hover:bg-white/30 hover:scale-105 transition-all text-sm font-semibold tracking-wide shadow-lg"
                          onClick={() => setView('normal')}
                        >
                          Want A Normal View ?
                        </button>
                    </ul>
                </div>
                
                {/* RIGHT CONTAINER */}
                <div className="flex items-center px-8 py-4 transition-all duration-300">
                    <ul className="flex flex-row gap-8 text-white/90 font-medium text-sm tracking-wide">
                        <li className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer text-2xl">Settings</li>
                        <li className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer text-2xl">Socials</li>
                    </ul>
                </div>
            </nav>

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
                    ) : (

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
                            <div className="relative pt-28 z-10 w-full">
                                <Files 
                                    files={filesData} 
                                    active={activeFile} 
                                    setActive={setActiveFile} 
                                />
                            </div>

                            {/* 📝 Bottom Left Content */}
                            <div className="absolute bottom-20 left-10 max-w-xl z-10">
                                
                                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                                    {current.title}
                                </h1>

                                <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
                                    {current.desc}
                                </p>

                                <button
                                    onClick={() => setView('normal')}
                                    className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition shadow-lg"
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
                                <div className="overflow-hidden max-h-0 group-hover:max-h-[50vh] transition-all duration-500 ease-in-out w-[98vw] max-w-none mt-3">
                                    <div className="bg-black/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white text-sm shadow-lg w-full h-[50vh]">
                                        <h3 className="font-semibold mb-2 text-2xl">GitHub Streak</h3>

                                        <img 
                                            src="https://ghchart.rshah.org/208637/Varun2976"
                                            alt="GitHub Streak"
                                            className="rounded-lg w-full"
                                        />
                                        <div className="mt-2 flex gap-4 items-stretch">
                                          <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-4 text-center h-32 flex flex-col justify-center">
                                            <p className="text-gray-300 text-lg flex items-center justify-center gap-2">
                                              CodeChef
                                              <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/codechef.png" alt="codechef"/>
                                            </p>
                                            <p className="font-semibold text-3xl">2⭐</p>
                                          </div>

                                          <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-4 text-center h-32 flex flex-col justify-center">
                                            <p className="text-gray-300 text-lg flex items-center justify-center gap-2">
                                              Codeforces
                                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="codeforces"/>
                                            </p>
                                            <p className="font-semibold text-3xl">900+</p>
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
      </>
    );
}

export default PS5UI;