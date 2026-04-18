import ProjectDetail from "@/components/project-detail";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italy Eco Fashion Week",
  description:
    "Swissguard is a developer building really good digital experiences from nothing.",
};

export default function IefwPage() {
  return (
    <section>
      <ProjectDetail
        title="Italy Eco Fashion Week"
        description="A digital platform that brings together brand applications, event showcases, and sustainability storytelling in one place. It combines a public-facing website for audiences with a custom admin dashboard that allows the internal team to manage content, review applications, and control the overall experience."
        logo="/images/iefw/logo.png"
        cover="/images/iefw/cover.png"
        link="https://italyecofashionweek.com"
        tech={[
          { title: "Next.js", icon: <SiNextdotjs /> },
          { title: "Tailwind CSS", icon: <SiTailwindcss /> },
          { title: "TypeScript", icon: <SiTypescript /> },
        ]}
        paragraph
        paragraphHeading="The Goal"
        paragraphContent="It was to create a seamless experience for both users and internal teams by simplifying how brands apply, how content is managed, and how the event is presented online. On the frontend, the focus was on building fast, responsive interfaces across the public site and admin dashboard, ensuring clarity, ease of use, and a visually engaging experience."
        carouselData={carouselData}
        secondParagraph
        secondParagraphHeading="Behind the Experience"
        secondParagraphContent="The platform was built using Next.js and TypeScript, with Tailwind CSS for styling and a component-driven approach to keep the UI consistent across both the public site and admin dashboard. I focused on building reusable, responsive components that could scale across different sections like events, brand showcases, and content management views. For interactions and motion, I used GSAP alongside smooth scrolling to create a more fluid and engaging browsing experience, especially across the more visual sections of the site. On the functional side, I integrated the frontend with backend APIs to handle dynamic data such as brand applications, CMS content, and dashboard actions. This included managing data fetching, state handling, and ensuring a smooth flow between user interactions and system responses across both the client-facing platform and the admin interface."
      />
    </section>
  );
}

const carouselData = [
  { image: "/images/iefw/cover.png" },
  { image: "/images/iefw/slide-a.png" },
  { image: "/images/iefw/slide-b.png" },
];
