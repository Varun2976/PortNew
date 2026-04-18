function PS5UI(){
    return(
        <div className="text-white">
            <nav className="flex justify-between items-center p-6">
                {/* Glass effect container for Files */}
                <ul className="flex items-center px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 hover:bg-white/20 hover:backdrop-blur-xl cursor-pointer">
                    {/* Left thin bar */}
                    <div className="w-[2px] h-5 bg-white/40 rounded-full mr-4"></div>
                    
                    <li className="text-lg tracking-wider font-light">Files</li>
                    
                    {/* Right thin bar */}
                    <div className="w-[2px] h-5 bg-white/40 rounded-full ml-4"></div>
                </ul>
                
                <ul className="flex flex-row gap-8 text-white/80 font-light">
                    <li className="hover:text-white transition-colors cursor-pointer">Settings</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Profile</li>
                </ul>
            </nav>
        </div>
    );
}

export default PS5UI