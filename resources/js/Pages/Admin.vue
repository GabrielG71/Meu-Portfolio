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

const criarProjeto = () => {
  router.post('/projetos', novoProjeto.value, {
    onSuccess: () => {
      novoProjeto.value = { nome: '', necessidade: '', objetivo: '' }
    },
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

  <div class="min-h-screen bg-gray-900 text-white">
    <Header />

    <main class="pt-20 py-16">
      <section class="max-w-5xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-pink-400">Painel de Administração</h1>

        <div class="flex justify-between items-center mb-6">
          <div class="text-gray-300">
            <span class="text-sm">Total de projetos ativos: <strong class="text-purple-400">{{ props.projetos.length }}</strong></span>
            <span class="text-sm ml-4">Projetos cancelados: <strong class="text-red-400">{{ props.cancelados?.length || 0 }}</strong></span>
          </div>
          <button 
            @click="mostrarCancelados = true" 
            class="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg transition-colors duration-300 font-medium"
          >
            Ver Projetos Cancelados
          </button>
        </div>

        <!-- Formulário de novo projeto -->
        <form @submit.prevent="criarProjeto" class="mb-10 space-y-4 bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 class="text-xl font-bold text-purple-400 mb-4">Novo Projeto</h2>
          <input v-model="novoProjeto.nome" type="text" placeholder="Nome" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <input v-model="novoProjeto.necessidade" type="text" placeholder="Necessidade" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <input v-model="novoProjeto.objetivo" type="text" placeholder="Objetivo" class="w-full p-2 rounded bg-gray-700 text-white" required />
          <button class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">Criar</button>
        </form>

        <!-- Tabela de projetos ativos -->
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

      <!-- Modal de projetos cancelados -->
      <div v-if="mostrarCancelados" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
        <div class="bg-gray-800 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[85vh] flex flex-col">
          <!-- Header do Modal -->
          <div class="flex items-center justify-between p-6 border-b border-gray-700">
            <div>
              <h2 class="text-2xl font-bold text-pink-400">Projetos Cancelados</h2>
              <p class="text-gray-400 text-sm mt-1">Total: {{ props.cancelados?.length || 0 }} projeto(s)</p>
            </div>
            <button 
              @click="mostrarCancelados = false" 
              class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Conteúdo do Modal -->
          <div class="flex-1 overflow-y-auto p-6">
            <div v-if="props.cancelados && props.cancelados.length > 0" class="space-y-6">
              <div 
                v-for="cancelado in props.cancelados" 
                :key="cancelado.id" 
                class="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <!-- Cabeçalho do projeto cancelado -->
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">{{ cancelado.nome }}</h3>
                    <div class="flex items-center text-sm text-gray-400">
                      <span class="bg-red-900/30 text-red-400 px-2 py-1 rounded-full border border-red-900/50">
                        Cancelado
                      </span>
                      <span class="ml-3" v-if="cancelado.created_at">
                        {{ formatarData(cancelado.created_at) }}
                      </span>
                    </div>
                  </div>
                  <div class="text-sm text-gray-500">
                    ID: {{ cancelado.id }}
                  </div>
                </div>

                <!-- Detalhes do projeto -->
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div class="space-y-2">
                    <div>
                      <p class="text-sm font-medium text-purple-400 mb-1">Necessidade</p>
                      <p class="text-gray-300 text-sm bg-gray-800 p-3 rounded border border-gray-700">
                        {{ cancelado.necessidade }}
                      </p>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div>
                      <p class="text-sm font-medium text-purple-400 mb-1">Objetivo</p>
                      <p class="text-gray-300 text-sm bg-gray-800 p-3 rounded border border-gray-700">
                        {{ cancelado.objetivo }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Motivo do cancelamento -->
                <div class="bg-red-900/10 border border-red-900/30 rounded-lg p-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mr-3 mt-0.5">
                      <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-red-400 mb-2">Motivo do Cancelamento</p>
                      <p class="text-gray-300 text-sm leading-relaxed">
                        {{ cancelado.motivo }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Estado vazio -->
            <div v-else class="text-center py-12">
              <div class="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-400 mb-2">Nenhum projeto cancelado</h3>
              <p class="text-gray-500 text-sm">Ainda não há projetos cancelados no sistema.</p>
            </div>
          </div>

          <!-- Footer do Modal -->
          <div class="border-t border-gray-700 p-6">
            <div class="flex justify-end">
              <button 
                @click="mostrarCancelados = false" 
                class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
input {
  outline: none;
}
</style>