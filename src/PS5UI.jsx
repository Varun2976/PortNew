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
            <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
                <ul className="flex items-center cursor-pointer gap-20">
                    <li 
                      className="text-lg tracking-wider font-light transition-all hover:text-white/70"
                      onClick={() => setView('ps5')}
                    >
                      Files
                    </li>
                    
                    <button 
                      className="bg-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-600 transition-colors"
                      onClick={() => setView('normal')}
                    >
                      Want a Normal View ?
                    </button>
                </ul>
                
                <ul className="flex flex-row gap-8 text-white/80 font-light">
                    <li className="hover:text-white transition-colors cursor-pointer">Settings</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Profile</li>
                </ul>
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
                            <div className="relative pt-10 z-10 w-full">
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