"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-16" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-12"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A selection of my recent works and personal projects.
          </p>
        </div>
        <Link href="/allprojects" className="hidden md:inline-flex">
          <Button variant="outline" className="group rounded-full px-6">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.slice(0,6).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow bg-card"
            onClick={() => router.push(project.liveUrl ?? "")}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.images[0]}
                alt={project.title}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            <div className="p-6 md:p-8 bg-card border-t border-border flex flex-col justify-between h-56 transition-colors">
              <div>
                <h3 className="text-2xl inline-flex gap-4 items-center font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <span className="text-sm text-muted-foreground">({project.type})</span>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0,3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-primary opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12 md:hidden">
        <Link href="/allprojects">
          <Button variant="outline" className="rounded-full px-8 group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
