import Red from "./assets/Red.png";
import Blue from "./assets/Blue.png";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <div className="flex gap-6 h-screen w-screen">
      <Link
  to="/ps5"
  className="group relative w-1/2 overflow-hidden"
>
  <img
    src={Blue}
    alt="PS5 UI"
    className="
      w-full h-full object-cover object-[50%_80%]
      transition-all duration-700
      group-hover:scale-110
      group-hover:brightness-0
    "
  />

  <div
    className="
      absolute inset-0
      bg-blue-500/20
      opacity-0
      transition-opacity duration-700
      group-hover:opacity-100
    "
  />

  <h1
    className="
      absolute
      top-10 left-10
      text-white text-5xl font-bold z-10

      transition-all duration-700

      group-hover:top-1/2
      group-hover:left-1/2
      group-hover:-translate-x-1/2
      group-hover:-translate-y-1/2
    "
  >
    PS5 View
  </h1>
</Link>

      <Link
  to="/normal"
  className="group relative w-1/2 overflow-hidden"
>
  <img
    src={Red}
    alt="Normal UI"
    className="
      w-full h-full object-cover object-[50%_86%]
      transition-all duration-700
      group-hover:scale-110
      group-hover:brightness-0
    "
  />

  {/* Red Overlay */}
  <div
    className="
      absolute inset-0
      bg-red-500/20
      opacity-0
      transition-opacity duration-700
      group-hover:opacity-100
    "
  />

  <h1
    className="
      absolute
      top-10 right-10
      text-white text-5xl font-bold z-10

      transition-all duration-700

      group-hover:top-1/2
      group-hover:left-1/2
      group-hover:right-auto
      group-hover:-translate-x-1/2
      group-hover:-translate-y-1/2
    "
  >
    Normal View
  </h1>
</Link>
    </div>
  );
}

export default Selection;