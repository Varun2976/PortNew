import { motion } from "framer-motion";
import projects from "./ProjectsData";

function Projects() {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 py-8">
      <h2
  className="
    text-7xl
    font-black
    uppercase
    mb-12
    inline-block
    px-6
    py-2
    bg-red-500
    text-white
    border-[5px]
    border-black
    shadow-[8px_8px_0px_0px_#000]
  "
>
  PROJECTS
</h2>

      <div className="grid gap-10">
        {projects.map((project, index) => (
  <motion.div
    key={index}
    initial={{
      opacity: 0,
      y: 150,
      scale: 0.8,
      rotate: index % 2 === 0 ? -4 : 4,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: [0.8, 1.08, 0.95, 1],
      rotate: 0,
    }}
    viewport={{
      once: true,
      amount: 0.15,
    }}
    transition={{
      duration: 0.7,
      delay: index * 0.001,
    }}
    whileHover={{
      y: -12,
      x: -12,
      rotate: index % 2 === 0 ? -2 : 2,
    }}
    className="relative px-4 py-4"
  >
    <div
      className="
        absolute
        w-full
        h-full
        

        left-4

        right-6

        translate-x-2
        translate-y-2
        bg-red-600
        border-[5px]
        border-black
      "
    />

    <div
      className="
        relative
        bg-white
        border-[5px]
        border-black
        p-8
        shadow-[14px_14px_0px_0px_#000]
      "
    >
      <div className="absolute top-0 left-0 w-full h-3 bg-black" />

      <h3
        className="
          mt-4
          text-4xl
          font-black
          uppercase
          text-black
          mb-5
          tracking-tight
        "
      >
        {project.title}
      </h3>

      <p className="text-black text-lg leading-relaxed font-semibold">
        {project.summary}
      </p>
    </div>
  </motion.div>
))}
      </div>
    </section>
  );
}

export default Projects;