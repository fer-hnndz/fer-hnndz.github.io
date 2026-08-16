"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProjectCardProps {
  name: string;
  description: string;
  keypoints: string[];
  image: string;
}

export function ProjectCard({
  name,
  description,
  keypoints,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col border border-slate-200 rounded-lg overflow-hidden"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h2 className="font-serif text-3xl">{name}</h2>
        <p className="font-serif text-base text-slate-600">{description}</p>
        <ul className="list-disc ml-5 flex flex-col gap-1 mt-1">
          {keypoints.map((k) => (
            <li key={k} className="font-serif text-base text-slate-600">
              {k}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
