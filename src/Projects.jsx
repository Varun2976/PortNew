const projects = [
  {
    title: "Rapid3",
    summary: "Developed Rapid3, a browser extension and web app for detecting phishing and malicious content across links, emails, SMS, and audio. Implemented a sandbox-based system to safely execute and analyze URLs before user access. Integrated ML models for real-time threat detection, including phishing and deepfake audio identification. Designed the system to block unsafe links and provide clear risk assessments.",
  },
  {
    title: "Vocal For Local",
    summary: "An AI vocal coach that analyzes your singing in real time by comparing it with a reference track, evaluating pitch,timing, and vocal consistency, and providing instant feedback on note accuracy along with guidance on vocal placement and technique to help you improve.",
  },
  {
    title: "Farm To Fork Using BlockChain",
    summary: "Developed a blockchain-based supply chain application connecting farmers, distributors, retailers, and consumers. Implemented smart contracts to automate agreements, ensure secure record-keeping, and enable traceability of agricultural goods.",
  },
  {
    title: "Railway Concession System",
    summary: "Built an end-to-end digital railway concession application for students, reducing processing time by 70% and minimizing paperwork errors by 50%. Integrated a real-time chatbot for assistance."
  },
  {
    title: "Inventory Management System",
    summary: "Developed a web-based inventory tracking system to manage stock levels and automate updates. Generated real-time reports, improving inventory accuracy by 40% and reducing manual effort by 60%.",
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