"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-2xl p-4"
    >
      <div className="w-fit">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 rounded-sm border border-gray-400/20 p-2 dark:bg-gray-600/40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go back</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-5 flex flex-col gap-5 border-b pb-10"
      >
        <h2 className="text-xl font-bold">Hi, I'm Ayo Kolade</h2>

        <p className="text-muted-foreground">
          In 2021, I attended a seminar that explained how the web really
          works—servers, requests, "what happens when you type a URL." Then came
          a live coding session: type, save, refresh… and the screen changed.
          That tiny moment felt like discovering you could rearrange reality
          with a keyboard. I've been hooked ever since.
        </p>
        <p className="text-muted-foreground">
          Since then, I've been building things that help people: giving small
          businesses a proper online presence, creating platforms for community
          projects, and collaborating on ideas that start as "what if" and end
          up live for people to use. What drives me is clarity, speed to launch,
          and making products that solve real problems without losing their
          human side.
        </p>
        <p className="text-muted-foreground">
          Outside of work, I'm a mix of curious builder and full-time fan of
          good stories. I play video games, enjoy a good chess match, and have
          strong opinions about TV: <span className="italic">Breaking Bad</span>{" "}
          is the GOAT tv series, <span className="italic">Seinfeld</span> is my
          comfort show (rewatched four times), and I'll never say no to a good
          sitcom—<span className="italic">The Office</span> and plenty more.
        </p>
        <p className="text-muted-foreground">
          I'm also an active member of the Google Developer Student Club at the
          University of Lagos, and I love attending tech meetups and events like
          DevFest. It's my way of staying connected, learning, and sharing ideas
          with people who get excited about the same things I do.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="my-10 flex flex-col gap-5 border-b pb-10"
      >
        <h2>Music I've been listening to recently</h2>
        <div className="h-92 w-60">
          <img
            src="/images/music.png"
            alt="music list"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
