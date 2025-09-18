import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSimple() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                nom: '',
                prenom: '',
                email: '',
                telephone: '',
                message: '',
            });
        } else {
            setStatus('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    const getStatusClass = () => {
        if (status.includes('succès')) return 'bg-green-100 text-green-700 border border-green-200';
        if (status.includes('erreur')) return 'bg-red-100 text-red-700 border border-red-200';
        return 'bg-blue-100 text-blue-700 border border-blue-200';
    };

    return (
        <section className="max-w-2xl mx-auto">
                <div className="absolute inset-0 overflow-hidden z-0">
                    <motion.div
                    className="absolute top-10 left-4 w-40 h-40 bg-blue-100 rounded-full opacity-70"
                    animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute bottom-16 left-10 w-32 h-32 bg-green-100 rounded-full opacity-70"
                    animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute top-28 right-20 w-28 h-28 bg-red-100 rounded-full opacity-70"
                    animate={{ x: [0, 15, 0], y: [0, -35, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute top-10 right-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-70"
                    animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute bottom-10 right-10 w-48 h-48 bg-green-100 rounded-full opacity-70"
                    animate={{ x: [0, 18, 0], y: [0, -28, 0] }}
                    transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute top-2/3 left-5 w-24 h-24 bg-red-100 rounded-full opacity-70"
                    animate={{ x: [0, -12, 0], y: [0, 22, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute top-1/4 right-2 w-36 h-36 bg-blue-100 rounded-full opacity-70"
                    animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                    className="absolute top-10 left-1/3 w-20 h-20 bg-green-100 rounded-full opacity-70"
                    animate={{ x: [0, -10, 0], y: [0, 26, 0] }}
                    transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
                    />
            </div>
            <h1 className="text-4xl font-bold text-violet-800 mb-4">Contactez-nous</h1>
            <p className="text-gray-600 text-lg mb-12">
                Envoyez-nous un message, nous vous répondrons dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Nom */}
                    <div className="relative">
                        <input
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            type="text"
                            id="nom"
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200"
                            required
                        />
                        <label
                            htmlFor="nom"
                            className="absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                                     peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
                                     peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400"
                        >
                            Nom
                        </label>
                    </div>

                    {/* Prénom */}
                    <div className="relative">
                        <input
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            type="text"
                            id="prenom"
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200"
                            required
                        />
                        <label
                            htmlFor="prenom"
                            className="absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                                     peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
                                     peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400"
                        >
                            Prénom
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative md:col-span-2">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                                     peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
                                     peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400"
                        >
                            Email
                        </label>
                    </div>

                    {/* Téléphone */}
                    <div className="relative md:col-span-2">
                        <input
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            type="tel"
                            id="telephone"
                            placeholder=" "
                            pattern="[0-9\s\-\+\(\)]+"
                            className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200"
                        />
                        <label
                            htmlFor="telephone"
                            className="absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                                     peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
                                     peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400"
                        >
                            Numéro de téléphone
                        </label>
                    </div>

                    {/* Message - Textarea */}
                    <div className="relative md:col-span-2">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            id="message"
                            placeholder=" "
                            rows={5}
                            className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200 resize-none"
                            required
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                                     peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
                                     peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400"
                        >
                            Votre message
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-400 text-white py-3 rounded-xl font-semibold hover:bg-violet-500 transition duration-300 tracking-widest cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Envoyer le message
                </button>

                {status && (
                    <div className={`text-center text-sm mt-4 p-3 rounded-xl ${getStatusClass()}`}>
                        {status}
                    </div>
                )}
            </form>
        </section>
    );
}