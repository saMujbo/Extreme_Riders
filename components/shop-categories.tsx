import {
  Mountain,
  Route,
  Building2,
  HardHat,
  Lightbulb,
  Hand,
} from "lucide-react";
import { SHOP_CATEGORIES, WHATSAPP_URL } from "@/lib/constants";

const CATEGORY_ICONS = {
  mountain: Mountain,
  road: Route,
  building: Building2,
  hardhat: HardHat,
  lightbulb: Lightbulb,
  hand: Hand,
} as const;

export function ShopCategories() {
  return (
    <section id="shop" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-carmine">
            Tienda
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary-foreground text-balance lg:text-5xl">
            Bicicletas y accesorios{" "}
            <span className="text-carmine">para ti.</span>
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/60">
            Te ayudamos a elegir la talla, el tipo y el presupuesto correctos.
            No empujamos la opción más cara; recomendamos lo que realmente te
            queda bien.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {SHOP_CATEGORIES.map((category) => {
            const Icon =
              CATEGORY_ICONS[category.icon as keyof typeof CATEGORY_ICONS];
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all hover:border-carmine/30 hover:bg-primary-foreground/10 lg:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-carmine/15 transition-colors group-hover:bg-carmine/25">
                  <Icon className="h-6 w-6 text-carmine" />
                </div>
                <h3 className="mb-4 text-lg font-bold text-primary-foreground">
                  {category.name}
                </h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-carmine transition-colors hover:text-carmine/80"
                >
                  Consultar disponibilidad
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust line */}
        <div className="mt-12 flex items-center justify-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 shrink-0 text-carmine"
          >
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            <strong className="text-primary-foreground">
              Sin ventas con presión.
            </strong>{" "}
            Te ayudamos a encontrar lo que necesitas, no lo que más cuesta.
          </p>
        </div>
      </div>
    </section>
  );
}


