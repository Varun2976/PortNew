import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Normal from './Normal';
import Files from './Files';
import filesData from './FilesData';

function PS5UI(){
    const [view, setView] = useState('ps5');
    const [activeFile, setActiveFile] = useState(0);

    const current = filesData[activeFile] || filesData[0];

    return(
        <div className={`text-white flex flex-col bg-black relative ${view === 'ps5' ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
            
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
                        <li className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer">Settings</li>
                        <li className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer">Profile</li>
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

                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

export default PS5UI;