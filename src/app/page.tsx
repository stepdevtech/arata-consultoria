import Hero from "@/components/Hero";
import Awareness from "@/components/Awareness";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-arata-forest flex flex-col">
      <Navbar />
      <Hero />
      <Awareness />
      <Services />
      <Team />
      <Footer />
    </main>
  );
}
