import { motion } from "framer-motion";

const experience = [
  {
    place: "EnvisionNext",
    role: "Software Engineer Intern",
  },
  {
    place: "KJSCE",
    role: "Software Engineer Intern",
  },
  {
    place: "ISTE",
    role: "Frontend Developer",
  },
];

function Experience() {
  return (
    <section className="max-w-5xl mx-auto mt-32 px-6 py-8">
      <h2 className="text-left text-4xl font-bitcount text-[#FFD54A] mb-8">
        Experience
        <span className="text-white">
          {" "}
          (Hover For Details)
        </span>
      </h2>

      <hr className="mb-10 border-pink-400/30" />

     <div className="flex flex-col gap-8">
  {experience.map((exp, index) => (
<motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 30,
    filter: "brightness(0)",
  }}
  whileInView={{
    opacity: [0, 1, 0.15, 1, 0.35, 1, 1],
    y: 0,
    filter: [
      "brightness(0)",
      "brightness(2)",
      "brightness(0.2)",
      "brightness(2)",
      "brightness(0.4)",
      "brightness(1.5)",
      "brightness(1)",
    ],
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 1.2,
    delay: index * 0.15,
  }}
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  className="group relative"
>
      {/* Retro Shadow */}
      <div
        className="
          absolute
          top-2
          left-2
          w-full
          h-full
          rounded-xl
          bg-[#163D22]
        "
      />

      {/* Main Card */}
      <div
        className="
          relative
          z-10
          bg-[#0B120B]
          border-2
          border-[#2EFF7A]
          rounded-xl
          p-8
          overflow-hidden
        "
      >
        {/* Scanlines */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            pointer-events-none
            bg-[linear-gradient(to_bottom,transparent_50%,#2EFF7A_50%)]
            bg-[length:100%_4px]
          "
        />

        {/* Terminal Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            bg-[#2EFF7A]/5
          "
        />

        <div className="relative z-10">
          <h3
            className="
              text-3xl
              font-bitcount
              text-[#7CFFB2]
              mb-2
            "
          >
            {exp.place}
          </h3>

          <div
            className="
              h-[2px]
              w-24
              bg-[#2EFF7A]
              mb-4
              transition-all
              duration-300
              group-hover:w-40
            "
          />

          <p className="text-[#D8FFE6]/90 text-lg">
            {exp.role}
          </p>
        </div>

        {/* Corner Pixel */}
        <div
          className="
            absolute
            top-3
            right-3
            w-3
            h-3
            bg-[#2EFF7A]
            animate-pulse
          "
        />
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}

export default Experience;