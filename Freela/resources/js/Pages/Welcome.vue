<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <!-- Header/Navbar -->
    <nav class="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-white">DevPortfolio</h1>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-white hover:text-blue-300 transition-colors">Início</a>
              <a href="#about" class="text-white hover:text-blue-300 transition-colors">Sobre</a>
              <a href="#services" class="text-white hover:text-blue-300 transition-colors">Serviços</a>
              <a href="#projects" class="text-white hover:text-blue-300 transition-colors">Projetos</a>
              <a href="#contact" class="text-white hover:text-blue-300 transition-colors">Contato</a>
              <Link :href="route('login')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Login
              </Link>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-white hover:text-blue-300">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden bg-white/10 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" class="block text-white hover:text-blue-300 px-3 py-2">Início</a>
          <a href="#about" class="block text-white hover:text-blue-300 px-3 py-2">Sobre</a>
          <a href="#services" class="block text-white hover:text-blue-300 px-3 py-2">Serviços</a>
          <a href="#projects" class="block text-white hover:text-blue-300 px-3 py-2">Projetos</a>
          <a href="#contact" class="block text-white hover:text-blue-300 px-3 py-2">Contato</a>
          <Link :href="route('login')" class="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </nav>

    <!-- Hero Carousel -->
    <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 z-10"></div>
      
      <!-- Slides -->
      <div class="relative w-full h-full">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-1000', 
                   index === currentSlide ? 'opacity-100' : 'opacity-0']"
        >
          <div 
            class="w-full h-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
          {{ slides[currentSlide].title }}
        </h1>
        <p class="text-xl md:text-2xl mb-4 text-blue-200">
          {{ slides[currentSlide].subtitle }}
        </p>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          {{ slides[currentSlide].description }}
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto gap-2">
          {{ slides[currentSlide].cta }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :class="['w-3 h-3 rounded-full transition-all', 
                   index === currentSlide ? 'bg-blue-400' : 'bg-white/50']"
        />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-slate-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-white mb-6">Sobre Mim</h2>
            <p class="text-lg text-gray-300 mb-6">
              Sou um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença. 
              Com experiência em Laravel, Vue.js e tecnologias modernas, transformo ideias em realidade digital.
            </p>
            <p class="text-lg text-gray-300 mb-8">
              Meu foco é entregar projetos de alta qualidade, com código limpo e experiência do usuário excepcional. 
              Cada projeto é uma oportunidade de superar expectativas.
            </p>
            <div class="flex space-x-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-400">50+</div>
                <div class="text-gray-400">Projetos</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-400">3+</div>
                <div class="text-gray-400">Anos</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-400">100%</div>
                <div class="text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
              alt="Developer"
              class="rounded-lg shadow-2xl"
            />
            <div class="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Meus Serviços</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Ofereço soluções completas para suas necessidades digitais
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <component :is="service.icon" class="w-12 h-12 text-blue-400 mb-6" />
            <h3 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h3>
            <p class="text-gray-300 mb-6">{{ service.description }}</p>
            <div class="text-blue-400 font-semibold text-lg mb-4">{{ service.price }}</div>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Resto das seções continuam... -->
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

export default {
  name: 'Welcome',
  components: {
    Link
  },
  setup() {
    // Estados reativos (equivale ao useState do React)
    const currentSlide = ref(0)
    const isMenuOpen = ref(false)
    
    // Dados dos slides
    const slides = ref([
      {
        title: "Desenvolvedor Full Stack",
        subtitle: "Criando soluções digitais incríveis",
        description: "Especializado em Laravel, Vue.j e desenvolvimento web moderno",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
        cta: "Ver Projetos"
      },
      {
        title: "Freelancer Profissional",
        subtitle: "Seu projeto, nossa paixão",
        description: "Transformo suas ideias em realidade digital com qualidade e agilidade",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        cta: "Contratar Serviço"
      },
      {
        title: "Experiência & Qualidade",
        subtitle: "Resultados que impressionam",
        description: "Mais de X anos criando experiências digitais que geram resultados",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        cta: "Conhecer Mais"
      }
    ])

    const services = ref([
      {
        title: "Desenvolvimento Web",
        description: "Sites e sistemas web completos com Laravel e Vue.js",
        price: "A partir de R$ 2.500",
        icon: 'CodeIcon'
      },
      {
        title: "Apps Mobile", 
        description: "Aplicativos mobile responsivos e modernos",
        price: "A partir de R$ 3.500",
        icon: 'SmartphoneIcon'
      },
      {
        title: "UI/UX Design",
        description: "Design moderno e experiência do usuário otimizada", 
        price: "A partir de R$ 1.200",
        icon: 'PaletteIcon'
      }
    ])

    // Métodos (equivale às funções do React)
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length
    }

    const prevSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    // Timer do carrossel
    let slideTimer = null

    // Ciclo de vida - quando componente é montado
    onMounted(() => {
      slideTimer = setInterval(() => {
        nextSlide()
      }, 5000)
    })

    // Limpa timer quando componente é desmontado
    onUnmounted(() => {
      if (slideTimer) {
        clearInterval(slideTimer)
      }
    })

    // Retorna tudo que será usado no template
    return {
      currentSlide,
      isMenuOpen,
      slides,
      services,
      nextSlide,
      prevSlide,
      toggleMenu
    }
  }
}
</script>