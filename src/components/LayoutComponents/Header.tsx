"use client";

import Divider from "../SubComponents/Divider";
import Link from "next/link";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0e1117] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:scale-105 transition-transform"
          >
            Gabriel Gonçalves
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-base font-medium">
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                Início
              </Link>
              <Link
                href="#sobre"
                className="hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                Sobre mim
              </Link>
              <Link
                href="https://github.com/GabrielG71?tab=repositories"
                target="_blank"
                className="hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                Projetos
              </Link>
            </div>

            <div className="flex items-center space-x-4 pl-6 border-l border-gray-600">
              <a
                href="https://www.linkedin.com/in/gabriel-gonçalves-554a41311/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl hover:text-blue-400" />
              </a>
              <a
                href="https://github.com/GabrielG71"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/20 hover:text-purple-500 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl hover:text-purple-400" />
              </a>
              <a
                href="https://wa.me/5518998005937"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-green-500/20 transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-xl hover:text-green-400" />
              </a>
            </div>

            <a
              href="/Curriculo-Gabriel-Goncalves.pdf"
              download
              className="ml-6 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Baixar CV
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-2 space-y-1 border-t border-gray-700">
            <Link
              href="#inicio"
              className="block py-2 px-4 text-sm hover:text-purple-400 hover:bg-gray-800/40 rounded-md transition-all duration-200"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="block py-2 px-4 text-sm hover:text-purple-400 hover:bg-gray-800/40 rounded-md transition-all duration-200"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="block py-2 px-4 text-sm hover:text-purple-400 hover:bg-gray-800/40 rounded-md transition-all duration-200"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              href="#projetos"
              className="block py-2 px-4 text-sm hover:text-purple-400 hover:bg-gray-800/40 rounded-md transition-all duration-200"
              onClick={closeMenu}
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="block py-2 px-4 text-sm hover:text-purple-400 hover:bg-gray-800/40 rounded-md transition-all duration-200"
              onClick={closeMenu}
            >
              Contato
            </Link>

            <div className="flex justify-center space-x-4 py-3 border-t border-gray-700/50 mt-2">
              <a
                href="https://www.linkedin.com/in/gabriel-gonçalves-554a41311/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-blue-500/20 transition-all duration-200"
              >
                <FaLinkedin className="text-lg text-blue-400" />
              </a>
              <a
                href="https://github.com/GabrielG71"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/20 transition-all duration-200"
              >
                <FaGithub className="text-lg text-purple-400" />
              </a>
              <a
                href="https://wa.me/5518998005937"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-green-500/20 transition-all duration-200"
              >
                <FaWhatsapp className="text-lg text-green-400" />
              </a>
            </div>

            <div className="px-4 pb-3">
              <a
                href="/Curriculo-Gabriel-Goncalves.pdf"
                download
                className="block w-full text-center py-2 px-4 text-sm rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                onClick={closeMenu}
              >
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </header>
  );
}
