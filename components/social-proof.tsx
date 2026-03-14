import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-carmine text-carmine" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="reviews" className="bg-alice py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-carmine">
            Reseñas
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-ink lg:text-5xl">
            Los ciclistas confían en nosotros.
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-carmine text-carmine"
                />
              ))}
            </div>
            <span className="text-lg font-bold text-ink">4.9/5</span>
            <span className="text-sm text-taupe">
              satisfacción promedio de clientes
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-ink/5 bg-card p-8 shadow-sm"
            >
              {/* Quote mark */}
              <span
                className="absolute top-6 right-8 text-5xl font-serif leading-none text-carmine/15"
                aria-hidden="true"
              >
                {"\""}
              </span>

              <StarRating rating={testimonial.rating} />
              <p className="mt-4 mb-6 leading-relaxed text-taupe">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-carmine/10">
                  <span className="text-sm font-bold text-carmine">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-taupe">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div>
          <h3 className="mb-8 text-center text-xl font-bold text-ink lg:text-2xl">
            Mira la diferencia
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Before */}
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src="/assets/before.jpg"
                alt="Bicicleta antes del mantenimiento profesional, con componentes desgastados y sucios"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-flex rounded-full bg-taupe/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Antes
                </span>
              </div>
            </div>

            {/* After */}
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src="/assets/after.jpg"
                alt="Bicicleta después del mantenimiento profesional, con componentes limpios y restaurados"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-flex rounded-full bg-carmine px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Después
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




