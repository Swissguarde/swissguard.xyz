import ProjectDetail from "@/components/project-detail";
import {
  SiCloudinary,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard - Property",
  description:
    "Swissguard is a frontend developer with 4+ years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function PropertyPage() {
  return (
    <section>
      <ProjectDetail
        title="Property – Property Listing Platform"
        description="Property is a full-featured property listing platform designed to simplify how users list, rent, and discover properties. Built with a focus on performance, scalability, and user experience, the platform offers a clean, intuitive interface for property owners and potential buyers or renters."
        logo="/images/property/logo.png"
        cover="/images/property/property.png"
        link="https://nexora-livid.vercel.app"
        repo="https://github.com/Swissguarde/nexora"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "MongoDB", icon: <SiMongodb /> },
          { title: "TypeScript", icon: <SiTypescript /> },
          { title: "Cloudinary", icon: <SiCloudinary /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="The goal was to create a reliable, all-in-one property management solution that allows users to effortlessly list properties, connect with interested parties, and manage interactions—all in real time."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="The platform is powered by Next.js and TypeScript for a robust, type-safe, and performant architecture. MongoDB serves as the database for scalable data storage, while NextAuth handles secure user authentication. Cloudinary is integrated for efficient image uploads and optimization, ensuring smooth media handling. A real-time messaging feature is built-in to foster quick and seamless communication between users."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/property/slide-1.png" },
  { image: "/images/property/slide-2.png" },
];
