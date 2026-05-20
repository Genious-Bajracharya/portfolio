"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";
import Navbar from "@/app/components/Navbar";

export default function AllProjects() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen text-foreground relative selection:bg-primary/20">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm mb-4">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A complete archive of my web development journey.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full px-8 group shadow-sm hover:shadow-md transition-all"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-border/50 bg-card h-full flex flex-col"
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="p-6 md:p-8 bg-card flex flex-col flex-1 justify-between transition-colors border-t border-border/50">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center text-sm font-semibold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Project Details <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}