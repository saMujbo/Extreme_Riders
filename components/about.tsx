import { Heart, Shield, Award } from "lucide-react";
import { VALUES } from "@/lib/constants";

const VALUE_ICONS = {
  Honesty: Heart,
  Safety: Shield,
  "Quality Workmanship": Award,
} as const;

export function About() {
  return (
    <section id="about" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/assets/team.jpg"
              alt="The Extreme Riders team — professional bike mechanics"
              className="h-80 w-full object-cover lg:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 rounded-xl border border-primary-foreground/20 bg-ink/80 p-4 backdrop-blur-md">
              <p className="text-3xl font-black text-carmine">10+</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                Years of experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-carmine">
              About us
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-primary-foreground text-balance lg:text-5xl">
              We are cyclists{" "}
              <span className="text-carmine">just like you.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-primary-foreground/60">
              We ride, we race, and we understand how important your bike is to
              you. Every repair gets the same care we{"'"}d give our own gear.
              That{"'"}s our promise.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-6">
              {VALUES.map((value) => {
                const Icon =
                  VALUE_ICONS[value.title as keyof typeof VALUE_ICONS];
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-carmine/15">
                      <Icon className="h-6 w-6 text-carmine" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold text-primary-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-primary-foreground/60">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
