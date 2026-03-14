// ============================================
// Extreme Riders - Central Constants
// ============================================

// WhatsApp Configuration
export const WHATSAPP_NUMBER = "XXXXXXXXXXX";
export const WHATSAPP_MESSAGE = "Hola, vengo desde la web de Extreme Riders y me gustaría solicitar una cotización.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Navigation Links
export const NAV_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Tienda", href: "#shop" },
  { label: "Reseñas", href: "#reviews" },
  { label: "Nosotros", href: "#about" },
  { label: "Ubicación", href: "#location" },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  {
    icon: "wrench",
    title: "Mecánicos certificados",
    description: "Expertos capacitados de fábrica",
  },
  {
    icon: "shield",
    title: "Componentes confiables",
    description: "Piezas OEM y premium",
  },
  {
    icon: "clock",
    title: "Entrega rápida",
    description: "La mayoría de reparaciones en 24 h",
  },
] as const;

// Pain Points
export const PAIN_POINTS = [
  "Transmisión ruidosa que arruina cada rodada",
  "Frenos chillando cada vez que te detienes",
  "Cambios que saltan cuando más los necesitas",
  "La bici lleva meses sin usarse en el garaje",
  "Miedo a salir lejos por problemas mecánicos",
] as const;

// Services
export const SERVICES = [
  {
    title: "Mantenimiento general",
    description: "Limpieza completa, lubricación y ajuste para que cada salida se sienta como nueva.",
    icon: "settings",
  },
  {
    title: "Reparación de frenos y cambios",
    description: "Cambios suaves y frenado seguro en los que realmente puedes confiar.",
    icon: "disc",
  },
  {
    title: "Diagnóstico y ajustes",
    description: "Encontramos el problema real, sin adivinar. Herramientas de precisión y respuestas honestas.",
    icon: "search",
  },
  {
    title: "Mejoras y accesorios",
    description: "Recomendamos solo lo que de verdad necesitas. Sin ventas forzadas, solo mejoras inteligentes.",
    icon: "zap",
  },
] as const;

// Shop Categories
export const SHOP_CATEGORIES = [
  { name: "Bicicletas MTB", icon: "mountain" },
  { name: "Bicicletas de ruta", icon: "road" },
  { name: "Bicicletas urbanas", icon: "building" },
  { name: "Cascos", icon: "hardhat" },
  { name: "Luces", icon: "lightbulb" },
  { name: "Guantes", icon: "hand" },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    rating: 5,
    review: "Llevé mi MTB vieja, casi ni se podía usar. Me la entregaron en 24 horas y quedó más suave que cuando la compré. Saben perfectamente lo que hacen.",
  },
  {
    name: "Ana R.",
    rating: 5,
    review: "Era la primera vez que compraba una bici y no intentaron venderme la más cara. De verdad me escucharon y me ayudaron a encontrar la ideal. Servicio increíble.",
  },
  {
    name: "Miguel T.",
    rating: 5,
    review: "Mis frenos hacían un ruido horrible. Diagnóstico rápido, precio honesto y reparación perfecta. Desde entonces vuelvo con ellos para todo.",
  },
] as const;

// About Values
export const VALUES = [
  {
    title: "Honestidad",
    description: "Precios transparentes. Te decimos qué tiene tu bici y cuánto cuesta antes de empezar.",
  },
  {
    title: "Seguridad",
    description: "Tu seguridad en la ruta es nuestra prioridad. Cada reparación se revisa dos veces.",
  },
  {
    title: "Trabajo de calidad",
    description: "Tratamos cada bici como si fuera nuestra. Trabajo preciso, sin atajos.",
  },
] as const;

// Business Info
export const BUSINESS_INFO = {
  name: "Extreme Riders",
  address: "123 Cycling Avenue, Bike District",
  city: "Your City, State 12345",
  hours: [
    { day: "Lunes a viernes", time: "9:00 AM - 7:00 PM" },
    { day: "Sábado", time: "9:00 AM - 5:00 PM" },
    { day: "Domingo", time: "Cerrado" },
  ],
  phone: "+1 (555) 123-4567",
  email: "hello@extremeriders.com",
} as const;

// Social Links
export const SOCIAL_LINKS = [
  { platform: "Instagram", url: "#" },
  { platform: "Facebook", url: "#" },
  { platform: "YouTube", url: "#" },
] as const;
