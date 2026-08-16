"use client";

import { motion } from "motion/react";

interface ProjectCardProps {
  name: string;
  description: string;
  keypoints: string[];
}

export function ProjectCard({ name, description, keypoints }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-3 border border-slate-200 rounded-lg p-6"
    >
      <h2 className="font-serif text-3xl">{name}</h2>
      <p className="font-serif text-base text-slate-600">{description}</p>
      <ul className="list-disc ml-5 flex flex-col gap-1 mt-1">
        {keypoints.map((k) => (
          <li key={k} className="font-serif text-base text-slate-600">
            {k}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
