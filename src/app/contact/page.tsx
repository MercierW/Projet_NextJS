'use client';

import { useState } from 'react';
import Navbar from '@/components/Nav';
import Footer from "@/components/Footer";
import Google_map from '@/components/Google_map';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    email: '',
    adresse: '',
    naissance: '',
    pays: '',
    nationalite: '',
    telephone: '',
    formation: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('Message envoyé avec succès !');
      setFormData({
        nom: '', prenom: '', age: '', email: '', adresse: '', naissance: '',
        pays: '', nationalite: '', telephone: '', formation: '',
      });
    } else {
      setStatus('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-200 py-30 px-4 sm:px-8 lg:px-24">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-violet-800 mb-4">Nous contacter</h1>
          <p className="text-gray-600 text-lg mb-12">
            Une question, un besoin d'information ? Notre équipe est là pour vous accompagner.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Nom</label>
                <input name="nom" value={formData.nom} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Prénom</label>
                <input name="prenom" value={formData.prenom} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Âge</label>
                <input name="age" value={formData.age} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Adresse</label>
                <input name="adresse" value={formData.adresse} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date de naissance</label>
                <input name="naissance" value={formData.naissance} onChange={handleChange} type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Pays de naissance</label>
                <input name="pays" value={formData.pays} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Nationalité</label>
                <input name="nationalite" value={formData.nationalite} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Numéro de téléphone</label>
                <input name="telephone" value={formData.telephone} onChange={handleChange} type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Formation</label>
                <select name="formation" value={formData.formation} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-violet-400 focus:outline-none" required>
                  <option value="">Choisissez une formation</option>
                  <option value="HCR">Formation HCR</option>
                  <option value="PSR">Formation PSR</option>
                  <option value="AEPE">Formation AEPE</option>
                  <option value="CDA">Formation CDA</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-400 text-white py-3 rounded-xl font-semibold hover:bg-violet-800 transition duration-300 tracking-widest cursor-pointer"
            >
              Envoyer
            </button>
            {status && <p className="text-center text-sm mt-4 text-gray-700">{status}</p>}
          </form>
        </section>
        <Google_map />
      </main>
      <Footer />
    </div>
  );
}
