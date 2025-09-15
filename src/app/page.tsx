import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel_formations from "@/components/Carousel_formation";
import Actualites from "@/components/Actualites";
import PartnersCarousel from "@/components/Partners";
import QualiopiCertification from "@/components/Qualiopi";
import NosFormationPhare from "@/components/Formation_phare";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
       <Hero />
       <Carousel_formations />
       <NosFormationPhare />
       <Actualites />
       <QualiopiCertification />
       <PartnersCarousel />
      </main>
      <Footer />
    </div>
  );
}