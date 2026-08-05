"use client";

import { useState } from "react";
import Image from "next/image";

export default function V2Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container w-full min-h-dvh flex items-center justify-center [perspective:2000px]">
      <div
        className={`relative transform-3d transition-all duration-700 ${
          open
            ? "w-full h-dvh rotate-y-180"
            : "h-[75dvh] w-[calc(75dvh_*_229/162)]"
        }`}
      >
        <div className="absolute inset-0 backface-hidden border-4 border-catpuccinRed ring-4 ring-blue-600 rounded bg-white p-3 flex items-center justify-center">
          <div className="absolute top-6 left-6 flex flex-col items-start gap-0 leading-5">
            <h1 className="font-serif">Jorge F. Hernández</h1>
            <p className="font-serif">Software Engineer Student</p>
            <p className="font-serif flex items-center gap-1">
              San Pedro Sula, HN
              <Image
                alt="Honduran Flag"
                width={24}
                height={12}
                src="my-flag.png"
              />
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <a
              href="https://www.linkedin.com/in/jfhernandez08/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fer-hnndz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif hover:underline"
            >
              GitHub
            </a>
            <button
              onClick={() => setOpen(true)}
              className="font-serif hover:underline cursor-pointer"
            >
              Projects
            </button>
            <span className="hidden font-serif">Blog</span>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-y-auto rounded border-4 border-catpuccinRed ring-4 ring-blue-600 bg-white p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-2xl">Projects</h1>
            <button
              onClick={() => setOpen(false)}
              className="font-serif hover:underline cursor-pointer"
            >
              ← Back
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded p-4 flex flex-col gap-2"
              >
                <h2 className="font-serif">Project {i + 1}</h2>
                <p className="font-serif text-sm text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  perspiciatis quos reprehenderit.
                </p>
                <div className="flex gap-1 mt-auto">
                  <span className="font-serif text-xs bg-slate-100 px-2 py-0.5 rounded">
                    React
                  </span>
                  <span className="font-serif text-xs bg-slate-100 px-2 py-0.5 rounded">
                    Tailwind
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
