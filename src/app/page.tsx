import Footer from "@/features/shared/components/layout/footer";
import Header from "@/features/shared/components/layout/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
