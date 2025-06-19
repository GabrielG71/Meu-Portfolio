<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gabriel Gonçalves
            </span>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center space-x-8">
              <a href="#inicio" class="hover:text-blue-400 transition-colors">Início</a>
              <a href="#sobre" class="hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#servicos" class="hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#projetos" class="hover:text-blue-400 transition-colors">Projetos</a>
              <a href="#contato" class="hover:text-blue-400 transition-colors">Contato</a>
              <Link 
                :href="route('login')" 
                class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Login
              </Link>
              <Link 
                :href="route('register')" 
                class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Registrar
              </Link>
            </div>
          </div>
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-300 hover:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800/95 backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#inicio" class="block px-3 py-2 hover:text-blue-400 transition-colors">Início</a>
          <a href="#sobre" class="block px-3 py-2 hover:text-blue-400 transition-colors">Sobre</a>
          <a href="#servicos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Serviços</a>
          <a href="#projetos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Projetos</a>
          <a href="#contato" class="block px-3 py-2 hover:text-blue-400 transition-colors">Contato</a>
          <Link 
            :href="route('login')" 
            class="block px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-center mt-2"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>

    <!-- Hero Carousel -->
    <section id="inicio" class="relative h-screen overflow-hidden">
      <div class="absolute inset-0">
        <img 
          :src="slides[currentSlide].image" 
          :alt="slides[currentSlide].title"
          class="w-full h-full object-cover transition-all duration-1000"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="relative h-full flex items-center justify-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {{ slides[currentSlide].title }}
          </h1>
          <h2 class="text-xl md:text-2xl text-gray-300 mb-6">
            {{ slides[currentSlide].subtitle }}
          </h2>
          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {{ slides[currentSlide].description }}
          </p>
          <button class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
            {{ slides[currentSlide].buttonText }}
          </button>
        </div>
      </div>

      <!-- Carousel Navigation -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          @click="currentSlide = index"
          :class="['w-3 h-3 rounded-full transition-all', currentSlide === index ? 'bg-blue-500' : 'bg-gray-400']"
        ></button>
      </div>

      <!-- Auto-advance arrows -->
      <button 
        @click="previousSlide" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button 
        @click="nextSlide" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </section>

    <!-- About Section -->
    <section id="sobre" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Sobre mim
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-300 mb-6 leading-relaxed">
              Olá! Sou Gabriel Gonçalves, tenho 18 anos e atualmente curso Análise e Desenvolvimento de Sistemas na Fatec de Ourinhos. Mesmo em início de carreira, já desenvolvi diversos projetos que você pode conferir aqui no site — todos feitos com atenção aos detalhes, segurança e foco no cliente.
            </p>
            <p class="text-lg text-gray-300 mb-6 leading-relaxed">
              Tenho paixão por desenvolvimento web e por tudo que envolve esse universo. Meu foco principal é o PHP com o framework Laravel, mas também estou me especializando em JavaScript e seus frameworks modernos, buscando sempre evoluir em front-end e back-end.
            </p>
            <p class="text-lg text-gray-300 mb-6 leading-relaxed">
              Além do desenvolvimento, estudo com profundidade segurança da informação, hashing e criptografia, sempre aplicando boas práticas para proteger dados e sistemas. Também tenho afinidade com DevOps e deploys, o que me permite entregar projetos completos: do código à publicação do site na web, com segurança e performance.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Se você procura um profissional dedicado, que busca crescer junto com seus clientes e entregar soluções sólidas por um valor justo, estou pronto para começar.
            </p>
          </div>
          
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <img 
                src="/images/Gabriel.png" 
                alt="Gabriel Gonçalves - Desenvolvedor Web"
                class="relative w-80 h-80 object-cover rounded-2xl border-2 border-gray-600 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="py-20 bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Meus Serviços</h2>
          <p class="text-xl text-gray-400">Soluções completas para suas necessidades digitais</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors group">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Desenvolvimento Web</h3>
            <p class="text-gray-400">
              Desenvolvimento de sites e sistemas web personalizados utilizando Laravel e tecnologias modernas. Código limpo, escalável e com foco em boa performance e experiência do usuário.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-purple-500 transition-colors group">
            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Segurança de Sistemas</h3>
            <p class="text-gray-400">
              Implementação de práticas de segurança, incluindo hashing, criptografia, proteção contra ataques comuns e validações seguras para garantir a integridade e proteção dos dados.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-green-500 transition-colors group">
            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">DevOps & Deploy</h3>
            <p class="text-gray-400">
              Configuração e gerenciamento de deploys para ambientes de produção. Automatização, hospedagem, integração com Git e aplicação de boas práticas de DevOps.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors group">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Pacote Completo</h3>
            <p class="text-gray-400">
              Para quem busca uma solução completa: desenvolvimento front e back-end, segurança robusta e deploy funcional. Ideal para quem quer o site pronto para uso sem se preocupar com partes técnicas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projetos" class="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
        </div>
        
        <div class="text-center">
          <button class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
            Ver Portfólio Completo
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-20 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p class="text-xl text-gray-400">Estou pronto para transformar sua ideia em realidade</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Como posso ajudar?"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
              <textarea 
                rows="5" 
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Conte-me sobre seu projeto..."
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 border-t border-gray-700 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Gabriel Gonçalves
          </div>
          <p class="text-gray-400 mb-4">
            Desenvolvedor em ascensão • Análise e Desenvolvimento de Sistemas • Fatec Ourinhos
          </p>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-700">
            <p class="text-gray-500 text-sm">
              © 2025 Gabriel Gonçalves. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

// Carousel data
const slides = ref([
  {
    title: 'Desenvolvedor em Ascensão',
    subtitle: 'Começando com dedicação total',
    description: 'Embora eu esteja no início da carreira, já venho estudando e me preparando intensamente para oferecer soluções de qualidade. Cada projeto é uma chance de mostrar meu comprometimento com o resultado.',
    buttonText: 'Veja meus Projetos',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8d92d296ec?w=800&h=600&fit=crop'
  },
  {
    title: 'Conhecimento Atualizado',
    subtitle: 'Sempre estudando o que há de mais moderno',
    description: 'Mesmo no início da jornada, busco estar sempre alinhado com as melhores práticas e tecnologias do mercado, como Laravel, Vue.js, Tailwind e mais.',
    buttonText: 'Saiba mais sobre mim',
    image: 'https://images.unsplash.com/photo-1584697964154-5c1d7e9a24fd?w=800&h=600&fit=crop'
  },
  {
    title: 'Qualidade com Preço Acessível',
    subtitle: 'Soluções sob medida e investimento justo',
    description: 'Como iniciante na área de entregas, ofereço um valor mais acessível para quem busca soluções digitais com qualidade, atenção aos detalhes e um atendimento próximo.',
    buttonText: 'Solicitar Orçamento',
    image: 'https://images.unsplash.com/photo-1600880291928-c0e67f7c1a49?w=800&h=600&fit=crop'
  }
])

const currentSlide = ref(0)
const mobileMenuOpen = ref(false)
let slideInterval = null

// Carousel methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const startSlideshow = () => {
  slideInterval = setInterval(nextSlide, 5000)
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

// Lifecycle
onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  stopSlideshow()
})
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4f46e5; /* roxo do Tailwind */
  border-radius: 4px;
}

</style>