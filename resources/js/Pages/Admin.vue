<script setup>
import { Head, router } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { ref } from 'vue'

const props = defineProps({
  user: Object,
  projetos: Array
})

// Formulário novo projeto
const novoProjeto = ref({
  nome: '',
  necessidade: '',
  objetivo: ''
})

// Edição
const editandoId = ref(null)
const editProjeto = ref({ nome: '', necessidade: '', objetivo: '' })

const criarProjeto = () => {
  router.post('/projetos', novoProjeto.value, {
    onSuccess: () => {
      novoProjeto.value = { nome: '', necessidade: '', objetivo: '' }
    }
  })
}

const deletarProjeto = (id) => {
  if (confirm('Tem certeza que deseja excluir este projeto?')) {
    router.delete(`/projetos/${id}`)
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
    }
  })
}
</script>

<template>
  <Head title="Admin - Projetos" />
  <div class="min-h-screen bg-gray-900 text-white">
    <Header />

    <main class="pt-20 py-16">
      <section class="max-w-5xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-pink-400">Painel de Administração</h1>

        <!-- Formulário novo projeto -->
        <form @submit.prevent="criarProjeto" class="mb-10 space-y-4 bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 class="text-xl font-bold text-purple-400 mb-4">Novo Projeto</h2>
          <input v-model="novoProjeto.nome" type="text" placeholder="Nome" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <input v-model="novoProjeto.necessidade" type="text" placeholder="Necessidade" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <input v-model="novoProjeto.objetivo" type="text" placeholder="Objetivo" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <button class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">Criar</button>
        </form>

        <!-- Tabela de projetos -->
        <div class="overflow-x-auto bg-gray-800 border border-gray-700 rounded-xl shadow-md">
          <table class="min-w-full divide-y divide-gray-700 text-sm">
            <thead class="bg-gray-900 text-gray-300">
              <tr>
                <th class="px-4 py-3">ID</th>
                <th class="px-4 py-3">Nome</th>
                <th class="px-4 py-3">Necessidade</th>
                <th class="px-4 py-3">Objetivo</th>
                <th class="px-4 py-3">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr v-for="projeto in props.projetos" :key="projeto.id" class="hover:bg-gray-700/40">
                <td class="px-4 py-3">{{ projeto.id }}</td>
                <td class="px-4 py-3">
                  <template v-if="editandoId === projeto.id">
                    <input v-model="editProjeto.nome" class="bg-gray-700 p-1 rounded text-white" />
                  </template>
                  <template v-else>{{ projeto.nome }}</template>
                </td>
                <td class="px-4 py-3">
                  <template v-if="editandoId === projeto.id">
                    <input v-model="editProjeto.necessidade" class="bg-gray-700 p-1 rounded text-white" />
                  </template>
                  <template v-else>{{ projeto.necessidade }}</template>
                </td>
                <td class="px-4 py-3">
                  <template v-if="editandoId === projeto.id">
                    <input v-model="editProjeto.objetivo" class="bg-gray-700 p-1 rounded text-white" />
                  </template>
                  <template v-else>{{ projeto.objetivo }}</template>
                </td>
                <td class="px-4 py-3 space-x-2">
                  <template v-if="editandoId === projeto.id">
                    <button @click="salvarEdicao" class="bg-green-600 px-2 py-1 rounded">Salvar</button>
                    <button @click="cancelarEdicao" class="bg-gray-600 px-2 py-1 rounded">Cancelar</button>
                  </template>
                  <template v-else>
                    <button @click="iniciarEdicao(projeto)" class="bg-yellow-600 px-2 py-1 rounded">Editar</button>
                    <button @click="deletarProjeto(projeto.id)" class="bg-red-600 px-2 py-1 rounded">Excluir</button>
                  </template>
                </td>
              </tr>
              <tr v-if="props.projetos.length === 0">
                <td colspan="5" class="text-center text-gray-400 py-4">Nenhum projeto encontrado.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
input {
  outline: none;
}
</style>