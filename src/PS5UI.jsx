function PS5UI(){
    return(
        <div className="text-white">
            <nav className="flex justify-between items-center p-6">
                {/* Glass effect container for Files */}
                <ul className="flex items-center  cursor-pointer gap-20">
                    {/* Left thin bar */}
                    
                    
                    <li className="text-lg tracking-wider font-light">Files</li>
                    
                    <button className="bg-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-600">Want a Normal View ?</button>
                    
                    
                    
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