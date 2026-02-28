// ============================================
// Extreme Riders - Central Constants
// ============================================

// WhatsApp Configuration
export const WHATSAPP_NUMBER = "XXXXXXXXXXX";
export const WHATSAPP_MESSAGE = "Hello! I came from the Extreme Riders website and I'd like a quote.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Navigation Links
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#shop" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  {
    icon: "wrench",
    title: "Certified Mechanics",
    description: "Factory-trained experts",
  },
  {
    icon: "shield",
    title: "Reliable Components",
    description: "OEM & premium parts",
  },
  {
    icon: "clock",
    title: "Fast Turnaround",
    description: "Most repairs in 24h",
  },
] as const;

// Pain Points
export const PAIN_POINTS = [
  "Noisy drivetrain that kills your ride vibe",
  "Brakes squealing every time you stop",
  "Gears skipping when you need them most",
  "Bike sitting unused in the garage for months",
  "Afraid of long rides due to mechanical issues",
] as const;

// Services
export const SERVICES = [
  {
    title: "General Maintenance",
    description: "Complete cleaning, lubrication, and tuning so every ride feels brand new.",
    icon: "settings",
  },
  {
    title: "Brake & Gear Repair",
    description: "Smooth shifting and safe braking you can actually trust on the trail.",
    icon: "disc",
  },
  {
    title: "Diagnostics & Adjustments",
    description: "We find the real problem, not guesswork. Precision tools, honest answers.",
    icon: "search",
  },
  {
    title: "Upgrades & Accessories",
    description: "We recommend only what you actually need. No upselling, just smart upgrades.",
    icon: "zap",
  },
] as const;

// Shop Categories
export const SHOP_CATEGORIES = [
  { name: "MTB Bikes", icon: "mountain" },
  { name: "Road Bikes", icon: "road" },
  { name: "Urban Bikes", icon: "building" },
  { name: "Helmets", icon: "hardhat" },
  { name: "Lights", icon: "lightbulb" },
  { name: "Gloves", icon: "hand" },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    rating: 5,
    review: "Brought my old MTB in, barely rideable. Got it back in 24 hours riding smoother than when I bought it. These guys know what they're doing.",
  },
  {
    name: "Ana R.",
    rating: 5,
    review: "First time buying a bike and they didn't try to push the most expensive one. They actually listened and helped me find the right fit. Amazing service.",
  },
  {
    name: "Miguel T.",
    rating: 5,
    review: "My brakes were making horrible noises. Quick diagnostic, honest price, perfect repair. I've been coming back for everything since.",
  },
] as const;

// About Values
export const VALUES = [
  {
    title: "Honesty",
    description: "Transparent pricing. We tell you what's wrong and what it costs, before we start.",
  },
  {
    title: "Safety",
    description: "Your safety on the road is our #1 priority. Every repair is double-checked.",
  },
  {
    title: "Quality Workmanship",
    description: "We treat every bike like it's our own. Precision work, no shortcuts.",
  },
] as const;

// Business Info
export const BUSINESS_INFO = {
  name: "Extreme Riders",
  address: "123 Cycling Avenue, Bike District",
  city: "Your City, State 12345",
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
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
