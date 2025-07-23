"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">MeuSite</Link>
        </h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">
            Início
          </Link>
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
