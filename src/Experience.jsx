import AnimatedList from "./AnimatedList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const HOVER_CARD_SIDES = ["top", "right", "bottom", "left"];

const experience = [
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
  const experienceItems = experience.map(
    (exp) => `${exp.role} @ ${exp.place}`
  );

  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 py-8 rounded-[25px]">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-[20px]">
        Experience
      </h2>

      <hr className="mb-6 border-cyan-300/30" />
        <div className="text-green-500 font-mono">
          <div className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
           
        </div>
      
    </section>
  );
}

export default Experience;