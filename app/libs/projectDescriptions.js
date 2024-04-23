import planur1 from "../../public/planur/planur1.png";
import planur2 from "../../public/planur/planur2.png";
import planur3 from "../../public/planur/planur3.png";
import planur4 from "../../public/planur/planur4.png";
import reactemon1 from "../../public/reactemon/reactemon1.png";
import reactemon2 from "../../public/reactemon/reactemon2.png";
import wurdle1 from "../../public/wurdle/wurdle1.png";
import wurdle2 from "../../public/wurdle/wurdle2.png";

const projectDescriptions = [
  // Planur Description
  {
    title: "Planur",
    summary: "A travel planning app",
    features: [
      {
        description:
          "Create an account to save your travel plans and access them from anywhere.",
        icon: "account-circle",
      },
      {
        description:
          "View your travel plans and easily manage multiple itineraries.",
        icon: "calendar",
      },
      {
        description: "Add, track and update your travel accommodations",
        icon: "house",
      },
    ],
    description:
      "Explore my web-based travel planner—a user-friendly tool to organize your adventures. Craft, store, and streamline your travel plans effortlessly.",
    frontEnd: ["Next.js", "React", "Tailwind CSS"],
    backEnd: ["MongoDB", "Mongoose", "Node.js"],
    tags: {
      type: ["Personal"],
      languages: ["JavaScript", "HTML", "CSS"],
      frontend: ["Next.js", "React", "Framer Motion", "Tailwind"],
      backend: ["Mongoose", "Node.js"],
      database: ["MongoDB", "Supabase"],
      auth: ["Supabase"],
    },
    liveLink: "https://planur-v2.vercel.app/",
    github: "https://github.com/chauquach1/planur_v2",
    projectType: "Personal",
    images: [planur1, planur2, planur3, planur4],
  },
  // Reactemon Description
  {
    title: "Reactemon",
    summary: "A React-based Pokedex",
    features: [
      {
        description:
          "Comprehensive Card Search: Seamlessly search for any Pokemon card by name, set, rarity, type, and more.",
        icon: "search",
      },
      {
        description:
          "Complete Card Sets: Keep track of which cards you're missing and trade with fellow collectors to complete your sets.",
        icon: "list",
      },
      {
        description:
          "Add to Your Collection: Quickly add cards to your personal collection with a simple tap.",
        icon: "add",
      },
    ],
    description:
      "Reactemon is the ultimate web-app for Pokemon enthusiasts and card collectors. With its powerful fetch calls to a Pokemon API, you can effortlessly search for individual Pokemon cards or entire card sets.",
    tags: {
      type: ["Collaborative"],
      responsibilities: ["UI/UX", "Frontend"],
      languages: ["JavaScript", "HTML", "CSS"],
      frontend: ["React", "Bootstrap", "Tailwind"],
      backend: ["Express.js", "Mongoose", "Node.js"],
      database: ["MongoDB"],
      auth: ["Supabase"],
    },
    liveLink: "https://main--mellow-cheesecake-394e88.netlify.app/",
    github: "https://github.com/ArmadaDev25/FortisFrontend",
    projectType: "Collaborative",
    images: [reactemon1, reactemon2],
  },
  // Wurdle Description
  {
    title: "Wurdle",
    summary: "A replica Wordle!",
    features: [
      {
        description:
          "Challenge Yourself: Put your vocabulary and deduction skills to the test!",
        icon: "language",
      },
      {
        description:
          "See Your Progress: Track your scores and improve your word-guessing abilities.",
        icon: "play",
      },
    ],
    description:
      "This JavaScript and CSS-powered replica faithfully captures the essence of the beloved Wordle game, offering you an engaging word-guessing challenge right in your browser.",
    tags: {
      type: ["Personal"],
      languages: ["JavaScript", "HTML", "CSS"],
    },
    liveLink: "https://chauquach1.github.io/wordle-game/",
    github: "https://github.com/chauquach1/wordle-game",
    projectType: "Personal",
    images: [wurdle2, wurdle1],
  },
];

export default projectDescriptions;