import LandingNavBar from "@/components/landing/lading-nav";
import LandingHero from "@/components/landing/landing-hero";
import DashboardPreview from "@/components/landing/dashboard-preview";
import WhyUs from "@/components/landing/why-us";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingNavBar />
      <main>
        <LandingHero />
        <DashboardPreview />
        <WhyUs />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
