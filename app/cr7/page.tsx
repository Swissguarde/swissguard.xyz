import ProjectDetail from "@/components/project-detail";
import {
  SiCloudinary,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiSanity,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard - CR7",
  description:
    "Swissguard is a software developer with 4+ years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function CrPage() {
  return (
    <section>
      <ProjectDetail
        title="CR7"
        description="CR7 is a premium online storefront dedicated to showcasing and selling original paintings and fine art prints of football legend Cristiano Ronaldo. The platform blends art-focused design with a modern eCommerce experience to create a smooth, visually striking shopping journey."
        logo="/images/cr7/logo.png"
        cover="/images/cr7/slide-1.png"
        link="https://cr7-swiss.vercel.app"
        repo="https://github.com/Swissguarde/cr7"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "Sanity", icon: <SiSanity /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "Redux", icon: <SiRedux /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "Framer Motion", icon: <SiFramer /> },
          { title: "Stripe", icon: <SiStripe /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="The objective was to build a high-performance, art-centric eCommerce platform that not only supports secure transactions but also highlights the craftsmanship of the artwork. The site had to balance performance with elegant visuals and storytelling."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="The storefront is powered by Next.js for fast, SEO-friendly performance and Sanity CMS for structured content and product management. Stripe handles secure and reliable payment processing, while Framer Motion adds elegant motion effects to highlight the artwork and create a premium browsing experience. For state management, Redux ensures smooth cart handling and global state updates while TailwindCSS ensures a clean and modern responsive layout."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/cr7/slide-1.png" },
  { image: "/images/cr7/slide-2.png" },
];
