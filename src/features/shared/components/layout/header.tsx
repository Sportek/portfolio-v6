import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="text-sm font-medium hover:text-primary" href="/">
            Accueil
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="/about">
            À propos
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="/contact">
            Contact
          </Link>
        </nav>
        <nav className="ml-auto flex items-center gap-4">
          <Link className="text-sm font-medium hover:text-primary " href="/auth/login">
            Login
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="/auth/register">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
