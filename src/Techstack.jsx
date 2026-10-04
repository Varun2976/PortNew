import { techStack } from './TechStackData';

function TechStack() {
  return (
    <section className="mx-auto mt-16 max-w-6xl rounded-[25px] px-4 py-8 sm:mt-24 sm:px-6 lg:mt-32">
      <h2 className="mb-8 pl-2 text-left text-3xl font-bitcount text-cyan-300 sm:pl-5 sm:text-4xl">
        Tech Stack
      </h2>
      <hr className="mb-6 border-cyan-300/30"></hr>

      
      <div className="mt-8 grid grid-cols-2 gap-3 min-[380px]:grid-cols-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
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