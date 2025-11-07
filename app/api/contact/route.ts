import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur d'e-mail
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true pour 465, false pour les autres ports TLS
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

/**
 * Gère la requête POST pour l'envoi du formulaire de contact.
 */
export async function POST(request: Request) {
    // Vérification basique des variables d'environnement
    if (!process.env.CONTACT_EMAIL_DESTINATION || !process.env.SMTP_EMAIL) {
        console.error("Erreur de configuration: Les variables SMTP et/ou CONTACT_EMAIL_DESTINATION ne sont pas définies.");
        return NextResponse.json({ message: "Erreur de configuration serveur." }, { status: 500 });
    }

    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Validation des données (simple)
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Veuillez remplir tous les champs requis.' }, { status: 400 });
        }

        // 1. Définition du contenu de l'e-mail
        const mailOptions = {
            from: `"${name} (via ANPIR site)" <${process.env.SMTP_EMAIL}>`,
            to: process.env.CONTACT_EMAIL_DESTINATION,
            replyTo: email, // Permet de répondre directement à l'expéditeur
            subject: `[Site ANPIR] Nouveau message : ${subject || 'Demande de contact générale'}`,

            // Contenu en texte brut
            text: `De: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,

            // Contenu en HTML pour un meilleur affichage
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #1e40af;">Nouveau message du formulaire de contact ANPIR</h2>
          <p><strong>Objet:</strong> ${subject || 'Demande de contact générale'}</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb;">
          <p><strong>Nom de l'expéditeur :</strong> ${name}</p>
          <p><strong>Email de contact :</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb;">
          <h3 style="color: #374151;">Message :</h3>
          <p style="white-space: pre-wrap; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">${message}</p>
          <p style="margin-top: 20px; font-size: 0.8em; color: #6b7280;">Ceci est un message automatique envoyé depuis le site web de l'ANPIR.</p>
        </div>
      `,
        };

        // 2. Envoi de l'e-mail
        await transporter.sendMail(mailOptions);

        // 3. Réponse au client
        return NextResponse.json({ message: 'E-mail envoyé avec succès.' }, { status: 200 });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        // Dans un environnement de production, masquer les détails de l'erreur
        return NextResponse.json({ message: 'Échec de l\'envoi de l\'e-mail interne.' }, { status: 500 });
    }
}