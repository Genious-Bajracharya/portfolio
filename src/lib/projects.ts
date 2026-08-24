export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  type?: string;
  stack: string[];
}

export const projectsData: Project[] = [
    {
      id: "chatapp",
      title: "Kura Chats",
      description: "A real-time chat application for private and interactive messaging.",
      features: [
        "Real-time messaging with Socket.IO",
        "JWT Authentication",
        "Friend system (send/accept/reject requests)",
        "Online/Offline presence indicators",
        "Admin dashboard with user impersonation",
        "Discord/Slack-inspired UI",
        "Encrypted communication utilities",
      ],
      images: ["/kura1.png","/kura2.png"],
      type: "Self Project",
      githubUrl: "https://github.com/Genious-Bajracharya/ChatApp",
      liveUrl:"https://geniechatapp.vercel.app",
      stack:["JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Socket.IO",
      "React Router"]
    },
    {
      id: "gharbhada",
      title: "Ghar Bhada",
      description: "A full-stack rental property platform built for Nepal, enabling users to discover, list, and manage rental properties with location-based search and real-time communication.",
      features: [
        "Property listings and management with map integration (Leaflet)",
        "User authentication and authorization",
        "Redis-backed rate limiting",
        "Image uploads with Cloudinary",
        "Admin dashboard",
        "Real-time chat via Socket.IO",
        "Property search and filters",
        "KYC Verification"
      ],
      images: ["/gharbhada.png","/gharbhada2.png","/gharbhada3.png"],
      githubUrl: "https://github.com/Genious-Bajracharya/GharBhada",
      liveUrl: "https://gharbhada-mu.vercel.app/",
      type: "Self Project",
      stack: [
          "TypeScript",
          "Docker",
          "Next.js",
          "Express.js",
          "Prisma",
          "PostgreSQL",
          "Leaflet",
          "Socket.IO",
          "Redis",
          "Cloudinary",
          "Tailwind CSS",
          "Zod"
        ]  
      },
    {
      id: "inkwell",
      title: "Inkwell",
      description: "Inkwell is a platform for serialized fiction — a place where writers publish stories one chapter at a time, and readers discover their next favorite story. Whether you're crafting a novel, sharing a short series, or exploring the work of others, Inkwell gives you everything you need to write, publish, and connect around storytelling.",
      features: [
        "Modern authentication: bcrypt password hashing, JWT access tokens, httpOnly secure cookies for refresh tokens",
        "Rate limiting: Tight limits on auth endpoints to prevent brute force; looser limits on general API traffic",
        "Token rotation: Refresh tokens rotate on every use; reuse of an already-rotated token revokes the entire token family, protecting against token theft",
        "Cloudinary image uploads",
        "Story and chapter management",
        "Manage which chapters are live and which are drafts",
      ],
      images: ["/inkwell1.png","/inkwell2.png"],
      githubUrl: "https://github.com/Genious-Bajracharya/GharBhada",
      liveUrl: "https://gharbhada-mu.vercel.app/",
      type: "Self Project",
      stack:[
      "TypeScript",
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "JWT",
      "Tailwind CSS"
    ]
    },
    {
    id: "rank-one",
    title: "Rank One",
    description: "A modern creative agency website for startups, offering branding, development, production, digital marketing, animation, and design services.",
    features: [
      "Modern agency landing page",
      "Design and branding services showcase",
      "Web development services",
      "Digital marketing services",
      "Animation and production services",
      "Portfolio and case study showcase",
      "Blog and featured articles section",
      "Online course showcase",
      "Client testimonials",
      "Responsive startup-focused design",
      "Contact and project inquiry sections"
    ],
    images: ["/rankone.png"],
    liveUrl: "https://rank-one-pro.vercel.app/",
    type: "Rank One Project",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    id: "astera",
    title: "Astera",
    description: "A full-stack real estate platform for discovering, comparing, and managing residential and off-plan properties, with property services, insights, careers, and administrative management.",
    features: [
      "Property discovery and browsing",
      "Residential and off-plan property listings",
      "Property search and filtering",
      "Property comparison",
      "Property purchasing workflow",
      "User authentication",
      "Property bookmarks",
      "Community and services sections",
      "News, insights, and guides",
      "Career and job listings",
      "Admin dashboard",
      "Property and content management",
      "Image uploads with Cloudinary",
      "JWT-based authentication",
      "Responsive real estate interface",
    ],
    images: ["/astera1.png","/astera2.png","/astera3.png"],
    // githubUrl: "https://github.com/Genious-Bajracharya/astera",
    liveUrl: "https://astera-five.vercel.app/",
    type: "Rank One Project",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "Axios",
      "React Hook Form"
    ]
  },
  {
    id: "dk-mart",
    title: "DK Mart",
    description: "A full-stack e-commerce platform based in poland for discovering and shopping for groceries, meats, vegetables, aquarium and fish products, plants, and other products, with product browsing, search, category-based shopping, special offers, best sellers, new products, and business-focused selections for restaurants, cafés, and hotels.",
    features: [
      "Product discovery and browsing",
      "Product search",
      "Category-based shopping",
      "New product listings",
      "Best-selling product listings",
      "Special offers and promotions",
      "Responsive e-commerce interface",
      "Insights and informational content",
      "Product-focused landing sections"
    ],
    images: ["/dk1.png","/dk2.png","/dk3.png"],
    liveUrl: "https://dkmart2.vercel.app/",
    type: "Rank One Project",
    stack: ["React","Node","Express","MongoDB"]
  },


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
    type: "Self Project",
    stack: ["React JS"," Node Js"," Express JS"," MySQL"]
  },
  {
    id: "fakestore",
    title: "Fake Store",
    description: "An e-commerce app made using Fake Store API.",
    features: ["Made Using React Js and Css", "Responsive", "Fake Store API Integration"],
    images: ["/fakestore.jpeg"],
    githubUrl: "https://github.com/Genious-Bajracharya/OnlineStore",
    liveUrl: "https://geniefakestore.netlify.app/",
    type: "Self Project",
    stack: ["React Js"," Fake store API"]
    
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
    type: "Self Project",
    stack: ["Next Js"," Nest Js"," Prisma", "ShadeCN", "Postgres SQL"]

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
    type: "Self Project",
    stack:[]

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
    type: "Self Project",
    stack: ["React Js"," Openweather API"]
  },
];
