import { useState } from 'react';
import { motion } from 'framer-motion';
import FormationSelect from './Selection_form_contact';
import { INITIAL_FORM_DATA, STATUS_MESSAGES, CSS_CLASSES } from '@/lib/formConstants';

export default function FormulaireContact() {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormationSelect = (value: string) => {
        setFormData((prev) => ({ ...prev, formation: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(STATUS_MESSAGES.LOADING);

        const res = await fetch('/api/inscription', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setStatus(STATUS_MESSAGES.SUCCESS);
            setFormData(INITIAL_FORM_DATA);
        } else {
            setStatus(STATUS_MESSAGES.ERROR);
        }
    };

    const getStatusClass = () => {
        if (status.includes('succès')) return CSS_CLASSES.STATUS_SUCCESS;
        if (status.includes('erreur')) return CSS_CLASSES.STATUS_ERROR;
        return CSS_CLASSES.STATUS_LOADING;
    };
    const [isFocused, setIsFocused] = useState(false);

    

    return (
        <section className="max-w-3xl mx-auto">
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
            <h1 className="text-4xl font-bold text-violet-800 mb-4">Inscription</h1>
            <p className="text-gray-600 text-lg mb-12">
                La première étape avant notre rencontre.
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
                            className={CSS_CLASSES.INPUT}
                            required
                        />
                        <label htmlFor="nom" className={CSS_CLASSES.LABEL}>
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
                            className={CSS_CLASSES.INPUT}
                            required
                        />
                        <label htmlFor="prenom" className={CSS_CLASSES.LABEL}>
                            Prénom
                        </label>
                    </div>

                    {/* Âge */}
                    <div className="relative">
                        <input
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            type="number"
                            id="age"
                            placeholder=" "
                            min="16"
                            max="100"
                            className={CSS_CLASSES.INPUT}
                        />
                        <label htmlFor="age" className={CSS_CLASSES.LABEL}>
                            Âge
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            placeholder=" "
                            className={CSS_CLASSES.INPUT}
                            required
                        />
                        <label htmlFor="email" className={CSS_CLASSES.LABEL}>
                            Email
                        </label>
                    </div>

                    {/* Adresse */}
                    <div className="relative md:col-span-2">
                        <input
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            type="text"
                            id="adresse"
                            placeholder=" "
                            className={CSS_CLASSES.INPUT}
                        />
                        <label htmlFor="adresse" className={CSS_CLASSES.LABEL}>
                            Adresse
                        </label>
                    </div>

                    {/* Date de naissance */}
                    <div className="relative">
                        <input
                            name="naissance"
                            value={formData.naissance}
                            onChange={handleChange}
                            type="date"
                            id="naissance"
                            className={CSS_CLASSES.INPUT}
                        />
                        <label 
                            htmlFor="naissance" 
                            className={`${CSS_CLASSES.LABEL_DATE} ${
                                formData.naissance || isFocused
                                    ? '-translate-y-6 scale-75 text-violet-400 top-0' 
                                    : 'top-3'
                            }`}
                        >
                            Date de naissance
                        </label>
                    </div>

                    {/* Pays de naissance */}
                    <div className="relative">
                        <input
                            name="pays"
                            value={formData.pays}
                            onChange={handleChange}
                            type="text"
                            id="pays"
                            placeholder=" "
                            className={CSS_CLASSES.INPUT}
                        />
                        <label htmlFor="pays" className={CSS_CLASSES.LABEL}>
                            Pays de naissance
                        </label>
                    </div>

                    {/* Nationalité */}
                    <div className="relative">
                        <input
                            name="nationalite"
                            value={formData.nationalite}
                            onChange={handleChange}
                            type="text"
                            id="nationalite"
                            placeholder=" "
                            className={CSS_CLASSES.INPUT}
                        />
                        <label htmlFor="nationalite" className={CSS_CLASSES.LABEL}>
                            Nationalité
                        </label>
                    </div>

                    {/* Téléphone */}
                    <div className="relative">
                        <input
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            type="tel"
                            id="telephone"
                            placeholder=" "
                            pattern="[0-9\s\-\.\+\(\)]+"
                            className={CSS_CLASSES.INPUT}
                        />
                        <label htmlFor="telephone" className={CSS_CLASSES.LABEL}>
                            Numéro de téléphone
                        </label>
                    </div>
                    
                    <FormationSelect value={formData.formation} onChange={handleFormationSelect} />
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-400 text-white py-3 rounded-xl font-semibold hover:bg-violet-500 transition duration-300 tracking-widest cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Envoyer ma demande
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