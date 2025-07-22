import ProjectDetail from "@/components/project-detail";
import {
  SiNextdotjs,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiGreensock,
} from "react-icons/si";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard - Fizzi",
  description:
    "Swissguard is a software developer with 4+ years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function FizziPage() {
  return (
    <section>
      <ProjectDetail
        title="Fizzi – Interactive 3D Soda Brand Experience"
        description="Fizzi is a playful, interactive web experience built for a modern soda brand. The goal was to create a site that feels as refreshing and dynamic as the drink itself."
        logo="/images/fizzi/logo.png"
        cover="/images/fizzi/project-fizzi.png"
        link="https://fizzi-peach.vercel.app"
        repo="https://github.com/Swissguarde/fizzi"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "Sanity", icon: <SiSanity /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "GSAP", icon: <SiGreensock /> },
        ]}
        paragraph
        paragraphHeading="Bringing Fizzi to Life!"
        paragraphContent=" Using Next.js for fast performance and Sanity CMS for flexible content management, the site integrates Three.js to render stunning, interactive 3D soda cans and GSAP for smooth, scroll-based animations that bring the interface to life. Styled with TailwindCSS, the design is clean, responsive, and optimized for both speed and visual appeal."
        carouselData={carouselData}
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/fizzi/slide-1.png" },
  { image: "/images/fizzi/slide-2.png" },
  { image: "/images/fizzi/slide-3.png" },
];
