import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swissguard's Year in Review — 2025",
  description: "A personal reflection on life, work, and growth in 2025.",
};

export default function Year2025Page() {
  return (
    <section className="px-4">
      <div className="flex flex-col gap-6 pb-6">
        <div className="flex items-center gap-4">
          <div className="rounded-sm bg-gray-600/40 p-1 text-xs tracking-wider text-white">
            ayomide fka swissguard
          </div>
          <div className="rounded-sm bg-gray-600/40 p-1 text-xs tracking-wider text-white">
            dec 2025
          </div>
        </div>
        <h3 className="mt-3 font-mono text-lg font-bold">
          Swissguard's Year in Review — 2025
        </h3>
        <p className="text-muted-foreground font-mono text-sm">
          A personal reflection on life, work, and growth in 2025.
        </p>
      </div>

      <hr />

      <div className="flex flex-col gap-10 pt-10 pb-20 font-mono md:gap-6">
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">
            A Year of Work, Change, and Quiet Wins
          </h2>
          <p className="text-muted-foreground text-sm">
            Looking back, 2025 was the year effort started compounding. It
            definitely wasn't, overnight or loud but it was steady enough that
            by the end of the year, I could finally feel the progress. A lot
            happened across life, school, work, and everything in between, but
            the biggest shift was internal. I learned what showing up
            consistently can actually do when you give it time. This was a
            foundation year.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">What I Wanted From 2025</h2>
          <p className="text-muted-foreground text-sm">
            Going into the year, my main goals were clear. I wanted to make more
            money from tech, position myself better, get sharper at web
            development, and stop just building for passion alone. I’d already
            spent years doing that. This year was about leverage. I needed to be
            more intentional. Picking up tools that made sense. Exploring 3D
            graphics with WebGL to expand my range, and being practical enough
            to use tools like WordPress, Wix (wix is terrible, won't recommend
            and definitely won't use again) for simple website gigs and CMS
            tools like Sanity when they fit the problem better. Building smarter
            cause the grind wasn’t random anymore, it had direction. One thing I
            did intentionally was stop chasing every shiny new framework. Web
            development moves fast, especially online, but I focused on what
            works, what’s popular in my environment, and what helps me ship.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">
            Discipline Changed Everything
          </h2>
          <p className="text-muted-foreground text-sm">
            One of the biggest shifts this year came from outside tech entirely.
            I started going to the gym, eating better, sleeping better (we
            getting the full 8 hours every night, except when Drake finally
            drops ICEMAN). Discipline spilled into everything else. I started
            waking up early, feeling fresher in the mornings, and more motivated
            to actually complete my daily tasks. The gym taught me something
            simple but powerful: if you show up and put in the work, you’ll see
            the results. Sometimes weekly. Sometimes slower. But never never. I
            carried that exact mindset into software development. Code, like the
            gym, rewards consistency more than bursts of motivation. Big
            shoutout to my mum as well for her support this year. She encouraged
            morning runs together, backed my gym routine and helped me eat
            better (cause lord knows i can't cook to save my life lmaoo), she
            played a massive role in making this lifestyle change stick.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">
            School and SIWES: Theory vs Reality{" "}
          </h2>
          <p className="text-muted-foreground text-sm">
            Academically, this year was frustrating. The first semester was
            locked down, classes moved online, and of course it was trash. I
            don’t even learn much in physical classes, talk more of online ones.
            It felt disconnected, slow, and uninspiring. Second semester was
            SIWES, a six-month IT placement, and that’s where reality kicked in.
            It started off light. I was enthusiastic, eager, just happy to be on
            site. Over time, I was handed more responsibilities. Nothing massive
            on paper, but significant enough that mistakes could affect
            construction work in the bigger picture. That was eye-opening. Add
            to that the daily commute from my house to Ikeja. Lagos will humble
            you. The distance wasn’t even too much but the traffic was always
            ridiculous. But it also exposed me to parts of the city I’d never
            really known before. Before SIWES, my Lagos was basically my area
            and my school. This expanded that world.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">Building for Value</h2>
          <p className="text-muted-foreground text-sm">
            My career as a software developer was the real center of gravity
            this year. Before 2025, I built constantly. Projects, ideas,
            experiments. I was never idle. Always onto the next thing. That
            phase built my confidence and my passion. I never really struggled
            with imposter syndrome, maybe because I learned to code before AI
            became mainstream and was forced to understand fundamentals deeply.
            This year, the goal shifted. Build, yeah, but build things that
            matter. One project that stands out was a slope deflection
            calculator I built for a civil engineering course. It calculated
            bending moments, shear forces, and generated diagrams. Completely
            outside my usual comfort zone of websites like, eCommerce, a SaaS
            etc. But it proved to me that I could adapt and solve unfamiliar
            problems if I understood the logic. On the work side, I landed a few
            gigs. I worked with an NGO in the US focused on Africans in the
            diaspora, especially in California. That relationship is still
            growing, and we’re working towards something bigger. Slowly, the
            money started coming in. It wasn’t explosive but it was consistent
            and that mattered.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">Entering a Real Codebase </h2>
          <p className="text-muted-foreground text-sm">
            Later in the year, I landed a role as a software developer. I can’t
            say much about the company or product because of an NDA, but I
            genuinely believe in what we’re building. It’s not what you’d expect
            from the Nigerian tech space (yes this is a dig at fintechs, guys we
            have enough already), and that makes it even more exciting. My first
            week was a bit overwhelming. Getting access to a fairly large,
            real-world codebase will have you feeling like that. I didn’t want
            to break stuff. I had tasks, but I was cautious. I literally cloned
            the project into another workspace, did my changes there, then went
            back to the main codebase to re-implement everything once I was
            confident. That phase didn’t last long though, but it taught me
            respect for systems. Working with a senior engineer on my team has
            been one of the biggest growth accelerators for me. You think you’ve
            done a task well, then someone shows you a cleaner approach or a
            better structure. I never see that as a threat. It’s fuel. It pushes
            me to get better.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">
            Music, Shows, and Staying Grounded
          </h2>
          <p className="text-muted-foreground text-sm">
            Music was therapy this year. Drake carried, as usual. Take Care,
            CLB, FATD, $$$4U. I’m not even glazing, he just gets it. The
            PartyNextDoor collab was needed. The low moments this year mostly
            came from things not working out the way I expected, and honestly,
            if you’re dealing with anything in that lane, trust me, there’s a
            Drake song for it. That man has lived all our lives. I don’t really
            watch movies, so series became my escape when I needed to
            disconnect. I finally finished The Vampire Diaries (took me a whole
            year, don’t ask why. Part of it was that mumu girl, Elena). I
            rewatched Seinfeld and The Office (I love sitcoms), started House MD
            to fill the void Grey’s Anatomy left behind, and recently got into
            The Sopranos.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-6">
          <h2 className="text-xl font-semibold">Looking Forward </h2>
          <p className="text-muted-foreground text-sm">
            Next year, I want to stay consistent in the gym. I want to go out
            more, meet new people, try new things, and be more spontaneous.
            Career-wise, I want to level up further , explore mobile development
            (react native definitely), and possibly pick up a new language like
            Python. I know React Native won’t be a stretch coming from React.
            I’m proud of how I showed up this year, and I’m ready for what’s
            next.
          </p>
        </div>
      </div>
    </section>
  );
}
