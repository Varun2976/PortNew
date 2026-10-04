import ChromaGrid from './ChromaGrid';
import cc from "./assets/cc.jpg";
import iicpc from "./assets/iicpc.webp";
import hackx from "./assets/hackx.webp";
import agri from "./assets/agri.webp";
import gdg from "./assets/gdg.webp";
import NN from "./assets/NN.png";
import SIH26 from "./assets/SIH.png";


const items = [
  {
    image: cc,
    title: "2 ⭐️ in CodeChef",
    
    
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: iicpc,
    title: " ",
    subtitle: "Ranked Top 3000 out of 50,000+ participants in ICPC India Regional Programming Contest (IICPC)",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: SIH26,
    title: " ",
    subtitle: "Built a blockchain and ML-powered platform for cross-border B2B trade, enabling secure, transparent transactions with intelligent data-driven insights.",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: hackx,
    title: " ",
    subtitle: "Ranked Top 3000 out of 50,000+ participants in ICPC India Regional Programming Contest (IICPC)",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: agri,
    title: " ",
    subtitle: "Built a blockchain-based app connecting farmers, distributors, and sellers",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: gdg,
    title: " ",
    subtitle: "Developed a Railway Concession App to digitize approval workflows",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: NN,
    title: " ",
    subtitle: "Built Rapid3, an ML-based sandbox system to detect and block phishing",
    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];
function Achievements() {

  return (
    <section className="mx-auto mt-16 max-w-6xl rounded-[25px] px-4 py-8 sm:mt-24 sm:px-6 lg:mt-32">
      <h2 className="mb-8 pl-2 text-left text-2xl font-bitcount text-cyan-300 sm:pl-5 sm:text-4xl">
        Hackathons And Competitions
      </h2>
      
      <hr className="mb-6 border-cyan-300/30" />
      <h2 className="mb-2 pl-2 text-center text-2xl font-bitcount text-white-300 sm:pl-5 sm:text-4xl">
        Hover Over Me
      </h2>
      <div className="animate-bounce cursor-pointer text-white text-3xl text-center mb-6">
                                    ↓
      </div>
        <div className="w-full max-w-7xl mx-auto">
            <div className="relative w-full lg:h-[600px]">
                <ChromaGrid 
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
      
    </section>
  );
}

export default Achievements;