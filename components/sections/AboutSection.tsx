import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="flex justify-center order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-700">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-700 opacity-0 group-hover:opacity-70"></div>
              <Image
                src="/ansh-cari.png"
                alt="Ansh Tank"
                width={500}
                height={500}
                className="object-contain relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700">
            <div>
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold gradient-text">
                Building Digital Experiences
              </h2>
            </div>

            <Separator className="bg-primary/20" />

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-source-sans leading-relaxed">
                Hi! I'm{" "}
                <span className="text-primary font-semibold">Ansh Tank</span>, a
                passionate full-stack developer and tech enthusiast. I love
                creating web applications that not only work seamlessly but also
                look great. I've built projects ranging from financial literacy
                platforms to consultancy bridges, combining problem-solving
                skills with creative design.
              </p>
              <p className="text-lg text-muted-foreground font-source-sans leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                learning about DevOps, or improving my communication and
                collaboration skills. I enjoy turning ideas into real products,
                and I'm always excited to take on new challenges that push me to
                grow.
              </p>
              <p className="text-lg text-primary font-source-sans leading-relaxed font-semibold">
                Let's build something amazing together!
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
