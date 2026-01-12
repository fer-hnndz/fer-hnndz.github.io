"use server";

import { ReactNode } from "react";

interface CvEntryProps {
  title: string;
  duration: string;
  children: ReactNode;
}

export async function CvEntry({ title, duration, children }: CvEntryProps) {
  return (
    <>
      <div className="flex items-center flex-row mt-2">
        <h2 className="font-bold w-fit inline-block">{title}</h2>

        <span className="ml-auto mr-0 inline-block whitespace-nowrap">
          {duration}
        </span>
      </div>

      <div>{children}</div>
    </>
  );
}
