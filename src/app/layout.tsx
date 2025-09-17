import type { Metadata } from "next";
import { Geist, Geist_Mono, Matangi, Montserrat } from "next/font/google";
import "./globals.css";
import StructuredData from '../components/StructuredData';
import { SchemaOrgData } from '../types/schema';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const matangi = Matangi({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-matangi',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "LGC - La Grande Classe",
  description: "Site de formation la grande classe",
   manifest: 'favicon/site.webmanifest',
  icons: {
    icon: [
      { url: 'favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: 'favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema: SchemaOrgData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "La Grande Classe",
    "url": "https://www.lagrandeclasse.fr",
    "telephone": "+33140102722",
    "email": "contact@lagrandeclasse.fr",
    "description": "Centre de formation d'apprentis (CFA), organisme de formation (OF) et services éducatifs jeunesse proposant des formations professionnelles, alternance, ateliers d'anglais, soutien scolaire et garde d'enfant.",
    "sameAs": [
      "https://www.facebook.com",
      "https://fr.linkedin.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33140102722",
      "contactType": "customer service",
      "email": "contact@lagrandeclasse.fr",
      "hoursAvailable": "Mo-Fr 09:00-19:00",
      "availableLanguage": "Français"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Formations & Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "EducationalOccupationalProgram", "name": "Concepteur Développeur d'Application (TP CDA)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "CAP Commercialisation et Services en HCR" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "CAP Accompagnant Éducatif Petite Enfance (AEPE)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Ateliers d'anglais (Montessori)" } }
      ]
    },
    "location": [
      {
        "@type": "Place",
        "name": "Agence - Siège social (Saint-Ouen)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9, Rue de Saint-Denis",
          "addressLocality": "Saint-Ouen",
          "postalCode": "93400",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Place",
        "name": "Agence (Montreuil)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "51, Rue Gaston Lauriau",
          "addressLocality": "Montreuil",
          "postalCode": "93100",
          "addressCountry": "FR"
        }
      }
    ],
    "award": "Certification Qualiopi",
    "areaServed": "FR"
  };
  return (
    <html lang="fr">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} ${matangi.variable} antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
