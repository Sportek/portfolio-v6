"use client";

import { sendContactEmail } from "@/features/email/utils/send-email";
import { Button } from "@/features/shared/components/ui/button";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendContactEmail(formData.name, formData.email, formData.title, formData.message);
      setFormData({ name: "", email: "", title: "", message: "" });
      toast.success("Votre message a été envoyé avec succès !");
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
      console.error("Erreur d'envoi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <HorizontalSpacing id="contact">
      <div className="flex flex-col justify-center items-center gap-10 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg font-bold text-green-500">ET MAINTENANT ?</div>
          <div className="text-4xl md:text-5xl font-bold text-center">ENTRONS EN CONTACT</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* FIRST COLUMN */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5">
            {/* Let's work together refonte */}
            <div className="relative flex flex-col gap-6 bg-gradient-to-br from-[#2d1a0b] to-[#1a0d05] rounded-xl p-6 md:p-8 border border-orange-400 text-white shadow-lg overflow-hidden">
              <div className="text-2xl md:text-3xl font-extrabold mb-1">Travaillons ensemble</div>
              <div className="h-1 w-16 bg-white/60 rounded mb-2" />
              <div className="text-sm md:text-base font-normal mb-4">
                Je suis toujours heureux de travailler sur de nouveaux projets. Que vous ayez une idée spécifique en
                tête, ou que vous souhaitiez simplement discuter de vos besoins, n&apos;hésitez pas à me contacter.
              </div>
              <Link
                href="#projects"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-orange-900 hover:bg-orange-800 text-white font-semibold rounded-full py-3 px-6 text-sm md:text-base transition shadow-md"
              >
                <Eye size={20} className="text-white" />
                En savoir plus sur mes projets
              </Link>
            </div>

            {/* Social networks */}
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[#1e2746] via-[#2e1e46] to-[#1e2746] rounded-xl p-6 md:p-8 shadow-lg border border-white/10">
              <div className="text-2xl md:text-4xl font-extrabold text-white text-center tracking-wide uppercase mb-2">
                RÉSEAUX SOCIAUX
              </div>
              <div className="flex flex-row justify-center items-center gap-4 md:gap-8 mb-2">
                <Link href="https://discord.gg/gablandry" target="_blank">
                  <Image
                    src="/icons/ic_baseline-discord.svg"
                    alt="Discord"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-[54px] md:h-[54px] opacity-80 hover:opacity-100 transition"
                  />
                </Link>
                <Link href="https://www.github.com/gablandry/" target="_blank">
                  <Image
                    src="/icons/mdi_github.svg"
                    alt="Github"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-[54px] md:h-[54px] opacity-80 hover:opacity-100 transition"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/gablandry/" target="_blank">
                  <Image
                    src="/icons/mdi_linkedin.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-[54px] md:h-[54px] opacity-80 hover:opacity-100 transition"
                  />
                </Link>
                <Link href="https://www.instagram.com/gablandry/" target="_blank">
                  <Image
                    src="/icons/mdi_instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-[54px] md:h-[54px] opacity-80 hover:opacity-100 transition"
                  />
                </Link>
              </div>
              <a
                href="/Gabriel_Landry_CV_FR.pdf"
                download
                className="mt-2 w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full py-3 px-6 text-sm md:text-base transition shadow-md backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 16.5a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v10.5a1 1 0 0 1-1 1Z" />
                  <path
                    fill="currentColor"
                    d="M7.21 13.71a1 1 0 0 1 1.42-1.42l2.29 2.3 2.3-2.3a1 1 0 1 1 1.41 1.42l-3 3a1 1 0 0 1-1.42 0l-3-3Z"
                  />
                  <path fill="currentColor" d="M18 19a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2h12Z" />
                </svg>
                TÉLÉCHARGER MON CV
              </a>
            </div>
          </div>

          {/* SECOND COLUMN : formulaire Need a quote? */}
          <div className="flex flex-col gap-6 bg-gradient-to-br from-[#232733] to-[#181a20] rounded-xl p-6 md:p-8 w-full lg:w-3/5 border border-white/10 shadow-lg">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
              Besoin de plus d&apos;informations ?
            </div>
            <div className="h-1 w-full bg-white/40 rounded mb-2" />
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-white/80 font-semibold text-sm">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre Nom"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-white/80 font-semibold text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Votre Email"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-white/80 font-semibold text-sm">
                  Titre
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Votre Titre"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-white/80 font-semibold text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Votre Message"
                  rows={4}
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "ENVOI EN COURS..." : "ENVOYER"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </HorizontalSpacing>
  );
};

export default Contact;
