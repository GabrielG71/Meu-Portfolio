<script setup>
import { Head, router } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { ref } from 'vue'

// Estado do menu mobile
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Usuário logado
const user = defineProps({
  user: Object
})

// Modal e Formulário
const showModal = ref(false)
const nome = ref('')
const necessidade = ref('')
const objetivo = ref('')
const errors = ref({})
const loading = ref(false)

const submitProjeto = () => {
  loading.value = true

  router.post(route('projetos.store'), {
    nome: nome.value,
    necessidade: necessidade.value,
    objetivo: objetivo.value,
  }, {
    onSuccess: () => {
      nome.value = ''
      necessidade.value = ''
      objetivo.value = ''
      errors.value = {}
      showModal.value = false
    },
    onError: (err) => {
      errors.value = err
    },
    onFinish: () => {
      loading.value = false
    }
  })
}
</script>

<template>
  <Head title="Dashboard" />

  <div class="min-h-screen bg-gray-900 text-white">
    <Header @toggle-menu="toggleMobileMenu" />

    <main class="pt-20 py-16">
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bem-vindo de volta, {{ user.name }}!
          </h1>
          <button @click="showModal = true" class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition-transform hover:scale-105">
            + Criar um novo projeto
          </button>
        </div>
      </section>

      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
        <div class="bg-gray-800 border border-gray-700 rounded-xl shadow-lg max-w-md w-full p-6">
          <h2 class="text-xl font-bold text-white mb-6 text-center">Novo Projeto</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm text-gray-300 mb-1">Seu nome:</label>
              <input v-model="nome" type="text" class="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" />
              <p class="text-red-400 text-sm mt-1" v-if="errors.nome">{{ errors.nome }}</p>
            </div>

            <div>
              <label class="block text-sm text-gray-300 mb-1">Que tipo de solução digital você quer?</label>
              <input v-model="necessidade" type="text" class="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" />
              <p class="text-red-400 text-sm mt-1" v-if="errors.necessidade">{{ errors.necessidade }}</p>
            </div>

            <div>
              <label class="block text-sm text-gray-300 mb-1">Qual o objetivo principal do projeto?</label>
              <input v-model="objetivo" type="text" class="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" />
              <p class="text-red-400 text-sm mt-1" v-if="errors.objetivo">{{ errors.objetivo }}</p>
            </div>
          </div>

          <div class="flex justify-end mt-6 space-x-4">
            <button @click="showModal = false" class="text-gray-400 hover:text-white">Cancelar</button>
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" @click="submitProjeto" :disabled="loading">
              <span v-if="loading">Salvando...</span>
              <span v-else>Enviar</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

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