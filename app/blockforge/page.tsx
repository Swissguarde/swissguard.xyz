import ProjectDetail from "@/components/project-detail";
import { SiAstro, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard - Blockforge",
  description:
    "Swissguard is a frontend developer with 3+ years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function BlockforgePage() {
  return (
    <section>
      <ProjectDetail
        title="Blockforge – The Future of Blockchain, Simplified"
        description="Blockforge is a sleek, dark-themed website designed for a blockchain company pioneering smart contract integrity and data solutions."
        logo="/images/blockforge/logo.svg"
        cover="/images/blockforge/project-blockforge.png"
        link="https://blockforge-virid.vercel.app"
        repo="https://github.com/Swissguarde/blockforge"
        tech={[
          { title: "Astro.js", icon: <SiAstro /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "Framer Motion", icon: <TbBrandFramerMotion /> },
          { title: "TypeScript", icon: <SiTypescript /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="The goal was to build a fast, responsive, and visually striking website that communicates Blockforge’s mission of pioneering smart contract integrity. Additionally, the site needed a blog for industry insights, a careers page to attract top talent, and a contact page for inquiries."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="Leveraging Astro.js, the website delivers lightning-fast static rendering for optimal performance. TailwindCSS ensures a clean and responsive design, while Framer Motion brings life to the UI with smooth, subtle animations that enhance user engagement without compromising speed."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/blockforge/slide-1.png" },
  { image: "/images/blockforge/slide-2.png" },
];
