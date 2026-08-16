"use client";

import Link from "next/link";
import { FaBlog, FaFolderOpen, FaGithub, FaLinkedin } from "react-icons/fa6";

function getGreeting() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes() >= 18 * 60 + 30
    ? "Evening"
    : "Greetings";
}

export default function Home() {
  return (
    <div className="relative w-full h-dvh overflow-hidden flex items-center justify-start px-16">
      <div className="flex flex-col items-start max-w-3xl">
        <h1 className="font-serif text-7xl" suppressHydrationWarning>
          {getGreeting()}, I&apos;m Jorge Hernández.
        </h1>
        <p className="font-serif text-xl mt-8 text-slate-500">
          You could call me a developer, but I engineer robust, high-quality
          solutions built to last.
        </p>
        <a
          href="mailto:jfernandohernandez28@gmail.com"
          className="font-serif text-lg mt-6 hover:underline transition-all duration-200"
        >
          Shoot me an email, let&apos;s talk{" "}
          <span className="font-mono text-3xl ml-1 mb-1 font-extrabold">→</span>
        </a>
      </div>

      <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5">
        <div className="group relative">
          <Link
            href="https://github.com/fer-hnndz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-catpuccinRed transition-colors duration-200"
          >
            <FaGithub />
          </Link>
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            GitHub
          </span>
        </div>

        <div className="group relative">
          <Link
            href="https://www.linkedin.com/in/jfhernandez08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-catpuccinRed transition-colors duration-200"
          >
            <FaLinkedin />
          </Link>
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            LinkedIn
          </span>
        </div>

        <div className="group relative">
          <Link
            href="#projects"
            className="text-2xl hover:text-catpuccinRed transition-colors duration-200"
          >
            <FaFolderOpen />
          </Link>
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Projects
          </span>
        </div>

        <div className="group relative">
          <Link
            href="#"
            className="text-2xl hover:text-catpuccinRed transition-colors duration-200"
          >
            <FaBlog />
          </Link>
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Blog
          </span>
        </div>
      </nav>
    </div>
  );
}
