<script setup>
import { Head, router } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  user: Object,
  projeto: Object // Recebe o projeto (ou null)
})

const showModal = ref(false)
const showCancelModal = ref(false)
const motivoCancelamento = ref('')
const errorsCancelamento = ref({})
const nome = ref('')
const necessidade = ref('')
const objetivo = ref('')
const errors = ref({})
const loading = ref(false)
const quillEditor = ref(null)

// Configuração do Quill (Rich Text Editor)
let quill = null

onMounted(() => {
  // Carregar Quill apenas quando necessário
  if (typeof window !== 'undefined') {
    loadQuill()
  }
})

const loadQuill = async () => {
  if (typeof window.Quill === 'undefined') {
    // Carregar Quill via CDN
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js'
    document.head.appendChild(script)
    
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css'
    document.head.appendChild(link)
    
    script.onload = () => {
      initQuill()
    }
  } else {
    initQuill()
  }
}

const initQuill = () => {
  if (quillEditor.value && window.Quill) {
    quill = new window.Quill(quillEditor.value, {
      theme: 'snow',
      placeholder: 'Descreva o objetivo principal do seu projeto...',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['clean']
        ]
      }
    })
    
    // Sincronizar com o ref
    quill.on('text-change', () => {
      objetivo.value = quill.root.innerHTML
    })
  }
}

const openModal = () => {
  showModal.value = true
  // Aguardar o DOM atualizar antes de inicializar o Quill
  setTimeout(() => {
    if (!quill) {
      initQuill()
    }
  }, 100)
}

const submitProjeto = () => {
  loading.value = true
  router.post(route('projetos.store'), {
    nome: nome.value,
    necessidade: necessidade.value,
    objetivo: objetivo.value,
  }, {
    onSuccess: () => {
      location.reload()
    },
    onError: (err) => {
      errors.value = err
    },
    onFinish: () => {
      loading.value = false
    }
  })
}

const solicitarExclusao = () => {
  router.post(route('projetos.cancelar', props.projeto.id), 
    {
      motivo_cancelamento: motivoCancelamento.value
    }, 
    {
      preserveScroll: true,
      onSuccess: () => {
        motivoCancelamento.value = ''
        errorsCancelamento.value = {}
        showCancelModal.value = false
        location.reload()
      },
      onError: (errors) => {
        errorsCancelamento.value = errors
      }
    }
  )
}
</script>

<template>
  <Head title="Dashboard" />
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

    <main class="relative flex-1 flex flex-col">
      <!-- Conteúdo quando não há projeto - centralizado verticalmente -->
      <section v-if="!props.projeto" class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-8">
            <h1 class="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Olá, {{ user.name }}!
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Bem-vindo ao seu espaço de criatividade e inovação. Transforme suas ideias em realidade.
            </p>
            
            <div class="flex justify-center">
              <button
                @click="openModal"
                class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                <svg class="w-6 h-6 mr-3 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Criar Novo Projeto
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Conteúdo quando há projeto - layout normal -->
      <section v-if="props.projeto" class="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Olá, {{ user.name }}! 👋
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo ao seu espaço de criatividade e inovação. Transforme suas ideias em realidade.
          </p>
        </div>

        <!-- Projeto existente -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Seu Projeto
                </h2>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-sm text-gray-400">Ativo</span>
              </div>
            </div>
            
            <div class="grid gap-6">
              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Nome do Projeto</label>
                <p class="text-xl text-white font-medium">{{ props.projeto.nome }}</p>
              </div>
              
              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Solução Desejada</label>
                <p class="text-lg text-gray-300 leading-relaxed">{{ props.projeto.necessidade }}</p>
              </div>
              
              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Objetivo Principal</label>
                <div class="text-lg text-gray-300 leading-relaxed prose prose-invert max-w-none" v-html="props.projeto.objetivo"></div>
              </div>
            </div>
            
            <div class="mt-8 flex justify-end">
              <button 
                @click="showCancelModal = true" 
                class="group inline-flex items-center px-6 py-3 text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
              >
                <svg class="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Solicitar Exclusão
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Modal novo projeto -->
      <div v-if="showModal" class="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center px-4">
        <div class="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-2xl w-full p-8 animate-in slide-in-from-bottom-4 duration-300">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">Criar Novo Projeto</h2>
            <p class="text-gray-400">Preencha os dados para começar sua jornada</p>
          </div>

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Seu Nome
              </label>
              <input 
                v-model="nome" 
                type="text" 
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Digite seu nome..."
              />
              <p class="text-red-400 text-sm mt-2" v-if="errors.nome">{{ errors.nome }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                Solução Desejada
              </label>
              <input 
                v-model="necessidade" 
                type="text" 
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Que problema você quer resolver?"
              />
              <p class="text-red-400 text-sm mt-2" v-if="errors.necessidade">{{ errors.necessidade }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Objetivo Principal
              </label>
              <div class="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div ref="quillEditor" class="text-white min-h-[120px]"></div>
              </div>
              <p class="text-red-400 text-sm mt-2" v-if="errors.objetivo">{{ errors.objetivo }}</p>
            </div>
          </div>

          <div class="flex justify-end mt-8 space-x-4">
            <button 
              @click="showModal = false" 
              class="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
            >
              Cancelar
            </button>
            <button 
              class="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              @click="submitProjeto" 
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
        </div>
      </div>

      <!-- Modal de cancelamento -->
      <div v-if="showCancelModal" class="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center px-4">
        <div class="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in slide-in-from-bottom-4 duration-300">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white mb-2">Confirmar Exclusão</h2>
            <p class="text-gray-400 text-sm">Esta ação não pode ser desfeita</p>
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">Motivo do Cancelamento</label>
            <textarea 
              v-model="motivoCancelamento" 
              rows="4" 
              class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
              placeholder="Descreva o motivo do cancelamento..."
            />
            <p class="text-red-400 text-sm mt-2" v-if="errorsCancelamento.motivo_cancelamento">
              {{ errorsCancelamento.motivo_cancelamento }}
            </p>
          </div>
          
          <div class="flex justify-end space-x-4">
            <button 
              @click="showCancelModal = false" 
              class="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
            >
              Cancelar
            </button>
            <button 
              class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
              @click="solicitarExclusao"
            >
              Confirmar Exclusão
            </button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style>
/* Estilos personalizados para o Quill Editor */
.ql-editor {
  background: transparent !important;
  color: white !important;
  border: none !important;
  font-size: 16px;
  line-height: 1.6;
}

.ql-toolbar {
  border: none !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.05) !important;
}

.ql-stroke {
  stroke: #9ca3af !important;
}

.ql-fill {
  fill: #9ca3af !important;
}

.ql-picker-label {
  color: #9ca3af !important;
}

.ql-picker-options {
  background: #1e293b !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.ql-picker-item {
  color: #9ca3af !important;
}

.ql-picker-item:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.ql-editor.ql-blank::before {
  color: #6b7280 !important;
  font-style: normal !important;
}

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
</style>