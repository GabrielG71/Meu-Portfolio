<script setup>
import { Head, router } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { ref } from 'vue'

const props = defineProps({
  user: Object,
  projeto: Object // Recebe o projeto (ou null)
})

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
</script>

<template>
  <Head title="Dashboard" />

  <div class="min-h-screen bg-gray-900 text-white">
    <Header />

    <main class="pt-20 py-16">
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bem-vindo de volta, {{ user.name }}!
          </h1>

          <!-- Mostrar botão de criar projeto só se não tiver projeto -->
          <button
            v-if="!props.projeto"
            @click="showModal = true"
            class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
          >
            + Criar um novo projeto
          </button>
        </div>

        <!-- Se tiver projeto, mostrar detalhes -->
        <div v-if="props.projeto" class="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
          <h2 class="text-2xl font-bold text-purple-400">Seu Projeto</h2>
          <p><strong>Nome:</strong> {{ props.projeto.nome }}</p>
          <p><strong>Necessidade:</strong> {{ props.projeto.necessidade }}</p>
          <p><strong>Objetivo:</strong> {{ props.projeto.objetivo }}</p>
        </div>
      </section>

      <!-- Modal de novo projeto -->
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