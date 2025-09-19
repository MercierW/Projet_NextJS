import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const emailBody = `
    Nom : ${body.nom}
    Prénom : ${body.prenom}
    Âge : ${body.age}
    Email : ${body.email}
    Adresse : ${body.adresse}
    Date de naissance : ${body.naissance}
    Pays de naissance : ${body.pays}
    Nationalité : ${body.nationalite}
    Téléphone : ${body.telephone}
    Formation : ${body.formation}
  `;

  console.log('📩 Tentative d’envoi avec Resend...');

  try {
    const result = await resend.emails.send({
      from: `LGC <onboarding@resend.dev>`,
      to: 'pierre809865@gmail.com',
      subject: `Demande d'inscription`,
      text: emailBody,
    });

    console.log('✅ Email envoyé avec succès :', result);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Erreur lors de l’envoi :', err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
