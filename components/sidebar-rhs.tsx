import Link from "next/link";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function SidebarRhs() {
  return (
    <aside className="sticky top-4 col-span-2 hidden h-[90vh] flex-col justify-end rounded-lg p-4 md:flex">
      <div className="mb-4 border-b pb-4">
        <h2 className="font-mono text-sm tracking-wider">Check out my links</h2>
      </div>
      <div className="dark:text-muted-foreground flex flex-col gap-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {link.icon}
              {link.label}
            </div>
            <span>
              <FaArrowRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

const links = [
  {
    icon: <FaGithub />,
    href: "https://github.com/swissguarde",
    label: "GitHub",
  },

  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ayomidekolade-swissguard/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter />,
    href: "https://twitter.com/swisssguard",
    label: "Twitter",
  },
];
