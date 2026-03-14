import { Settings, Disc3, Search, Zap } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

const SERVICE_ICONS = {
  settings: Settings,
  disc: Disc3,
  search: Search,
  zap: Zap,
} as const;

export function Services() {
  return (
    <section id="services" className="bg-alice py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-carmine">
            Lo que hacemos
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-ink text-balance lg:text-5xl">
            Servicio experto para{" "}
            <span className="text-carmine">cada rodada.</span>
          </h2>
          <p className="text-lg leading-relaxed text-taupe">
            Desde mantenimiento rutinario hasta reparaciones complejas, te
            cubrimos con precios transparentes y asesoría honesta.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon =
              SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border border-ink/5 bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 lg:p-10 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-carmine transition-all duration-500 group-hover:w-full" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-carmine/10">
                  <Icon className="h-7 w-7 text-carmine" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-taupe">
                  {service.description}
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-carmine transition-colors hover:text-carmine/80"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por WhatsApp
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
