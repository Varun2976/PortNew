import AnimatedList from "./AnimatedList";

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
            <AnimatedList
        items={experienceItems}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients
        enableArrowNavigation
        displayScrollbar
      />
        </div>
      
    </section>
  );
}

export default Experience;