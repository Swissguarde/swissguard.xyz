import Link from "next/link";
import AutoScrollCarousel from "./auto-scroll-carousel";
import Cta from "./cta";

export default function MainContent() {
  return (
    <section>
      <div className="flex flex-col gap-8 border-b p-4 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Ayomide Kolade</h2>
            <p className="font-mono text-sm tracking-wider text-green-400">
              Frontend Developer
            </p>
          </div>
          <div>
            <Link
              href="https://calendly.com/swissguard/hire-me"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-accent text-md rounded-sm bg-black p-2 font-mono tracking-wider text-white uppercase shadow-lg"
            >
              Hire Me
            </Link>
          </div>
        </div>

        <p className="dark:text-muted-foreground">
          FKA Swissguard, I’ve spent the past 3 years turning ideas into fast,
          responsive websites — helping startups, businesses, and creatives
          build their online presence with clean code.
        </p>
      </div>

      <div className="my-8">
        <AutoScrollCarousel carouselData={carouselData} />
      </div>

      <div className="mt-10 p-4" id="projects">
        <h2 className="text-lg font-semibold tracking-wide dark:text-gray-300">
          Featured Projects
        </h2>

        <div className="my-10 flex flex-col gap-10">
          {featuredProjects.map(({ title, description, image, link }, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl">
              <Link href={link}>
                <img
                  src={image}
                  alt={title}
                  className="h-[300px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 md:h-[500px]"
                />
              </Link>
              <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 p-4 md:h-[120px] md:flex-row md:justify-between dark:bg-gray-300/10">
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="font-medium tracking-wide md:text-lg dark:text-white">
                    {title}
                  </h3>
                  <p className="dark:text-muted-foreground text-sm md:text-base">
                    {description}
                  </p>
                </div>
                <Link
                  href={link}
                  className="dark:bg-accent my-2 w-full rounded-sm bg-black p-2 text-center font-mono tracking-wider text-white uppercase shadow-lg md:my-0 md:w-fit"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cta />
    </section>
  );
}

const carouselData = [
  { image: "/images/fizzi/fizzi.png" },
  { image: "/images/nexora/nexora.png" },
  { image: "/images/heritage.png" },
  { image: "/images/prism/prism.png" },
  { image: "/images/blockforge/blockforge.png" },
];

const featuredProjects = [
  {
    title: "Fizzi",
    description:
      "An interactive 3D brand experience for Fizzi, a modern soda drink.",
    image: "/images/fizzi/project-fizzi.png",
    link: "/fizzi",
  },
  {
    title: "Property",
    description:
      "A property listing platform featuring real-time messaging, secure authentication, and many more.",
    image: "/images/property/property.png",
    link: "/property",
  },
  {
    title: "Blockforge",
    description:
      "A modern blockchain website with a dark, premium design, built using Astro.js.",
    image: "/images/blockforge/project-blockforge.png",
    link: "/blockforge",
  },
  {
    title: "CR7",
    description:
      "A premium online art store for Cristiano Ronaldo’s paintings and fine art prints.",
    image: "/images/cr7/slide-1.png",
    link: "/cr7",
  },
  {
    title: "Nexora",
    description:
      "A sleek AI business website built with Next.js, TailwindCSS, and Framer Motion.",
    image: "/images/nexora/project-nexora.png",
    link: "/nexora",
  },
  {
    title: "Prism AI",
    description:
      "Prism.ai is a dynamic AI platform website built with Next.js, Sanity CMS, GSAP, and TailwindCSS",
    image: "/images/prism/prism.png",
    link: "/prism-ai",
  },
];
