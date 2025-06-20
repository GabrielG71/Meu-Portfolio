<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import { ref } from 'vue';

defineProps({
  mustVerifyEmail: Boolean,
  status: String,
});

// Mobile menu state
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};


</script>

<template>
  <Head title="Perfil" />
  
  <div class="min-h-screen bg-gray-900 text-white">
    <Header @toggle-menu="toggleMobileMenu" />
    
    <!-- Menu Mobile -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800/95 backdrop-blur-sm mt-16">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#dashboard" class="block px-3 py-2 hover:text-blue-400 transition-colors">Dashboard</a>
        <a href="#projetos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Projetos</a>
        <a href="#clientes" class="block px-3 py-2 hover:text-blue-400 transition-colors">Clientes</a>
        <a href="#configuracoes" class="block px-3 py-2 hover:text-blue-400 transition-colors">Configurações</a>
      </div>
    </div>

    <!-- Main Profile Content -->
    <main class="pt-20">
      <!-- Header Section -->
      <section class="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Configurações do Perfil
            </h1>
            <p class="text-xl text-gray-400">
              Gerencie suas informações pessoais e configurações de segurança
            </p>
          </div>

        <!-- Botão Voltar para Dashboard -->
        <div class="mb-8">
          <a 
            href="/dashboard" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Voltar para Dashboard
          </a>
        </div>

          <!-- Profile Forms -->
          <div class="space-y-8">
            <!-- Profile Information Section -->
            <div id="profile-info" class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">Informações do Perfil</h3>
                  <p class="text-gray-400">Atualize suas informações pessoais e endereço de email</p>
                </div>
              </div>
              <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
            </div>

            <!-- Password Section -->
            <div id="password" class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">Segurança da Conta</h3>
                  <p class="text-gray-400">Mantenha sua conta segura com uma senha forte</p>
                </div>
              </div>
              <UpdatePasswordForm />
            </div>

            <!-- Danger Zone Section -->
            <div id="danger" class="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm p-8 rounded-xl border border-red-500/30">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-red-400">Zona de Perigo</h3>
                  <p class="text-gray-400">Ações irreversíveis que afetam permanentemente sua conta</p>
                </div>
              </div>
              <div class="bg-red-950/30 p-6 rounded-lg border border-red-500/20">
                <DeleteUserForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

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

/* Smooth anchor scroll */
section {
  scroll-margin-top: 6rem;
}
</style>