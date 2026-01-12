"use server";

import { AnimatedPageTitle } from "../animated-page-title";
import { NavbarItem } from "./navbar-item";

export async function Navbar() {
  return (
    <nav className="px-4 py-6 flex flex-row items-center">
      <AnimatedPageTitle />

      <div className="flex-row justify-center h-full w-fit ml-auto mr-8 gap-x-6 flex">
        <NavbarItem text="Home" />
        <NavbarItem text="Contact" />
      </div>
    </nav>
  );
}
