import Navbar from '@/components/Nav';
import Footer from "@/components/Footer";

export default function AProposPage() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar />
            <main>
                <section className="px-4 py-30 text-gray-900 min-h-screen">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-violet-800">La Grande Classe</h1>
                        <p className="text-lg md:text-xl mb-12">
                            Fondée en 2008, La Grande Classe s&apos;engage à rendre l&apos;éducation et la formation accessibles à tous.
                            Notre mission est de permettre à chaque jeune d&apos;acquérir des compétences solides pour entrer sur le marché
                            du travail avec confiance et ambition.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold mb-6 text-violet-800">Pourquoi choisir La Grande Classe ?</h2>
                            <ul className="space-y-4">
                                {[
                                    {
                                        title: "Un accompagnement personnalisé",
                                        content: "Nous vous guidons à chaque étape, de la recherche d'une entreprise à l'obtention de votre diplôme.",
                                    },
                                    {
                                        title: "Un réseau d'entreprises partenaires",
                                        content: "Nous facilitons votre insertion professionnelle grâce à nos collaborations avec des entreprises locales et nationales.",
                                    },
                                    {
                                        title: "Une continuité des parcours",
                                        content: "Nous vous accompagnons de l'enseignement secondaire jusqu'en BTS pour vous permettre d'aller au plus loin de vos ambitions.",
                                    },
                                    {
                                        title: "Une approche globale",
                                        content: "Nous veillons à votre bien-être en vous proposant un repas équilibré quotidien, en encourageant la pratique sportive, et en organisant des voyages à l'étranger pour enrichir votre expérience culturelle.",
                                    },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="checkmark mt-1" />
                                        <span>
                                            <strong>{item.title} :</strong> {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-center">
                            <blockquote className="text-xl italic text-gray-700 mb-4 animate-pulse">
                                &quot;L&apos;alternance est pour nous la voie royale de l&apos;apprentissage.&quot;
                            </blockquote>
                            <p className="text-lg font-medium text-gray-800">
                                Nous vous donnons les clés pour réussir et aller toujours plus loin !
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
