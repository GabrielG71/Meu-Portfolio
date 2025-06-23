<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Header @toggle-menu="toggleMobileMenu" />
    
    <!-- Menu Mobile -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800/95 backdrop-blur-sm mt-16">
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
          <Link 
            :href="route('projetos')" 
            class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            Ver Portfólio Completo
          </Link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-20 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Vamos Conversar?</h2>
          <p class="text-xl text-gray-400">Estou pronto para transformar sua ideia em realidade</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Formulário de Contato Rápido -->
          <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 class="text-2xl font-semibold mb-6 text-white">Contato Rápido</h3>
            <p class="text-gray-400 mb-6">Envie sua mensagem e receba resposta no seu e-mail</p>
            
            <form @submit.prevent="submitQuickContact" class="space-y-6">
              <div>
                <label for="quick_name" class="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  id="quick_name"
                  v-model="quickForm.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label for="quick_email" class="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  id="quick_email"
                  v-model="quickForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label for="quick_message" class="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="quick_message"
                  v-model="quickForm.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmittingQuick"
                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <span v-if="isSubmittingQuick">Enviando...</span>
                <span v-else>Enviar Mensagem</span>
              </button>
            </form>

            <!-- Mensagem de sucesso/erro -->
            <div v-if="quickMessage" class="mt-4 p-4 rounded-lg" :class="quickMessageType === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'">
              {{ quickMessage }}
            </div>
          </div>

          <!-- Experiência Completa -->
          <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 class="text-2xl font-semibold mb-6 text-white">Experiência Completa</h3>
            <p class="text-gray-400 mb-6">Acesse o dashboard para um contato mais detalhado e acompanhe o progresso do seu projeto</p>
            
            <div class="space-y-6">
              <div class="bg-gray-700 rounded-lg p-4">
                <h4 class="font-semibold text-white mb-2">✨ O que você terá:</h4>
                <ul class="text-gray-300 space-y-2 text-sm">
                  <li>• Mensagens diretas em tempo real</li>
                  <li>• Dashboard personalizado do projeto</li>
                  <li>• Histórico completo de conversas</li>
                  <li>• Acompanhamento de progresso</li>
                </ul>
              </div>

              <!-- Se não estiver logado -->
              <div v-if="!$page.props.auth.user" class="space-y-4">
                <p class="text-gray-400 text-sm">Faça login ou crie uma conta para acessar:</p>
                <div class="flex gap-3">
                  <Link
                    :href="route('login')"
                    class="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold text-white text-center transition-colors"
                  >
                    Entrar
                  </Link>
                  <Link
                    :href="route('register')"
                    class="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-3 rounded-lg font-semibold text-white text-center transition-colors"
                  >
                    Criar Conta
                  </Link>
                </div>
              </div>

              <!-- Se estiver logado -->
              <div v-else>
                <p class="text-green-400 mb-4">✓ Você está logado como {{ $page.props.auth.user.name }}</p>
                <Link
                  :href="route('dashboard')"
                  class="w-full bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform inline-block text-center"
                >
                  Acessar Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'

// Mobile menu state
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

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

const quickForm = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmittingQuick = ref(false)
const quickMessage = ref('')
const quickMessageType = ref('')

const submitQuickContact = async () => {
  isSubmittingQuick.value = true
  quickMessage.value = ''
  
  try {
    await router.post('/contact/quick', quickForm.value, {
      onSuccess: () => {
        quickForm.value = { name: '', email: '', message: '' }
        quickMessage.value = 'Mensagem enviada com sucesso! Responderemos em breve.'
        quickMessageType.value = 'success'
      },
      onError: (errors) => {
        quickMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
        quickMessageType.value = 'error'
      }
    })
  } catch (error) {
    quickMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
    quickMessageType.value = 'error'
  } finally {
    isSubmittingQuick.value = false
    
    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      quickMessage.value = ''
    }, 5000)
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
  background: #4f46e5;
  border-radius: 4px;
}

</style>