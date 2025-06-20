<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';
import { ref } from 'vue';

// Mobile menu state
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Dashboard stats (exemplo de dados)
const stats = ref([
  {
    title: 'Projetos Ativos',
    value: '3',
    icon: 'code',
    color: 'blue'
  },
  {
    title: 'Clientes',
    value: '8',
    icon: 'users',
    color: 'purple'
  },
  {
    title: 'Tarefas Pendentes',
    value: '12',
    icon: 'tasks',
    color: 'green'
  },
  {
    title: 'Concluídos este mês',
    value: '5',
    icon: 'check',
    color: 'yellow'
  }
]);

// Recent activities (exemplo)
const recentActivities = ref([
  {
    title: 'Projeto Site E-commerce finalizado',
    time: '2 horas atrás',
    type: 'success'
  },
  {
    title: 'Nova mensagem de cliente',
    time: '4 horas atrás',
    type: 'info'
  },
  {
    title: 'Deploy realizado com sucesso',
    time: '1 dia atrás',
    type: 'success'
  },
  {
    title: 'Reunião agendada para amanhã',
    time: '2 dias atrás',
    type: 'warning'
  }
]);
</script>

<template>
  <Head title="Dashboard" />
  
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

    <!-- Main Dashboard Content -->
    <main class="pt-20">
      <!-- Welcome Section -->
      <section class="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bem-vindo de volta, Gabriel!
            </h1>
            <p class="text-xl text-gray-400">
              Aqui está um resumo das suas atividades
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div 
              v-for="stat in stats" 
              :key="stat.title"
              class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-all duration-300 group"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-400 text-sm font-medium">{{ stat.title }}</p>
                  <p class="text-2xl font-bold mt-1">{{ stat.value }}</p>
                </div>
                <div :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
                  stat.color === 'blue' ? 'bg-blue-500/20 group-hover:bg-blue-500/30' :
                  stat.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500/30' :
                  stat.color === 'green' ? 'bg-green-500/20 group-hover:bg-green-500/30' :
                  'bg-yellow-500/20 group-hover:bg-yellow-500/30'
                ]">
                  <!-- Code Icon -->
                  <svg v-if="stat.icon === 'code'" :class="[
                    'w-6 h-6',
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    'text-yellow-400'
                  ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  <!-- Users Icon -->
                  <svg v-else-if="stat.icon === 'users'" :class="[
                    'w-6 h-6',
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    'text-yellow-400'
                  ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                  <!-- Tasks Icon -->
                  <svg v-else-if="stat.icon === 'tasks'" :class="[
                    'w-6 h-6',
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    'text-yellow-400'
                  ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  <!-- Check Icon -->
                  <svg v-else :class="[
                    'w-6 h-6',
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    'text-yellow-400'
                  ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activities & Quick Actions -->
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Recent Activities -->
            <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600">
              <h3 class="text-xl font-bold mb-6 flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Atividades Recentes
              </h3>
              <div class="space-y-4">
                <div 
                  v-for="activity in recentActivities" 
                  :key="activity.title"
                  class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-600/30 transition-colors"
                >
                  <div :class="[
                    'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                    activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'info' ? 'bg-blue-400' :
                    activity.type === 'warning' ? 'bg-yellow-400' :
                    'bg-gray-400'
                  ]"></div>
                  <div>
                    <p class="text-white font-medium">{{ activity.title }}</p>
                    <p class="text-gray-400 text-sm">{{ activity.time }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600">
              <h3 class="text-xl font-bold mb-6 flex items-center">
                <svg class="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Ações Rápidas
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <button class="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg hover:scale-105 transition-transform text-left">
                  <svg class="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <p class="font-semibold">Novo Projeto</p>
                </button>
                <button class="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg hover:scale-105 transition-transform text-left">
                  <svg class="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                  <p class="font-semibold">Novo Cliente</p>
                </button>
                <button class="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg hover:scale-105 transition-transform text-left">
                  <svg class="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <p class="font-semibold">Relatório</p>
                </button>
                <button class="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg hover:scale-105 transition-transform text-left">
                  <svg class="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <p class="font-semibold">Configurações</p>
                </button>
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
</style>