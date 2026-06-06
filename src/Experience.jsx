import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
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
    <section className="max-w-6xl mx-auto mt-32 px-6 py-8 rounded-[25px]">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-[20px]">
        Experience
      </h2>

      <hr className="mb-6 border-cyan-300/30" />

      <div className="flex flex-col gap-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="
              group
              bg-white/10
              border border-cyan-300/30
              rounded-xl
              p-4
              h-16
              overflow-hidden
              flex flex-col items-center
              transition-all duration-300
              hover:h-32
              hover:scale-105
              hover:border-cyan-300
              cursor-pointer
            "
          >
            <h3 className="text-xl font-blackops text-cyan-300 text-center">
              {exp.place}
            </h3>

            <p
              className="
                mt-3
                opacity-0
                transition-all duration-300
                group-hover:opacity-100
                text-center
                text-white
              "
            >
              {exp.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;