import { useState } from 'react';
import Normal from './Normal';

function PS5UI(){
    const [view, setView] = useState('ps5');

    return(
        <div className={`text-white min-h-screen flex flex-col ${view === 'ps5' ? 'bg-hero bg-cover bg-center fixed inset-0' : ''}`}>
            <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
                {/* Glass effect container for Files */}
                <ul className="flex items-center cursor-pointer gap-20">
                    {/* Left thin bar */}
                    
                    
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

            <main className="flex-1 relative z-10">
                {view === 'normal' ? (
                    <Normal />
                ) : (
                    <div className="p-8 text-center text-white/50">
                        {/* PS5 View Content will go here */}
                    </div>
                )}
            </main>
        </div>
    );
}

export default PS5UI