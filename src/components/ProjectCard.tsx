"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={project.link}>
        <motion.div
          className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Thumbnail Area */}
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-zinc-300 dark:text-zinc-700 opacity-50">
                {project.name.charAt(0)}
              </div>
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-300 group-hover:bg-zinc-900/10" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              {project.category}
            </p>

            {/* Project Name */}
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
              {project.name}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}