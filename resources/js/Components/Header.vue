<template>
  <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gabriel Gonçalves
          </span>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center space-x-6">
            <!-- Links usando window.location para garantir funcionamento -->
            <a 
              @click.prevent="navigateToSection('inicio')" 
              href="#" 
              class="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Início
            </a>
            <a 
              @click.prevent="navigateToSection('sobre')" 
              href="#" 
              class="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Sobre
            </a>
            <a 
              @click.prevent="navigateToSection('servicos')" 
              href="#" 
              class="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Serviços
            </a>
            <a 
              @click.prevent="navigateToSection('projetos')" 
              href="#" 
              class="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Projetos
            </a>
            <a 
              @click.prevent="navigateToSection('contato')" 
              href="#" 
              class="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contato
            </a>
            
            <!-- Links Sociais -->
            <div class="flex items-center space-x-3 pl-4 border-l border-gray-700">
              <a 
                href="https://linkedin.com/in/gabriel-gonçalves-554a41311" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/GabrielG71" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/5518998005937" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            
            <!-- Auth Section -->
            <div v-if="page.props.auth?.user" class="relative">
              <!-- User Dropdown -->
              <div 
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
                class="relative"
              >
                <button 
                  class="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-4 py-2 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-105 group"
                >
                  <!-- User Icon -->
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  
                  <!-- User Name -->
                  <span class="text-gray-200 font-medium">
                    {{ page.props.auth.user.name }}
                  </span>
                  
                  <!-- Dropdown Arrow -->
                  <svg 
                    class="w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:text-blue-400"
                    :class="{ 'rotate-180': showDropdown }"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div 
                    v-show="showDropdown"
                    class="absolute right-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 py-2 z-50"
                  >
                    <!-- User Info -->
                    <div class="px-4 py-3 border-b border-gray-700">
                      <p class="text-sm font-medium text-white">{{ page.props.auth.user.name }}</p>
                      <p class="text-xs text-gray-400 truncate">{{ page.props.auth.user.email }}</p>
                    </div>
                    
                    <!-- Menu Items -->
                    <div class="py-1">
                      <Link 
                        :href="route('profile.edit')"
                        class="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                      >
                        <svg class="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Perfil
                      </Link>
                      
                      <!-- Dashboard/Admin Link with conditional routing -->
                      <button
                        @click="navigateToDashboard"
                        class="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                      >
                        <svg class="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                        </svg>
                        {{ isAdmin ? 'Admin' : 'Dashboard' }}
                      </button>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-1">
                      <button
                        @click="logout"
                        class="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                      >
                        <svg class="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sair
                      </button>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            
            <!-- Login/Register Buttons (quando não logado) -->
            <div v-else class="flex items-center space-x-3">
              <Link 
                :href="route('login')" 
                class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform text-white font-medium"
              >
                Login
              </Link>
              <Link 
                :href="route('register')" 
                class="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform text-white font-medium"
              >
                Registrar
              </Link>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <button @click="$emit('toggle-menu')" class="text-gray-300 hover:text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'
import { ref, computed } from 'vue'

// Obter dados da página atual
const page = usePage()

// Estado do dropdown
const showDropdown = ref(false)

// Computed para verificar se é admin
const isAdmin = computed(() => {
  return page.props.auth?.user?.email === 'gabrielgoncalves2851@gmail.com'
})

// Função para navegar para as seções
const navigateToSection = (section) => {
  // Verifica se já está na página welcome
  if (window.location.pathname === '/') {
    // Se já está na welcome, faz scroll para a seção
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Se não está na welcome, navega para lá com a âncora
    router.visit(`/#${section}`)
  }
}

// Função para navegar para Dashboard ou Admin
const navigateToDashboard = () => {
  if (isAdmin.value) {
    // Redireciona para a rota admin
    router.visit(route('admin.index'))
  } else {
    // Redireciona para o dashboard normal
    router.visit(route('dashboard'))
  }
}

// Função de logout
const logout = () => {
  router.post(route('logout'))
}
</script>