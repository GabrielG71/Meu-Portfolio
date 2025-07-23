import "../styles/globals.css";
import Header from "@/components/LayoutComponents/Header";
import Footer from "@/components/LayoutComponents/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Meu Site",
  description: "Exemplo de site com Header e Footer em React + Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
