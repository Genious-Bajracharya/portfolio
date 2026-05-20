"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { SplashLoader } from "@/components/splash-loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={loading ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0, height: "100vh", overflow: "hidden" },
          visible: { opacity: 1, height: "100vh", overflowY: "scroll" },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-background text-foreground scroll-smooth snap-y snap-mandatory"
      >
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        
        <main className="flex flex-col">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative snap-start">
            <Hero />
          </section>
          
          {/* About Section */}
          <section id="about" className="min-h-screen py-20 snap-start">
            <About />
          </section>
        
          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20 snap-start">
            <Project />
          </section>
        
          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-20 snap-start">
            <Contact />
          </section>
        </main>
      </motion.div>
    </>
  );
}
