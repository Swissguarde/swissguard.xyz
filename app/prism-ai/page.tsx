import ProjectDetail from "@/components/project-detail";
import { Metadata } from "next";
import {
  SiGreensock,
  SiNextdotjs,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Swissguard - Prism AI",
  description:
    "Swissguard is a frontend developer with 3 years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function PrismAiPage() {
  return (
    <section>
      <ProjectDetail
        title="Prism AI"
        description="Prism.ai is a modern AI-focused platform designed to highlight how cutting-edge design and artificial intelligence can elevate businesses. "
        logo="/images/prism/logo.png"
        cover="/images/prism/project-prism.png"
        link="https://prism-ai.vercel.app"
        repo="https://github.com/Swissguarde/prism.ai"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "Sanity", icon: <SiSanity /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "GSAP", icon: <SiGreensock /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="The goal was to create a high-performance, visually dynamic site that captures the innovative spirit of Prism.ai while presenting its features in an engaging, narrative-driven format. The website’s hero section immediately sets the tone with bold messaging, paired with a clean dashboard mockup that gives visitors a clear vision of the product."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="Using Next.js for optimal performance and SEO, Sanity CMS for seamless content management, and TailwindCSS for a modern, responsive design, Prism.ai delivers both flexibility and speed. GSAP is leveraged to create smooth animations, adding depth and interactivity without overwhelming the user experience."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/prism/slide-1.png" },
  { image: "/images/prism/slide-2.png" },
];
