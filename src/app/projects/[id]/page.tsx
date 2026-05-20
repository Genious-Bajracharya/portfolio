"use client";

import * as React from "react";
import Image from "next/image";
import OtherProjects from "@/app/components/OtherProjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen text-foreground relative selection:bg-primary/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 group"
        >
          <Carousel 
            plugins={[plugin.current as any]}
            className="w-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden bg-muted/20 border border-border/50"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {project.images.map((src, index) => (
                <CarouselItem key={index} className="h-[350px] sm:h-[450px] lg:h-[600px] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent z-10 pointer-events-none" />
                  <Image
                    src={src}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-contain p-4 lg:p-8 filter drop-shadow-xl transition-transform duration-700 hover:scale-[1.02]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute left-6 h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 hover:bg-background text-foreground" />
              <CarouselNext className="absolute right-6 h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 hover:bg-background text-foreground" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-2/5 flex flex-col gap-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
              {project.title.split(' ')[0]} <span className="text-primary">{project.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-muted/50 to-muted/10 p-8 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              Key Features
            </h2>
            <ul className="space-y-4 relative z-10">
              {project.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-foreground/80 font-medium"
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank">
                <Button size="lg" className="rounded-full px-8 gap-2 group hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <Github size={20} className="group-hover:scale-110 transition-transform" /> View on GitHub
                </Button>
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 group hover:bg-primary/5 transition-all outline-primary/50">
                  <Globe size={20} className="group-hover:text-primary transition-colors" /> Visit Site
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-12 border-t border-border mt-12 px-4 lg:px-12"
      >
        <OtherProjects />
      </motion.div>
    </div>
  );
}
