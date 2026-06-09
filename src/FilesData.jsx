import projectBg from './assets/project.avif';
import resumeBg from './assets/Resume.jpg';
import skillsBg from './assets/Skills.avif';
import marioBg from './assets/Mariogame.png';
import MarioIcon from './assets/MarioIcon.jpeg';

const files = [
  {
    id: 1,
    title: "Projects",
    desc: "Explore my development work and builds",
    route: "/projects",
    bg: projectBg,     // FULL BACKGROUND
    cardBg: "https://img.icons8.com/ios-filled/100/FFFFFF/wrench.png", // CARD IMAGE
    button: "View Projects"
  },
  {
    id: 2,
    title: "Resume",
    desc: "Check out my experience and skills",
    route: "/normal",
    bg: resumeBg,
    cardBg: "https://img.icons8.com/ios-filled/100/FFFFFF/document--v1.png",
    button: "Open Resume"
  },
  {
    id: 3,
    title: "Skills",
    desc: "Technologies and tools I work with",
    route: "/skills",
    bg: skillsBg,
    cardBg: "https://img.icons8.com/comic/100/FFFFFF/brain.png",
    button: "View Skills"
  },
  {
    id: 4,
    title: "Play",
    desc: "Try my interactive game experience",
    route: "assets/Mariogame.png",
    bg: marioBg,
    cardBg: MarioIcon,
    cardSize: 'cover',
    button: "Play Game"

  }
];

export default files;
