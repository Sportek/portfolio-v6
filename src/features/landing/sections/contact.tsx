import { Button } from "@/features/shared/components/ui/button";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <HorizontalSpacing id="contact">
      <div className="flex flex-col justify-center items-center gap-10 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg font-bold text-green-500">WHAT&apos;S NEXT?</div>
          <div className="text-4xl md:text-5xl font-bold text-center">GET IN TOUCH</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* FIRST COLUMN */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5">
            {/* Let's work together refonte */}
            <div className="relative flex flex-col gap-6 bg-gradient-to-br from-[#2d1a0b] to-[#1a0d05] rounded-xl p-6 md:p-8 border border-orange-400 text-white shadow-lg overflow-hidden">
              <div className="text-2xl md:text-3xl font-extrabold mb-1">Let&apos;s work together</div>
              <div className="h-1 w-16 bg-white/60 rounded mb-2" />
              <div className="text-sm md:text-base font-normal mb-4">
                I&apos;m always happy to work on new projects. Whether you have a specific idea in mind, or would simply
                like to discuss your requirements, please don&apos;t hesitate to contact me.
              </div>
              <Link
                href="#projects"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-orange-900 hover:bg-orange-800 text-white font-semibold rounded-full py-3 px-6 text-sm md:text-base transition shadow-md"
              >
                <Eye size={20} className="text-white" />
                More about my projects
              </Link>
            </div>

            {/* Social networks */}
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[#1e2746] via-[#2e1e46] to-[#1e2746] rounded-xl p-6 md:p-8 shadow-lg border border-white/10">
              <div className="text-2xl md:text-4xl font-extrabold text-white text-center tracking-wide uppercase mb-2">
                SOCIAL NETWORKS
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
                href="/cv.pdf"
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
                DOWNLOAD MY CURRICULUM VITAE
              </a>
            </div>
          </div>

          {/* SECOND COLUMN : formulaire Need a quote? */}
          <div className="flex flex-col gap-6 bg-gradient-to-br from-[#232733] to-[#181a20] rounded-xl p-6 md:p-8 w-full lg:w-3/5 border border-white/10 shadow-lg">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Need more information?</div>
            <div className="h-1 w-full bg-white/40 rounded mb-2" />
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-white/80 font-semibold text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-white/80 font-semibold text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Mail"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-white/80 font-semibold text-sm">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Your Title"
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-white/80 font-semibold text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="rounded-xl px-4 py-3 bg-white text-black placeholder:text-gray-400 outline-none border-none resize-none"
                />
              </div>
              <Button>SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </div>
    </HorizontalSpacing>
  );
};

export default Contact;
