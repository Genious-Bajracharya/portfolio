export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "organichealthcare",
    title: "Organic Healthcare",
    description: "A fullstack E-commerce application for Organic Products.",
    features: [
      "E-mail Verification",
      "Two-factor Authentication",
      "E-payment (Khalti)",
      "Functional Cart",
      "Admin Panel (CRUD)",
      "Stock Management",
      "Order Management",
    ],
    images: [
      "/organic1.jpeg",
      "/organic2.PNG",
      "/organic3.PNG",
      "/organic4.PNG",
      "/organic5.PNG",
      "/organic6.PNG",
      "/organic7.PNG",
    ],
    githubUrl: "https://github.com/Genious-Bajracharya/Organic-Healthcare",
  },
  {
    id: "fakestore",
    title: "Fake Store",
    description: "An e-commerce app made using Fake Store API.",
    features: ["Made Using React Js and Css", "Responsive", "Fake Store API Integration"],
    images: ["/fakestore.jpeg"],
    githubUrl: "https://github.com/Genious-Bajracharya/OnlineStore",
    liveUrl: "https://geniefakestore.netlify.app/",
  },
  {
    id: "fitnessapp",
    title: "Fitness App",
    description: "A simple platform for recording your fitness journey.",
    features: [
      "Record and Track Workout",
      "Set Goals",
      "Check Progress",
      "Functional Cart",
      "Admin Panel (CRUD)",
    ],
    images: [
      "/fitness1.jpeg",
      "/fitness2.PNG",
      "/fitness3.PNG",
      "/fitness4.PNG",
      "/fitness5.PNG",
    ],
    githubUrl: "https://github.com/Genious-Bajracharya/FitnessApp",
  },
  {
    id: "blogsapp",
    title: "Blogs App",
    description: "A dynamic blogging platform for readers and writers.",
    features: [
      "Create and edit blogs",
      "User Authentication",
      "Rich Text Editor",
      "Comment Section",
    ],
    images: ["/blog1.jpeg", "/blog2.jpeg", "/blog3.jpeg", "/blog4.jpeg"],
    githubUrl: "https://github.com/Genious-Bajracharya/BlogApp",
  },
  {
    id: "weatherapp",
    title: "Weather App",
    description: "A Weather app made using React and a weather API.",
    features: [
      "Show current Temperature",
      "Weather Forecast",
      "Change location",
      "Location Suggestion",
    ],
    images: ["/weather1.PNG", "/weather2.PNG"],
    liveUrl: "https://weathergb.netlify.app/",
  },
  {
    id: "chatapp",
    title: "ChatApp",
    description: "A real-time full-stack chat application with Socket.IO.",
    features: [
      "Real-time messaging with Socket.IO",
      "JWT Authentication",
      "Friend system (send/accept/reject requests)",
      "Online/Offline presence indicators",
      "Admin dashboard with user impersonation",
      "Discord/Slack-inspired UI",
    ],
    images: ["/chatapp1.png"],
    githubUrl: "https://github.com/Genious-Bajracharya/ChatApp",
  },
  {
    id: "gharbhada",
    title: "Ghar Bhada",
    description: "A rental property listing platform for Nepal.",
    features: [
      "Property listings with map integration (Leaflet)",
      "User Authentication",
      "Admin dashboard",
      "Real-time chat via Socket.IO",
      "Property search and filters",
      "Next.js 16 + Prisma + TypeScript",
    ],
    images: ["/gharbhada1.png"],
    githubUrl: "https://github.com/Genious-Bajracharya/GharBhada",
  },
];
