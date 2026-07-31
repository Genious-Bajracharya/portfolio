"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
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
          src="/me.jpeg"
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
          An enthusiastic Full Stack Developer passionate about learning new technologies,
          building pixel-perfect UIs from designs, and experimenting with new ideas.
          Proficient in React, Next.js, and the MERN stack, I thrive translating
          design systems into interactive experiences. I'm constantly exploring emerging
          technologies and pushing creative boundaries in web development.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-foreground">Learning First</h3>
            <p className="text-sm text-foreground/70">Always exploring new technologies and best practices</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Design-Driven Development</h3>
            <p className="text-sm text-foreground/70">Translating design systems into beautiful, functional code</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Problem Solver</h3>
            <p className="text-sm text-foreground/70">Enjoying the challenge of building innovative solutions</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
