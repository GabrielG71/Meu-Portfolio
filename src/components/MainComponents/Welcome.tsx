import Image from "next/image";

export default function Welcome() {
  return (
    <section
      id="inicio"
      className="bg-[#0e1117] w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center m-0 p-0"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text block">
                  Desenvolvedor
                </span>
                <span className="text-white block">Full-Stack</span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Desenvolvimento web moderno com foco em performance,
                escalabilidade e experiência do usuário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/GabrielG71?tab=repositories"
                target="_blank"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Projetos
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Tecnologias
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
                  React
                </span>
                <span className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300">
                  Next.js
                </span>
                <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm border border-green-500/30 hover:bg-green-500/30 transition-colors duration-300">
                  Node.js
                </span>
                <span className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs sm:text-sm border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors duration-300">
                  TypeScript
                </span>
                <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-xs sm:text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors duration-300">
                  Laravel
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-xs sm:text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300">
                  Vue.js
                </span>
                <span className="px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-xs sm:text-sm border border-orange-500/30 hover:bg-orange-500/30 transition-colors duration-300">
                  MySQL
                </span>
                <span className="px-3 py-1.5 bg-slate-500/20 text-slate-400 rounded-full text-xs sm:text-sm border border-slate-500/30 hover:bg-slate-500/30 transition-colors duration-300">
                  Docker
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 scale-110 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"></div>
                <Image
                  src="/images/Gabriel.png"
                  alt="Gabriel Gonçalves - Desenvolvedor Full-Stack"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -bottom-4 -left-4 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-1/4 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-16">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center cursor-pointer hover:border-purple-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
