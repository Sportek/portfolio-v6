"use client";

import Image from "next/image";
import Link from "next/link";
import HorizontalSpacing from "../ui/horizontal-spacing";

const navLinks = [
  { href: "/", label: "À PROPOS" },
  // { href: "/blog", label: "BLOG" },
  // { href: "/auth/login", label: "LOGIN" },
  // { href: "/auth/register", label: "REGISTER" },
];

const Header = () => {
  return (
    <header className="w-full fixed z-20">
      <HorizontalSpacing>
        <div className="pt-4 flex flex-row justify-end md:justify-between w-full">
          <Link
            href="/"
            className="bg-gradient-to-t from-zinc-950 to-zinc-800 px-8 py-2 rounded-full font-bold text-lg border border-zinc-800 hidden md:flex items-center gap-2"
          >
            <Image src="/logo.svg" alt="Logo" width={24} height={24} priority />
            GABRIEL LANDRY
          </Link>
          <div className="bg-gradient-to-t from-zinc-950 to-zinc-800 px-8 py-2 rounded-full font-bold text-lg border border-zinc-800 flex flex-row gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </HorizontalSpacing>
    </header>
  );
};

export default Header;
