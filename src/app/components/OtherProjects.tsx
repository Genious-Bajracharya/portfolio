"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";

export default function OtherProjects() {
  const router = useRouter();
  const otherProjects = projectsData.slice(0, 3); // Showing first 3 for simplicity, can dynamically shuffle if needed

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Explore Other Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-border/50 bg-card"
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            <div className="p-5 bg-card flex flex-col justify-between transition-colors">
              <div>
                <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}