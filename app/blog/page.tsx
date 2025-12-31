import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-10 px-4">
      <h2 className="font-mono text-2xl font-bold">Blog ? </h2>

      <p className="text-muted-foreground font-mono">
        I'm not even good at writing, but this is where I’ll try to share my
        experiences and the lessons along the way.
      </p>

      <hr />

      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/blog/year-2025">
          <Image
            src="/images/2025.jpg"
            alt="Year 2025"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-cover md:h-[400px] md:w-[800px]"
          />
          <h3 className="mt-3 font-mono text-lg font-bold">
            Swissguard's Year in Review — 2025
          </h3>
          <p className="text-muted-foreground font-mono">
            A personal reflection on life, work, and growth in 2025.
          </p>
        </Link>
      </div>
    </div>
  );
}
