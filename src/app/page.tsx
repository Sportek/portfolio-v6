import Contact from "@/features/landing/sections/contact";
import Presentation from "@/features/landing/sections/presentation";
import Projects from "@/features/landing/sections/projects";
import Reviews from "@/features/landing/sections/reviews";
import Footer from "@/features/shared/components/footer/footer";
import Header from "@/features/shared/components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Presentation />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
