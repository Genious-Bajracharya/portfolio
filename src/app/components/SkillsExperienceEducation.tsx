"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skillLogos: Record<string, string> = {
  "React.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  "Next.js 14+": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
  "TypeScript": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
  "Framer Motion": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg",
  "shadcn/ui": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E",
  "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
  "Express.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
  "Socket.IO": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/socketdotio.svg",
  "REST APIs": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg",
  "JWT Authentication": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg",
  "Prisma ORM": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg",
  "MongoDB": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
  "Database Design": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
  "Query Optimization": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
  "Docker": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
  "Vercel": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
  "Netlify": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg",
  "npm / pnpm": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/npm.svg",
  "VS Code": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg",
  "Leaflet": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leaflet.svg",
  "Real-time Systems": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/socketdotio.svg",
  "Geolocation": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlemaps.svg",
  "Jest": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jest.svg",
  "React Testing Library": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  "Postman": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg",
  "API Testing": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg",
};

export default function SkillsExperienceEducation() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Skills", "Experience", "Education"];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js 14+", "Tailwind CSS", "TypeScript", "Framer Motion", "shadcn/ui"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs", "JWT Authentication", "Prisma ORM"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Prisma", "Database Design", "Query Optimization"],
    },
    {
      title: "Tools & Deployment",
      skills: ["Git & GitHub", "Docker", "Vercel", "Netlify", "npm / pnpm", "VS Code"],
    },
    {
      title: "Real-time & Maps",
      skills: ["Socket.IO", "Leaflet", "Real-time Systems", "Geolocation"],
    },
    {
      title: "Testing & Quality",
      skills: ["Jest", "React Testing Library", "Postman", "API Testing"],
    },
  ];

  const renderSkills = () => (
    <motion.div
      key="skills"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {skillCategories.map((category, idx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all group cursor-default"
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <img
                    src={skillLogos[skill] || skillLogos["REST APIs"]}
                    alt={skill}
                    className="w-8 h-8 object-contain dark:invert dark:brightness-110 transition-all group-hover:dark:brightness-125"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-center text-foreground/80 group-hover:text-foreground">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: skillCategories.length * 0.05 }}
        className="bg-secondary/10 border border-secondary/30 rounded-2xl p-4 mt-8"
      >
        <p className="text-sm text-foreground/70 flex items-start gap-2">
          <span className="text-lg mt-1">💡</span>
          <span>
            <strong>Familiar with:</strong> Docker containerization, CI/CD pipelines, API design
            patterns, RESTful services, real-time applications, responsive design, and performance
            optimization.
          </span>
        </p>
      </motion.div>
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div
      key="experience"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:border-border transition-all duration-300 cursor-pointer">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-2" />
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Full Stack Developer
          </h3>
          <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">
            November 2024 - October 2025
          </span>
        </div>
        <p className="text-foreground/70 text-lg font-medium">Rank One</p>

        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <div className="overflow-hidden">
            <ul className="pt-4 space-y-2 text-foreground/80 list-none">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Developed and maintained responsive web applications using React and Node.js.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Collaborated with the design team to implement intuitive user interfaces.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Optimized database queries and API endpoints for improved performance.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:border-border transition-all duration-300 cursor-pointer">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-2" />
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Associate Full Stack Developer
          </h3>
          <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">
            October 2025 - Present
          </span>
        </div>
        <p className="text-foreground/70 text-lg font-medium">LexFlow</p>

        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <div className="overflow-hidden">
            <ul className="pt-4 space-y-2 text-foreground/80 list-none">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Architecting scalable full-stack solutions with Next.js and Tailwind CSS.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Integrating complex third-party tools and managing deployments.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Leading UI/UX modernizations across legacy products.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderEducation = () => (
    <motion.div
      key="education"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">
            Bachelors in Computer Science (Hons)
          </h3>
          <span className="text-primary font-medium text-sm pt-1">2021 - 2023</span>
        </div>
        <p className="text-foreground/70">Herald College Kathmandu</p>
      </div>
      <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">High School</h3>
          <span className="text-primary font-medium text-sm pt-1">2018 - 2020</span>
        </div>
        <p className="text-foreground/70">Modern Indian School</p>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderSkills();
      case 1:
        return renderExperience();
      case 2:
        return renderEducation();
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 lg:px-20 max-w-7xl mx-auto py-12 flex flex-col gap-8">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground tracking-tight">
          Skills <span className="text-primary">&</span> Experience
        </h2>

        <div className="flex gap-2 border-b border-border mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 text-lg font-medium transition-colors ${
                activeTab === index ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </div>
  );
}
