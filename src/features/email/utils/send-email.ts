"use server";

import { Resend } from "resend";
import { ContactEmail } from "../components/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, react: React.ReactNode) => {
  const { data, error } = await resend.emails.send({
    from: "Portfolio <gabriel@minecraft-stats.fr>",
    to: [to],
    subject: subject,
    react: react,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const sendContactEmail = async (name: string, email: string, title: string, message: string) => {
  return sendEmail(
    "gablandry31@gmail.com",
    "Nouvelle demande de contact",
    await ContactEmail({ name, email, title, message })
  );
};
