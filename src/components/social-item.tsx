"use server";

import Link from "next/link";

interface SocialItemProps {
  icon: React.ReactNode;
  url: string;
}

export async function SocialItem({ icon, url }: SocialItemProps) {
  return (
    <Link
      className="hover:text-catpuccinRed transition-all duration-200 ease-out"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}
