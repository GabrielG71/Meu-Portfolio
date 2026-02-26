export default function About() {
  return (
    <section id="sobre" className="bg-[#0e1117] w-full py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Mim
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Olá! Sou{" "}
                <span className="text-blue-400 font-semibold">
                  Gabriel Gonçalves
                </span>
                , desenvolvedor de 18 anos apaixonado por tecnologia e inovação.
                Natural de Assis – SP, curso{" "}
                <span className="text-purple-400 font-semibold">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                na FATEC Ourinhos e atuo tanto em desenvolvimento web quanto em
                análise de dados.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                No{" "}
                <span className="text-blue-400 font-semibold">
                  desenvolvimento web
                </span>
                , tenho experiência com JavaScript/TypeScript, React, Next.js,
                Node.js e Express, além de bancos relacionais (PostgreSQL,
                MySQL) e NoSQL (MongoDB, Redis), aplicando Clean Code e
                arquitetura MVC em projetos práticos.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Na{" "}
                <span className="text-purple-400 font-semibold">
                  análise de dados
                </span>
                , trabalho com pipelines ETL/ELT, Python com Pandas, SQL, Azure,
                Databricks e visualização com Power BI e Excel. Tenho
                familiaridade com Docker, CI/CD e deploy em Vercel, além de
                interesse crescente em segurança da informação. Inglês{" "}
                <span className="text-green-400 font-semibold">
                  avançado B2
                </span>{" "}
                para comunicação técnica oral e escrita.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/GabrielG71?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ver Projetos</span>
                </a>

                <a
                  href="/Curriculo-Gabriel-Goncalves.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Baixar Currículo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Formação */}
            <div className="bg-gray-800/30 rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Formação Acadêmica
                </h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/fatec-logo.jpg"
                      alt="FATEC Ourinhos"
                      className="w-8 h-8 rounded object-contain bg-white p-1"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-400">
                        Análise e Desenvolvimento de Sistemas
                      </h4>
                      <p className="text-gray-400 text-sm">FATEC Ourinhos</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs ml-11">
                    Fev 2025 – Nov 2027
                  </p>
                  <p className="text-gray-400 text-xs mt-1 ml-11">
                    Python, Excel, PowerBI, Banco de Dados, Git e versionamento
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/coc-logo.jpg"
                      alt="COC"
                      className="w-8 h-8 rounded object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-400">
                        Ensino Médio Completo
                      </h4>
                      <p className="text-gray-400 text-sm">COC</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs ml-11">Concluído</p>
                </div>
              </div>
            </div>

            {/* Experiência */}
            <div className="bg-gray-800/30 rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-green-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Experiência Profissional
                </h3>
              </div>

              <div className="space-y-6">
                {/* AETA */}
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/aeta_logo.jpg"
                      alt="AETA"
                      className="w-8 h-8 rounded object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-400">
                        Desenvolvedor Backend
                      </h4>
                      <p className="text-gray-400 text-sm">AETA</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs ml-11">
                    Jan 2025 – Presente
                  </p>
                  <p className="text-gray-300 text-sm mt-2 ml-11">
                    Desenvolvimento de API REST para controle e administração
                    com Laravel e integração no sistema com TypeScript.
                  </p>
                </div>

                {/* Informática Ourinhos */}
                <div className="border-l-2 border-cyan-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/informatica_ourinhos_logo.jpg"
                      alt="Informática Ourinhos"
                      className="w-8 h-8 rounded object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-cyan-400">
                        Estagiário de TI
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Informática Ourinhos
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs ml-11">
                    Out 2025 – Nov 2025 · 2 meses
                  </p>
                  <p className="text-gray-300 text-sm mt-2 ml-11">
                    Desenvolvimento de planilhas com Excel e otimização e reparo
                    de hardwares físicos.
                  </p>
                </div>

                {/* AGI Brasil */}
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/agibrasil_logo.jpg"
                      alt="AGI Brasil"
                      className="w-8 h-8 rounded object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-green-400">
                        Estagiário – Área de Compras
                      </h4>
                      <p className="text-gray-400 text-sm">AGI Brasil</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs ml-11">
                    Abr 2024 – Set 2025 · 1 ano e 6 meses
                  </p>
                  <p className="text-gray-300 text-sm mt-2 ml-11">
                    Desenvolvimento de relatórios, criação e otimização de
                    planilhas e dashboards com Excel e Power BI.
                  </p>
                </div>
              </div>
            </div>

            {/* Idiomas */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                Idiomas
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  Português Nativo
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                  Inglês B2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
