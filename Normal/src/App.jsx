import pfp from './assets/pfp.jpg'
import './App.css'
import './index.css'
import TechStack from './Techstack.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import ShapeGrid from './ShapeGrid';

function App() {
  return (
    <>
      <ShapeGrid 
speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
shape='square' // square, hexagon, circle, triangle
hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
  direction="diagonal"
  borderColor="#271E37"
  hoverColor="#222222"
  size={40}
  shape="square"
/>
      <div className="big">
      <header>
  <h1 className="text-center mt-10 text-3xl sm:text-4xl md:text-5xl font-bitcount text-cyan-300">
    - Varun Nair -
  </h1>
</header>

<div className="flex-custom-row flex-col lg:flex-row rounded-[30px] border-cyan-300 max-w-7xl mx-auto mt-10 lg:mt-20 px-4">
  <img
    src={pfp}
    alt="Profile"
    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top border-2 border-cyan-300 mt-6 lg:mt-10 mx-auto lg:ml-[90px]"
  />

  <div className="flex-1 lg:ml-10 mt-6 lg:mt-0 text-center lg:text-left">
    <h2 className="text-green-500 mb-2 mt-4 lg:mt-6 text-2xl sm:text-3xl md:text-4xl">
      ABOUT ME
    </h2>

    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">
      I am pursuing Information Technology at KJ Somaiya. I am a tech enthusiast
      and a quick learner with a strong interest in learning new programming
      languages and technologies. I am passionate about understanding PC hardware
      and enjoy working in collaborative team environments. Additionally, I have
      a keen interest in competitive programming and continuously strive to
      improve my problem-solving skills.
    </p>

    <a
      href="https://drive.google.com/file/d/1hmZFJ7z9OMAXxnncU5Y6V3JtAzxShBZG/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="text-green-800 text-sm sm:text-base md:text-[20px] border-2 border-green-800 px-6 py-2 rounded-[30px] mt-6 font-mono hover:bg-green-800 hover:text-black transition">
        Resume
      </button>
    </a>
  </div>
</div>

      <TechStack />
      <Projects/>
      <Experience />
      
      </div>
    </>
  )
}

export default App