import { AlertTriangle } from "lucide-react";
import { PAIN_POINTS, WHATSAPP_URL } from "@/lib/constants";

export function ProblemSection() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Problem Statement */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-carmine/30 bg-carmine/10 px-4 py-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-carmine" />
              <span className="text-xs font-semibold uppercase tracking-widest text-carmine">
                Sound familiar?
              </span>
            </div>

            <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground text-balance lg:text-5xl">
              Is your bike stopping you{" "}
              <span className="text-carmine">from riding?</span>
            </h2>

            <ul className="flex flex-col gap-4">
              {PAIN_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-carmine" />
                  <span className="text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Solution Card */}
          <div className="relative">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm lg:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-carmine/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-8 w-8 text-carmine"
                >
                  <path
                    d="M9 12l2 2 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">
                We make your bike safe, smooth and ready to ride.
              </h3>
              <p className="mb-8 text-base leading-relaxed text-primary-foreground/60">
                From a quick tune-up to a full overhaul, our certified mechanics
                will get you back on the road or trail with confidence.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-carmine px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-carmine/90 hover:shadow-lg hover:shadow-carmine/25"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Tell us what{"'"}s wrong
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
