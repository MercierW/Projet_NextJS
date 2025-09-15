import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Actualites from "@/components/Actualites";
import PartnersCarousel from "@/components/Partners";
import QualiopiCertification from "@/components/Qualiopi";
import NosFormationsPhares from "@/components/Formations_phares";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
       <Hero />
       <Carousel />
       <NosFormationsPhares />
       <Actualites />
       <QualiopiCertification />
       <PartnersCarousel />
      </main>
      <Footer />
    </div>
  );
}