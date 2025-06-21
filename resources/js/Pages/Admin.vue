<script setup>
import { Head, router } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { ref } from 'vue'

const props = defineProps({
  user: Object,
  projetos: Array,
  cancelados: Array,
})

const novoProjeto = ref({
  nome: '',
  necessidade: '',
  objetivo: '',
})

const editandoId = ref(null)
const editProjeto = ref({ nome: '', necessidade: '', objetivo: '' })
const mostrarCancelados = ref(false)
const mostrarFormulario = ref(false)
const loading = ref(false)

const criarProjeto = () => {
  loading.value = true
  router.post('/projetos', novoProjeto.value, {
    onSuccess: () => {
      novoProjeto.value = { nome: '', necessidade: '', objetivo: '' }
      mostrarFormulario.value = false
    },
    onFinish: () => {
      loading.value = false
    }
  })
}

const deletarProjeto = (projeto) => {
  if (confirm(`Tem certeza que deseja excluir o projeto "${projeto.nome}"?`)) {
    router.delete(`/projetos/${projeto.id}`)
  }
}

const iniciarEdicao = (projeto) => {
  editandoId.value = projeto.id
  editProjeto.value = { ...projeto }
}

const cancelarEdicao = () => {
  editandoId.value = null
}

const salvarEdicao = () => {
  router.put(`/projetos/${editandoId.value}`, editProjeto.value, {
    onSuccess: () => {
      cancelarEdicao()
    },
  })
}

