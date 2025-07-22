"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

export default function Cta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-4xl overflow-hidden border border-gray-200/50 bg-gray-300/10 p-8 shadow-lg md:p-12 dark:border-gray-700/50"
    >
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full bg-green-400/10 px-4 py-2 text-green-600 dark:bg-green-400/20 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="font-mono text-sm tracking-wider">
              Available for Work
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground mb-8 text-lg md:text-xl"
        >
          Whether you’re a startup, a business, or just have a great idea, I’d
          love to collaborate and bring it to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="https://calendly.com/swissguard/hire-me"
              target="_blank"
              rel="noopener noreferrer"
              className="group dark:bg-accent dark:hover:bg-accent/90 inline-flex items-center justify-center gap-2 rounded-sm bg-black px-8 py-4 font-mono text-lg tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:bg-gray-900 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
            >
              <span>Hire Me</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowRight />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              spy={true}
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white/80 px-8 py-4 font-mono text-lg tracking-wider uppercase shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base dark:border-gray-600 dark:bg-gray-800/80 dark:hover:bg-gray-700/80"
            >
              <span>View Work</span>
            </ScrollLink>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <p className="text-muted-foreground text-sm">
            Want to see more? Check out additional projects on my GitHub
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="https://github.com/swissguarde"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300/50 bg-gray-50/50 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400/50 hover:bg-gray-100/50 dark:border-gray-600/50 dark:bg-gray-800/50 dark:hover:border-gray-500/50 dark:hover:bg-gray-700/50"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>GitHub</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                <FaArrowRight className="h-3 w-3" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-muted-foreground mt-8 text-sm"
        >
          <span>Or drop me a line at </span>
          <Link
            href="mailto:ayomikolade2003@gmail.com"
            className="font-medium text-green-600 underline decoration-green-400/50 underline-offset-2 transition-all duration-200 hover:decoration-green-400 hover:underline-offset-4 dark:text-green-400"
          >
            ayomikolade2003@gmail.com
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
