import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1117] text-gray-400 pt-10 pb-6 px-4 text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Gabriel Gonçalves
      </h2>

      <p className="mt-2 text-sm">
        Desenvolvedor FullStack • Análise e Desenvolvimento de Sistemas • Fatec
        Ourinhos
      </p>

      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600/30 p-3 rounded-full hover:bg-blue-500/30 transition"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600/30 p-3 rounded-full hover:bg-gray-400/30 transition"
        >
          <FaGithub className="text-white text-xl" />
        </a>
        <a
          href="https://wa.me/seunumerowhats"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600/30 p-3 rounded-full hover:bg-green-500/30 transition"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>

      <hr className="border-t border-gray-700 my-6 mx-auto w-3/4" />

      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Gabriel Gonçalves. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
