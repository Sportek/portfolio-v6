import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <HorizontalSpacing>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg font-bold text-green-500">WHAT&apos;S NEXT?</div>
          <div className="text-5xl font-bold">GET IN TOUCH</div>
        </div>

        <div className="flex flex-row gap-4">
          {/* FIRST COLUMN */}
          <div className="flex flex-col gap-4 w-2/5">
            {/* Let's work together */}
            <div className="flex flex-col gap-2 bg-gradient-to-br from-orange-700 to-orange-950 rounded-lg p-8 border-2 border-orange-500">
              <div className="text-4xl font-semibold">Let&apos;s work together</div>
              <div>
                I&apos;m always happy to work on new projects. Whether you have a specific idea in mind, or would simply
                like to discuss your requirements, please don&apos;t hesitate to contact me.
              </div>
              <div>
                <div>More about my projects</div>
              </div>
            </div>

            {/* Social networks */}
            <div className="flex flex-col gap-2 bg-red-500 rounded-lg p-8">
              <div className="text-4xl font-semibold">SOCIAL NETWORKS</div>
              <div className="flex flex-row w-full justify-between">
                <Link href="https://www.linkedin.com/in/gablandry/" target="_blank">
                  <Image src="/icons/mdi_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href="https://discord.gg/gablandry" target="_blank">
                  <Image src="/icons/ic_baseline-discord.svg" alt="Discord" width={24} height={24} />
                </Link>
                <Link href="https://www.github.com/gablandry/" target="_blank">
                  <Image src="/icons/mdi_github.svg" alt="Github" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className="flex flex-col gap-2 bg-gradient-to-l from-gray-900 to-gray-700 rounded-lg p-8 w-3/5">
            <div className="text-4xl font-semibold">Need more information?</div>
            <hr className="border-1 border-gray-500" />
            <div>{/* TODO: Ajouter le formulaire de contact */}</div>
          </div>
        </div>
      </div>
    </HorizontalSpacing>
  );
};

export default Contact;
