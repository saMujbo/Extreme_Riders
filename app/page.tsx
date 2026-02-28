import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { Services } from "@/components/services";
import { ShopCategories } from "@/components/shop-categories";
import { SocialProof } from "@/components/social-proof";
import { About } from "@/components/about";
import { LocationCTA } from "@/components/location-cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <Services />
      <ShopCategories />
      <SocialProof />
      <About />
      <LocationCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
