import { Shield, Wrench, Clock } from "lucide-react";
import { WHATSAPP_URL, TRUST_BADGES } from "@/lib/constants";

const BADGE_ICONS = {
  wrench: Wrench,
  shield: Shield,
  clock: Clock,
} as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.jpg"
          alt="Professional bike workshop interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-4 lg:px-8">
        <div className="max-w-3xl pt-20 pb-32 lg:pt-28 lg:pb-40">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-carmine/40 bg-carmine/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-carmine" />
            <span className="text-xs font-semibold uppercase tracking-widest text-carmine">
              Professional Bike Workshop
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-7xl">
            Get your bike riding like new{" "}
            <span className="text-carmine">in 24 hours.</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
            Professional service, reliable parts, and expert advice so you can
            ride worry-free.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-carmine px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-carmine/90 hover:shadow-xl hover:shadow-carmine/30"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Request a Quote on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              See Services
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 pb-8 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {TRUST_BADGES.map((badge) => {
                const Icon =
                  BADGE_ICONS[badge.icon as keyof typeof BADGE_ICONS];
                return (
                  <div
                    key={badge.title}
                    className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-carmine/15">
                      <Icon className="h-6 w-6 text-carmine" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary-foreground">
                        {badge.title}
                      </p>
                      <p className="text-xs text-primary-foreground/60">
                        {badge.description}
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
