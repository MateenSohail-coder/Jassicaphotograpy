import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl rangile md:text-5xl font-bold text-neutral-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Passionate about capturing the beauty in every moment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-neutral-800">
                My Story
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                With over 5 years of experience in photography, I&apos;ve had
                the privilege of capturing countless special moments. From
                intimate portraits to grand wedding celebrations, I believe
                every photo tells a unique story. My passion lies in creating
                timeless images that evoke emotion and preserve memories for
                generations to come.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg">
                I specialize in natural light photography, ensuring that every
                shot feels authentic and beautiful. Whether it&apos;s your
                wedding day, family portraits, or a corporate event, I&apos;m
                committed to delivering exceptional results that exceed
                expectations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Natural Light Expert
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Wedding Specialist
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Portrait Photography
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Event Coverage
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-800 mb-2">
                  500+
                </div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-800 mb-2">
                  1000+
                </div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">
                  Photos Taken
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-800 mb-2">
                  5+
                </div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Avatar className="w-80 h-80 shadow-2xl border-8 border-white">
                <AvatarImage src="/jassica.jpg" alt="Jassica" />
                <AvatarFallback className="text-8xl relative bg-gradient-to-br from-neutral-200 to-neutral-300"></AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="text-2xl">📸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
