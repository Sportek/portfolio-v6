"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface MobileMenuProps {
  children: ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        id="mobile-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden`}
      >
        {children}
      </nav>
    </>
  );
};
