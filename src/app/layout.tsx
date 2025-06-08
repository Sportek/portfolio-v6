import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Gabriel Landry",
  description: "Portfolio de Gabriel Landry, développeur full stack passionné par la création de projets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(workSans.variable, "antialiased relative z-10")}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
