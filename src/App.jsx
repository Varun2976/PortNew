import { useState } from 'react'
import pfp from './assets/pfp.jpg'
import './App.css'
import './index.css'

function App() {
  return (
    <div className="big">
      <header>
        <h1 className="text-center mt-10  text-5xl font-mono text-cyan-300">
          - Varun Nair -
        </h1>
      </header>

      <div className="flex-custom-row  rounded-[30px]  border-cyan-300  max-w-7xl mx-auto mt-20 ">
        <img
          src={pfp}
          alt="Profile"
          className="w-80 h-80  rounded-[30px] object-cover object-top border-2 rounded-full mt-10 ml-[90px] "
        />

        <div className='flex-1'>
          <h2 className="text-green-500 mb-2 mt-6 text-4xl font-Inter">ABOUT ME</h2>
          <p className="text-white text-2xl leading-relaxed text-justify">
            I am pursuing Information Technology at KJ Somaiya. I am a tech enthusiast
            and a quick learner with a strong interest in learning new programming
            languages and technologies. I am passionate about understanding PC hardware
            and enjoy working in collaborative team environments. Additionally, I have
            a keen interest in competitive programming and continuously strive to
            improve my problem-solving skills.
          </p>
          <button className="text-green-800 text-[20px] border-2 border-green-800 pl-4 pr-4 pt-2 pb-2 rounded-[30px] mt-6 font-mono hover:bg-green-800 hover:text-black">Resume</button>
        </div>
      </div>
    </div>
  );
}

export default App
