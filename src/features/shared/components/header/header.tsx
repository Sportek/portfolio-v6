"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const authLinks = [
  { href: "/auth/login", label: "Login" },
  { href: "/auth/register", label: "Register" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} priority />
          <span className="text-xl font-bold">Gabriel Landry</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth Links */}
        <nav className="hidden md:flex items-center gap-4">
          {authLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu */}
        <MobileMenu>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <div className="border-t border-border pt-4 mt-2">
              {authLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </MobileMenu>
      </div>
    </header>
  );
};

export default Header;
