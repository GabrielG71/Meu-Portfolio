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

    <!-- Conteúdo da página -->
    <slot />

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { Link } from '@inertiajs/vue3'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
