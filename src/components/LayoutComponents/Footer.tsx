import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1117] text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
              Gabriel Gonçalves
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor FullStack • Análise e Desenvolvimento de Sistemas •
              Fatec Ourinhos
            </p>
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a
              href="https://www.linkedin.com/in/gabriel-gonçalves-554a41311/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-700/30 p-4 sm:p-5 rounded-2xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <FaLinkedin className="text-white text-2xl sm:text-3xl group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/GabrielG71"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-700/30 p-4 sm:p-5 rounded-2xl hover:bg-gray-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <FaGithub className="text-white text-2xl sm:text-3xl group-hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a
              href="https://wa.me/5518998005937"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-700/30 p-4 sm:p-5 rounded-2xl hover:bg-green-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
            >
              <FaWhatsapp className="text-white text-2xl sm:text-3xl group-hover:text-green-400 transition-colors duration-300" />
            </a>
          </div>

          <div className="relative">
            <hr className="border-t border-gray-700 mx-auto w-full max-w-md" />
            <div className="absolute inset-0 flex justify-center">
              <div className="bg-[#0e1117] px-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm sm:text-base text-gray-500">
              © {new Date().getFullYear()} Gabriel Gonçalves. Todos os direitos
              reservados.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Desenvolvido com ❤️ usando Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
