"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function SidebarLhs() {
  return (
    <aside className="sticky top-4 col-span-2 hidden h-screen flex-col overflow-y-auto rounded-lg p-4 md:flex">
      <div className="space-y-4">
        <Link href="/">
          <Avatar className="h-20 w-20 transition-all duration-300 hover:scale-105">
            <AvatarImage
              src="/images/swiss.jpg"
              className="cursor-pointer object-cover"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </Link>

        <h2 className="font-mono text-sm">Swissguard</h2>

        <div className="flex items-center space-x-2">
          <h2 className="dark:text-muted-foreground text-sm tracking-wider">
            Available for work
          </h2>

          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
        </div>

        <ModeToggle />

        <nav className="dark:text-muted-foreground flex flex-col border-y py-4">
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-100}
            spy={true}
            href="/"
            className="nav-link"
          >
            Projects
          </ScrollLink>
          <Link href="/about" className="nav-link">
            About Me
          </Link>
          <Link
            href="https://docs.google.com/document/d/1cbLKR-DIoql3EwkvqGXHPq0S0BwOpckg2aJE3N9xNOw/edit?usp=sharing"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </Link>
          <Link
            href="mailto:ayomikolade2003@gmail.com"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </aside>
  );
}
