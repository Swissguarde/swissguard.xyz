import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <section className="flex items-center justify-between border-b p-4 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <Link href="/" className="font-mono text-sm">
              Swissguard
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full py-2">
            <ModeToggle />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about" className="w-full py-2">
              About Me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full py-2">
              My Resume
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="mailto:ayomikolade2003@gmail.com"
              className="w-full py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Avatar className="h-10 w-10 transition-all duration-300 hover:scale-105">
        <AvatarImage
          src="/images/swiss.jpg"
          className="cursor-pointer object-cover"
        />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    </section>
  );
}
