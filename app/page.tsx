import LandingNavBar from "@/components/landing/lading-nav";
import LandingHero from "@/components/landing/landing-hero";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingNavBar />

      <main>
        <LandingHero />
      </main>

      <div className="h-[60vh]" />
    </div>
  );
}
