"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Skills", "Experience", "Education"];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <motion.div
            key="skills"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          >
            {/* Frontend Skills */}
            <div className="group relative overflow-hidden bg-background/50 backdrop-blur-sm p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-primary/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="p-2 rounded-xl bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18h.01"/><path d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"/></svg>
                </span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/80 text-foreground/80 border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="group relative overflow-hidden bg-background/50 backdrop-blur-sm p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-primary/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="p-2 rounded-xl bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                </span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/80 text-foreground/80 border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="group relative overflow-hidden bg-background/50 backdrop-blur-sm p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-primary/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="p-2 rounded-xl bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                </span>
                Tools & Version
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Git", "GitHub", "Docker", "Postman", "Vercel"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/80 text-foreground/80 border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & UI */}
            <div className="group relative overflow-hidden bg-background/50 backdrop-blur-sm p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-primary/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="p-2 rounded-xl bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                </span>
                Design & UI
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Figma", "Photoshop", "Wireframing", "Prototyping", "UI/UX"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/80 text-foreground/80 border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="experience"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-col gap-6"
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
      case 2:
        return (
          <motion.div
            key="education"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-col gap-6"
          >
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  Bachelors in Computer Science (Hons)
                </h3>
                <span className="text-primary font-medium text-sm pt-1">
                  2021 - 2023
                </span>
              </div>
              <p className="text-foreground/70">Herald College Kathmandu</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  High School
                </h3>
                <span className="text-primary font-medium text-sm pt-1">
                  2018 - 2020
                </span>
              </div>
              <p className="text-foreground/70">Modern Indian School</p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 lg:px-20 max-w-7xl mx-auto py-12 flex flex-col lg:flex-row gap-16 items-center">
      <motion.div
        className="w-full lg:w-[45%] relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/about.jpg"
          alt="Genious Bajracharya"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
      </motion.div>

      <motion.div
        className="w-full lg:w-[55%] flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-10">
          An Aspiring and Enthusiastic Web Developer and Designer, passionate
          about crafting visually appealing and user-friendly websites. Proficient
          in modern tools like React, Next.js, and Tailwind CSS. I enjoy
          translating ideas into engaging online experiences. Eager to learn and
          collaborate in a creative environment while bringing innovative designs
          to life.
        </p>

        <div className="flex gap-2 border-b border-border mb-6 relative">
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

        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}