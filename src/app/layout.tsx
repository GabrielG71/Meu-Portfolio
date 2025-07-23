import "../styles/globals.css";
import Header from "@/components/LayoutComponents/Header";
import Footer from "@/components/LayoutComponents/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Gabriel Gonçalves - Desenvolvedor Full-Stack",
  description:
    "Portfólio de Gabriel Gonçalves - Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e tecnologias modernas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#0e1117] text-gray-800 m-0 p-0">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
