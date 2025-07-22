"use client";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AutoScrollCarousel from "./auto-scroll-carousel";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import Cta from "./cta";

interface Props {
  title: string;
  description: string;
  logo: string;
  paragraph?: boolean;
  paragraphHeading?: string;
  paragraphContent?: string;
  tech?: { title: string; icon: React.ReactNode }[];
  link: string;
  repo?: string;
  cover: string;
  carouselData: { image: string }[];
  secondParagraph?: boolean;
  secondParagraphContent?: string;
  secondParagraphHeading?: string;
}

export default function ProjectDetail({
  title,
  description,
  logo,
  paragraph,
  paragraphHeading,
  paragraphContent,
  tech,
  link,
  repo,
  cover,
  carouselData,
  secondParagraph,
  secondParagraphContent,
  secondParagraphHeading,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-fit"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="my-5"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
          <p className="text-md text-gray-500">{description}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="group flex w-full cursor-pointer items-center justify-between rounded-sm border-b bg-gray-200/40 px-4 py-2 transition-all duration-300 dark:bg-gray-700/40 dark:hover:bg-gray-700/60"
      >
        <img src={logo} alt={title} className="h-full w-8 object-contain" />

        <Link
          href={link}
          target="_blank"
          className="flex items-center gap-2 overflow-hidden"
        >
          <h2 className="translate-x-4 text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-300">
            Visit Website
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 transition-all duration-300 group-hover:scale-110 dark:text-gray-400 dark:group-hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </motion.div>

      {tech && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-0.5 pt-4">
            <p className="text-muted-foreground">Stack:</p>
            {tech.map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <div className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200/40 p-2 dark:bg-gray-700/40">
                    <div className="">{item.icon}</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {repo && (
            <div className="flex items-center gap-2">
              <FaGithub className="size-4" />
              <Link
                href={repo}
                target="_blank"
                className="flex items-center gap-2 font-mono tracking-wide text-green-400 hover:underline"
              >
                <span>GitHub Repo</span>
              </Link>
            </div>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="my-10 border-y"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-14"
      >
        <img
          src={cover}
          alt={title}
          className="h-[300px] w-full rounded-md object-cover md:h-[500px]"
        />
      </motion.div>

      {paragraph && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="my-10"
        >
          <h2 className="text-lg font-medium">{paragraphHeading}</h2>
          <p className="text-md text-muted-foreground">{paragraphContent}</p>
        </motion.div>
      )}

      {secondParagraph && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="my-10">
            <h2 className="text-lg font-medium">{secondParagraphHeading}</h2>
            <p className="text-md text-muted-foreground">
              {secondParagraphContent}
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="my-10 border-t pt-10"
      >
        <h2 className="mb-5 text-lg font-medium">More images from {title}</h2>
        <AutoScrollCarousel carouselData={carouselData} />
      </motion.div>

      <Cta />
    </motion.div>
  );
}
