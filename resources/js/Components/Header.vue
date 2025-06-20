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
            <a href="#inicio" class="hover:text-blue-400 transition-colors">Início</a>
            <a href="#sobre" class="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#servicos" class="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#projetos" class="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#contato" class="hover:text-blue-400 transition-colors">Contato</a>
            
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
            </div>
            
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
import { Link } from '@inertiajs/vue3'
</script>