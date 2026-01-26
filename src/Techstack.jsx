const techstack = [
    {
        name : "",
        logo : "" ,
    }
]

function TechStack(){
    return(
        <section className="max-w-6xl mx-auto mt-32 px-6">
      <h2 className="text-center text-4xl font-mono text-cyan-300 mb-12">
        Tech Stack
      </h2>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {techStack.map((tech, index) => (
          
          <div
            key={index}
            className="
              flex flex-col items-center gap-4
              border-2 border-cyan-300
              rounded-2xl
              p-6
              bg-black
              hover:bg-cyan-900/20
              hover:scale-105
              hover:shadow-xl hover:shadow-cyan-400/30
              transition-all duration-300
            "
          >
            <img
                src={tech.logo} alt={tech.name}
            />
            <span className="text-white text-lg">
                {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
    );

    
}

export default TechStack;
