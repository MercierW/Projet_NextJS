import Image from "next/image";
import Navbar from "@/components/nav";
import Carousel from "@/components/carousel";
import NosFormationsPhares from "@/components/formations_phares";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
       <Carousel />
       <NosFormationsPhares />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
