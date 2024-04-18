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
          "View your travel plans on a calendar and easily manage your itinerary.",
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
          "Complete Card Sets: Easily browse and complete your card sets. Keep track of which cards you're missing and trade with fellow collectors to complete your sets.",
        icon: "list",
      },
      {
        description:
          "Add to Your Collection: Quickly add cards to your personal collection with a simple tap. Organize and categorize your cards by set, rarity, condition, and more.",
        icon: "add",
      },
      {
        description:
          "Track Card Values: Stay up-to-date with real-time card value trends, making informed decisions on buying, selling, or trading cards.",
        icon: "trending-up",
      },
    ],
    description:
      "Reactemon is the ultimate app for Pokemon enthusiasts and card collectors. With its powerful fetch calls to the official Pokemon API, you can effortlessly search for individual Pokemon cards or entire card sets. Whether you're a seasoned collector or just starting your journey, this app is your one-stop solution for organizing and managing your Pokemon card collection.",
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
          "Experience the excitement of Wordle in a whole new light with our meticulously crafted web game!",
        icon: "game",
      },
      {
        description:
          "Immerse yourself in the world of letters and words as you test your vocabulary and deduction skills. The familiar interface and intuitive gameplay make it a delightful experience for Wordle enthusiasts and word-game aficionados alike.",
        icon: "language",
      },
      {
        description:
          "Challenge your friends, sharpen your word skills, and embrace the nostalgia of Wordle with our user-friendly, browser-based rendition. Dive in and start guessing those words today!",
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