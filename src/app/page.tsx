import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OrbitHub from "@/components/OrbitHub";
import Services from "@/components/Services";
import WhyWJM from "@/components/WhyWJM";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <OrbitHub />
      <Services />
      <WhyWJM />
      <CTA />
      <Footer />
    </main>
  );
}
