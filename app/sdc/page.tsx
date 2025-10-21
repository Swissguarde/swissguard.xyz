import ProjectDetail from "@/components/project-detail";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard - Slope Deflection Calculator",
  description:
    "Swissguard is a frontend developer with 3 years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function SlopeDeflectionCalculatorPage() {
  return (
    <section>
      <ProjectDetail
        title="Slope Deflection Calculator"
        description="A web-based structural analysis tool that performs calculations for both beams and frames, providing engineers and students with detailed analysis results and visualizations."
        logo="/images/sdc/logo.png"
        cover="/images/sdc/slide-1.png"
        link="https://slope-deflection.vercel.app"
        repo="https://github.com/Swissguarde/slope-deflection"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="To create an intuitive, web-based structural analysis tool that simplifies complex engineering calculations for beams and frames — helping students and professionals visualize results like shear force and bending moment diagrams in real time, directly from their browser."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="This project was both a coding and engineering challenge. I built it entirely with React, JavaScript, and Recharts, without relying on external structural analysis libraries. All structural computations — from reactions to moment distributions — were manually implemented using core mathematical logic and physics principles. The process pushed me to combine front-end interactivity with rigorous engineering logic, transforming abstract equations into a visual, interactive learning tool."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/sdc/slide-1.png" },
  { image: "/images/sdc/slide-2.png" },
  { image: "/images/sdc/slide-3.png" },
];
