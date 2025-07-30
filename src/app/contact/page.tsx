import Navbar from '@/components/Nav'
import Footer from "@/components/Footer";


export default function ContactPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-200 py-30 px-4 sm:px-8 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-violet-800 mb-4">Nous contacter</h1>
                    <p className="text-gray-600 text-lg mb-12">
                        Une question, un besoin d'information ? Notre équipe est là pour vous accompagner.
                    </p>

                    <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Nom</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Prénom</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Âge</label>
                                <input type="number" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 font-medium mb-1">Adresse</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Date de naissance</label>
                                <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Pays de naissance</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Nationalité</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Numéro de téléphone</label>
                                <input type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 font-medium mb-1">Formation</label>
                                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400">
                                    <option value="" disabled>Choisissez une formation</option>
                                    <option value="HCR">Formation HCR</option>
                                    <option value="PSR">Formation PSR</option>
                                    <option value="AEPE">Formation AEPE</option>
                                    <option value="CDA">Formation CDA</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-violet-400 text-white py-3 rounded-xl font-semibold hover:bg-violet-800 transition duration-300 cursor-pointer tracking-widest"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}