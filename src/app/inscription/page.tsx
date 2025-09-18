'use client';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import FormulaireInscription from '@/components/Formulaire_inscription';

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <main className="bg-gradient-to-br from-blue-50 to-violet-200 py-48 px-4 sm:px-8 lg:px-24">
        <FormulaireInscription />
      </main>
      <Footer />
    </div>
  );
}