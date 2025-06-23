<template>
  <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gabriel Gonçalves
          </span>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-6">
            <a @click.prevent="navigateToSection('inicio')" href="#" class="hover:text-blue-400 transition-colors cursor-pointer">Início</a>
            <a @click.prevent="navigateToSection('sobre')" href="#" class="hover:text-blue-400 transition-colors cursor-pointer">Sobre</a>
            <a @click.prevent="navigateToSection('servicos')" href="#" class="hover:text-blue-400 transition-colors cursor-pointer">Serviços</a>
            <a @click.prevent="navigateToSection('projetos')" href="#" class="hover:text-blue-400 transition-colors cursor-pointer">Projetos</a>
            <a @click.prevent="navigateToSection('contato')" href="#" class="hover:text-blue-400 transition-colors cursor-pointer">Contato</a>

            <!-- Socials -->
            <div class="flex items-center space-x-3 pl-4 border-l border-gray-700">
              <a href="https://linkedin.com/in/gabriel-gonçalves-554a41311" target="_blank" class="hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <i class="fab fa-linkedin text-gray-300 text-lg"></i>
              </a>
              <a href="https://github.com/GabrielG71" target="_blank" class="hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <i class="fab fa-github text-gray-300 text-lg"></i>
              </a>
              <a href="https://wa.me/5518998005937" target="_blank" class="hover:text-green-400 transition-all duration-300 hover:scale-110">
                <i class="fab fa-whatsapp text-gray-300 text-lg"></i>
              </a>
            </div>

            <!-- Auth -->
            <div v-if="page.props.auth?.user" class="ml-4">
              <button @click="navigateToDashboard" class="text-gray-200 hover:text-blue-400 transition-all">
                {{ isAdmin ? 'Admin' : 'Dashboard' }}
              </button>
              <button @click="logout" class="ml-3 text-red-400 hover:text-red-300 transition-all">
                Sair
              </button>
            </div>
            <div v-else class="flex space-x-3">
              <Link :href="route('login')" class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition">Login</Link>
              <Link :href="route('register')" class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition">Registrar</Link>
            </div>
          </div>
        </div>

        <!-- Botão Hamburguer (Mobile) -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-300 hover:text-white focus:outline-none">
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-show="mobileMenuOpen"
        class="md:hidden bg-gray-800/95 backdrop-blur-md px-4 py-6 rounded-b-xl border-t border-gray-700 space-y-4"
      >
        <div class="flex flex-col space-y-4 text-lg font-medium">
          <a @click.prevent="navigateToSection('inicio'); mobileMenuOpen = false" href="#" class="hover:text-blue-400 transition-colors">Início</a>
          <a @click.prevent="navigateToSection('sobre'); mobileMenuOpen = false" href="#" class="hover:text-blue-400 transition-colors">Sobre</a>
          <a @click.prevent="navigateToSection('servicos'); mobileMenuOpen = false" href="#" class="hover:text-blue-400 transition-colors">Serviços</a>
          <a @click.prevent="navigateToSection('projetos'); mobileMenuOpen = false" href="#" class="hover:text-blue-400 transition-colors">Projetos</a>
          <a @click.prevent="navigateToSection('contato'); mobileMenuOpen = false" href="#" class="hover:text-blue-400 transition-colors">Contato</a>
        </div>

        <div class="flex space-x-4 justify-center pt-4 border-t border-gray-700">
          <a href="https://linkedin.com/in/gabriel-gonçalves-554a41311" target="_blank" class="hover:text-blue-400"><i class="fab fa-linkedin text-gray-300 text-lg"></i></a>
          <a href="https://github.com/GabrielG71" target="_blank" class="hover:text-purple-400"><i class="fab fa-github text-gray-300 text-lg"></i></a>
          <a href="https://wa.me/5518998005937" target="_blank" class="hover:text-green-400"><i class="fab fa-whatsapp text-gray-300 text-lg"></i></a>
        </div>

        <div class="pt-4 border-t border-gray-700">
          <template v-if="page.props.auth?.user">
            <button @click="navigateToDashboard" class="w-full text-left text-gray-300 hover:text-blue-400 transition">Dashboard</button>
            <button @click="logout" class="w-full text-left text-red-400 hover:text-red-300 transition mt-2">Sair</button>
          </template>
          <template v-else>
            <Link :href="route('login')" class="block text-gray-300 hover:text-blue-400 mt-2">Login</Link>
            <Link :href="route('register')" class="block text-gray-300 hover:text-blue-400 mt-2">Registrar</Link>
          </template>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePage, router, Link } from '@inertiajs/vue3'

const page = usePage()
const showDropdown = ref(false)
const mobileMenuOpen = ref(false)

const isAdmin = computed(() => {
  return page.props.auth?.user?.email === 'gabrielgoncalves2851@gmail.com'
})

const navigateToSection = (section) => {
  if (window.location.pathname === '/') {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.visit(`/#${section}`)
  }
}

const navigateToDashboard = () => {
  if (isAdmin.value) {
    router.visit(route('admin.index'))
  } else {
    router.visit(route('dashboard'))
  }
}

const logout = () => {
  router.post(route('logout'))
}
</script>

<style scoped>
/* Ícones FontAwesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>