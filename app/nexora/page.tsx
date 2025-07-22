import ProjectDetail from "@/components/project-detail";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Metadata } from "next";
import { TbBrandFramerMotion } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Swissguard - Nexora",
  description:
    "Swissguard is a frontend developer with 3 years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function NexoraPage() {
  return (
    <section>
      <ProjectDetail
        title="Nexora – AI Business Website"
        description="Nexora is a sleek AI-focused website designed to help businesses unlock the potential of artificial intelligence. With a clean, modern interface and engaging animations, Nexora highlights features, pricing, and contact options in a way that feels both professional and user-friendly."
        logo="/images/nexora/logo.png"
        cover="/images/nexora/project-nexora.png"
        link="https://nexora-livid.vercel.app"
        repo="https://github.com/Swissguarde/nexora"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "Framer Motion", icon: <TbBrandFramerMotion /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="The objective was to build a site that showcases Nexora’s AI-driven solutions while maintaining a crisp, futuristic aesthetic. The website had to be fast, responsive, and easy to navigate, with subtle motion to bring the brand to life."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="Powered by Next.js, Nexora delivers exceptional performance and SEO-friendly architecture. TailwindCSS handles the responsive design system, while Framer Motion brings animations that make the site feel dynamic without being overwhelming."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/nexora/slide-1.png" },
  { image: "/images/nexora/slide-2.png" },
];
