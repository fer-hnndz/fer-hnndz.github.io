"use client";

import Typewriter from "typewriter-effect";

export function AnimatedPageTitle() {
  return (
    <div className="text-2xl font-semibold">
      <Typewriter
        onInit={(tw) => {
          tw.typeString("Jorge Hernández")
            .pauseFor(7000)
            .deleteAll()
            .typeString("fer-hnndz")
            .pauseFor(7000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
          autoStart: true,
        }}
      />
    </div>
  );
}
