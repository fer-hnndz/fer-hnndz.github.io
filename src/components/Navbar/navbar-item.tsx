"use server";

interface NavbarItemProps {
  text: string;
}
export async function NavbarItem({ text }: NavbarItemProps) {
  return (
    <span className="text-md hover:underline hover:cursor-pointer hover:dark:text-catpuccinRed transition-all duration-100 ease-out">
      {text}
    </span>
  );
}
