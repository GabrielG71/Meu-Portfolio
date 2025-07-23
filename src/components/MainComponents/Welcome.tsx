import Image from "next/image";

export default function Welcome() {
  return (
    <section className="bg-[#0e1117] min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Desenvolvedor
              </span>
              <br />
              <span className="text-white">Full-Stack</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              Desenvolvimento web moderno com foco em performance,
              escalabilidade e experiência do usuário.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
              React
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
              Next.js
            </span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
              Node.js
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm border border-indigo-500/30">
              Laravel
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
              Vue.js
            </span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">
              MySQL
            </span>
            <span className="px-3 py-1 bg-slate-500/20 text-slate-400 rounded-full text-sm border border-slate-500/30">
              Docker
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 scale-110"></div>

            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
              <Image
                src="/images/Gabriel.png"
                alt="Gabriel Gonçalves - Desenvolvedor Full-Stack"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
