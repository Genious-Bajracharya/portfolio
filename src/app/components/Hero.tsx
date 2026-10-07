"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const roles = ["Software Engineer", "Fullstack Developer", "Typescript Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const router = useRouter();

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/GeniousBajracharya_CV.pdf";
    link.download = "GeniousBajracharya_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-12 overflow-hidden mb-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="block text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {`Heyya, I'm `}
          <span className="text-primary relative inline-block">
            Genious
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>{" "}
          Bajracharya
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-3xl md:text-xl text-foreground/80 font-medium mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          1+ year professional experience · React · Next.js · TypeScript · Node.js · PostgreSQLl
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md: flex  flex-col  gap-8 justify-center "
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg group cursor-pointer"
            onClick={() => router.push("#projects")}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg group cursor-pointer"
            onClick={handleDownloadCv}
          >
            Download Cv
            <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}