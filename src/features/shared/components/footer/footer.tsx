"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex flex-col justify-center items-center gap-4 py-10">
        <Image src="/logo.svg" width={50} height={50} alt="Logo" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500">© 2025 Gabriel Landry. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Design by a friend from{" "}
            <Link
              href="https://identiq.agency/"
              target="_blank"
              className="text-blue-600 hover:text-blue-500 transition-colors font-bold ease-in-out duration-150"
            >
              Identiq Agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
