export default function Og() {
  return (
    <div className="flex h-[630px] w-[1200px] items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full w-full grid-cols-12 gap-4 p-8">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm bg-green-400"
              style={{
                height: `${Math.random() * 60 + 20}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-white">Ayomide Kolade</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-green-400"></div>
            <p className="font-mono text-2xl tracking-wider text-green-400">
              Frontend Developer
            </p>
            <div className="h-px w-16 bg-green-400"></div>
          </div>
        </div>

        <p className="max-w-2xl text-xl text-gray-300">
          Turning ideas into fast, responsive websites with clean code
        </p>

        {/* Tech Icons/Symbols */}
        <div className="mt-8 flex items-center gap-8 font-mono text-green-400/60">
          <span className="text-lg">&lt;/&gt;</span>
          <span className="text-lg">{}</span>
          <span className="text-lg">( )</span>
          <span className="text-lg">=&gt;</span>
          <span className="text-lg">[ ]</span>
        </div>

        {/* Website URL */}
        <div className="mt-4">
          <p className="font-mono text-lg text-gray-400">swissguard.xyz</p>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute right-0 bottom-0 h-32 w-32 bg-gradient-to-tl from-green-400/20 to-transparent"></div>
      <div className="absolute top-0 left-0 h-32 w-32 bg-gradient-to-br from-green-400/20 to-transparent"></div>
    </div>
  );
}