const formatarData = (dataString) => {
  const data = new Date(dataString)
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <Head title="Admin - Projetos" />

  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
    <Header />

    <!-- Animated background particles -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>

    <main class="relative flex-1 pt-24 pb-16">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Painel Administrativo
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Gerencie todos os projetos da plataforma de forma elegante e eficiente
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">{{ props.projetos.length }}</p>
                <p class="text-green-400 text-sm font-medium">Projetos Ativos</p>
              </div>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">{{ props.cancelados?.length || 0 }}</p>
                <p class="text-red-400 text-sm font-medium">Projetos Cancelados</p>
              </div>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">{{ props.projetos.length + (props.cancelados?.length || 0) }}</p>
                <p class="text-purple-400 text-sm font-medium">Total Geral</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <button 
            @click="mostrarFormulario = true" 
            class="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            <svg class="w-6 h-6 mr-3 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Novo Projeto
          </button>
          
          <button 
            @click="mostrarCancelados = true" 
            class="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pink-400 transition-all duration-300 bg-pink-500/10 border border-pink-500/20 rounded-2xl hover:bg-pink-500/20 hover:border-pink-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            <svg class="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Ver Cancelados
          </button>
        </div>

        <!-- Projects Grid -->
        <div v-if="props.projetos.length > 0" class="grid gap-6">
          <div 
            v-for="projeto in props.projetos" 
            :key="projeto.id" 
            class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <div class="flex items-center space-x-2 mb-1">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-sm text-gray-400">Ativo</span>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center space-x-2">
                <template v-if="editandoId === projeto.id">
                  <button 
                    @click="salvarEdicao" 
                    class="group inline-flex items-center px-4 py-2 text-sm font-medium text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Salvar
                  </button>
                  <button 
                    @click="cancelarEdicao" 
                    class="group inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-500/10 border border-gray-500/20 rounded-xl hover:bg-gray-500/20 hover:border-gray-500/40 transition-all duration-300"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Cancelar
                  </button>
                </template>
                <template v-else>
                  <button 
                    @click="iniciarEdicao(projeto)" 
                    class="group inline-flex items-center px-4 py-2 text-sm font-medium text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Editar
                  </button>
                  <button 
                    @click="deletarProjeto(projeto)" 
                    class="group inline-flex items-center px-4 py-2 text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300"
                  >
                    <svg class="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Excluir
                  </button>
                </template>
              </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white/5 rounded-2xl p-4 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Nome do Projeto</label>
                <template v-if="editandoId === projeto.id">
                  <input 
                    v-model="editProjeto.nome" 
                    class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </template>
                <template v-else>
                  <p class="text-lg text-white font-medium">{{ projeto.nome }}</p>
                </template>
              </div>
              
              <div class="bg-white/5 rounded-2xl p-4 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Solução Desejada</label>
                <template v-if="editandoId === projeto.id">
                  <input 
                    v-model="editProjeto.necessidade" 
                    class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </template>
                <template v-else>
                  <p class="text-gray-300 leading-relaxed">{{ projeto.necessidade }}</p>
                </template>
              </div>
              
              <div class="bg-white/5 rounded-2xl p-4 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Objetivo Principal</label>
                <template v-if="editandoId === projeto.id">
                  <textarea 
                    v-model="editProjeto.objetivo" 
                    rows="3"
                    class="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </template>
                <template v-else>
                  <p class="text-gray-300 leading-relaxed">{{ projeto.objetivo }}</p>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <div class="mx-auto w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mb-6">
            <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-medium text-gray-400 mb-3">Nenhum projeto encontrado</h3>
          <p class="text-gray-500 mb-8">Comece criando seu primeiro projeto clicando no botão acima.</p>
        </div>
      </section>

      <!-- Modal novo projeto -->
      <div v-if="mostrarFormulario" class="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center px-4">
        <div class="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-2xl w-full p-8 animate-in slide-in-from-bottom-4 duration-300">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">Criar Novo Projeto</h2>
            <p class="text-gray-400">Preencha os dados para adicionar um novo projeto</p>
          </div>

          <form @submit.prevent="criarProjeto" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                Nome do Projeto
              </label>
              <input 
                v-model="novoProjeto.nome" 
                type="text" 
                required
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Digite o nome do projeto..."
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                Solução Desejada
              </label>
              <input 
                v-model="novoProjeto.necessidade" 
                type="text" 
                required
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Que problema este projeto resolve?"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Objetivo Principal
              </label>
              <textarea 
                v-model="novoProjeto.objetivo" 
                rows="4" 
                required
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Descreva o objetivo principal do projeto..."
              />
            </div>

            <div class="flex justify-end mt-8 space-x-4">
              <button 
                type="button"
                @click="mostrarFormulario = false" 
                class="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                class="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="loading"
              >
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="loading">Criando...</span>
                <span v-else>Criar Projeto</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Modal de projetos cancelados -->
      <div v-if="mostrarCancelados" class="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center px-4">
        <div class="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl max-w-6xl w-full max-h-[85vh] flex flex-col">
          <!-- Header do Modal -->
          <div class="flex items-center justify-between p-8 border-b border-gray-700">
            <div>
              <h2 class="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Projetos Cancelados</h2>
              <p class="text-gray-400 mt-2">{{ props.cancelados?.length || 0 }} projetos foram cancelados</p>
            </div>
            <button 
              @click="mostrarCancelados = false"
              class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white transition-all"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Conteúdo do Modal -->
          <div class="flex-1 overflow-y-auto p-8">
            <div v-if="props.cancelados && props.cancelados.length > 0" class="space-y-6">
              <div 
                v-for="projeto in props.cancelados" 
                :key="projeto.id" 
                class="bg-red-500/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 hover:bg-red-500/10 transition-all duration-300"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 mb-1">
                        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span class="text-xs text-red-400 font-medium uppercase tracking-wide">Cancelado</span>
                      </div>
                      <p class="text-sm text-gray-500">{{ formatarData(projeto.updated_at) }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                    <label class="block text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">Nome do Projeto</label>
                    <p class="text-lg text-white font-medium">{{ projeto.nome }}</p>
                  </div>
                  
                  <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                    <label class="block text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">Solução Desejada</label>
                    <p class="text-gray-300 leading-relaxed">{{ projeto.necessidade }}</p>
                  </div>
                </div>

                <div class="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
                  <label class="block text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">Objetivo Principal</label>
                  <div class="text-gray-300 leading-relaxed prose prose-invert max-w-none" v-html="projeto.objetivo"></div>
                </div>

                <div v-if="projeto.motivo_cancelamento" class="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <label class="block text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    Motivo do Cancelamento
                  </label>
                  <p class="text-red-200 leading-relaxed">{{ projeto.motivo_cancelamento }}</p>
                </div>
              </div>
            </div>

            <!-- Empty State para Cancelados -->
            <div v-else class="text-center py-12">
              <div class="mx-auto w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
                <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-400 mb-2">Nenhum projeto cancelado</h3>
              <p class="text-gray-500">Todos os projetos estão ativos no momento.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style>
/* Animações personalizadas */
@keyframes slide-in-from-bottom-4 {
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-in {
  animation-fill-mode: both;
}

.slide-in-from-bottom-4 {
  animation-name: slide-in-from-bottom-4;
}

.duration-300 {
  animation-duration: 300ms;
}

/* Scrollbar personalizada para o modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.5);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.7);
}
</style>