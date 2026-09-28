import { techStack } from './TechStackData';

function TechStack() {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-6  py-8 rounded-[25px] ">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-[20px]">
        Tech Stack
      </h2>
      <hr className="mb-6 border-cyan-300/30"></hr>

      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center gap-2
              p-2
              hover:scale-110
              transition-transform duration-300
            "
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className={`w-12 h-12 object-contain ${
                tech.name === "Solidity" || tech.name === "Ether.js"
                  ? "invert"
                  : ""
              }`}
            />
            <span className="text-white text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;