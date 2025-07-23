"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-[#0e1117] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Gabriel Gonçalves
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#inicio" className="hover:text-purple-400 transition">
            Início
          </Link>
          <Link href="#sobre" className="hover:text-purple-400 transition">
            Sobre
          </Link>
          <Link href="#servicos" className="hover:text-purple-400 transition">
            Serviços
          </Link>
          <Link href="#projetos" className="hover:text-purple-400 transition">
            Projetos
          </Link>
          <Link href="#contato" className="hover:text-purple-400 transition">
            Contato
          </Link>

          <div className="flex items-center space-x-4 pl-4 border-l border-gray-600">
            <a
              href="https://www.linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a
              href="https://wa.me/seunumerowhats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-400" />
            </a>
          </div>

          <a
            href="/cv.pdf"
            download
            className="ml-4 px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            Baixar CV
          </a>
        </nav>
      </div>
    </header>
  );
}
