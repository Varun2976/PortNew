const projects = [
  {
    title: "Railway Concession System",
    summary: "A system to automate and manage railway concession workflows efficiently.",
  },
  {
    title: "Inventory Management System",
    summary: "Manage Ineventory for Stationary shops",
  },
  {
    title: "Tourist Website",
    summary: "An all place for tourists to check for itenaries and all the other information about travelling",
  },
];

function Projects() {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 py-8">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-5">
        Projects
      </h2>

      <hr className="mb-10 border-cyan-300/30" />

      <div className="grid gap-6 sm:grid-cols-1 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border border-cyan-300/30
              p-6
              bg-black
              cursor-pointer
              hover:border-yellow-300
              hover:scale-[1.02]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-mono text-green-400 mb-2">
              {project.title}
            </h3>

            <p className="text-white/80 text-lg leading-relaxed">
              {project.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;