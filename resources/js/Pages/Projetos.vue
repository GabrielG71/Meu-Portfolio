<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import ProjetoModal from '@/Components/ProjetoModal.vue'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const projetos = ref([
  {
    nome: 'Formata ABNT',
    descricao: 'Editor web para formatação automática de documentos acadêmicos nas normas ABNT.',
    descricaoCompleta:
      'Editor web para formatação automática de documentos acadêmicos seguindo normas ABNT. Usa TinyMCE como base e aplica estilos padronizados com um clique.',
    link: 'https://github.com/GabrielG71/Formata-ABNT',
    imagemCard: '/images/Formatação.png',
    viewImages: [
      {
        src: '/images/Formatação.png',
        alt: 'Cabeçalho do site com a formatação utilizada'
      },
      {
        src: '/images/editor_e_botão.png',
        alt: 'Editor de texto TinyMCE com botão de formatar em ABNT'
      }
    ]
  },
  {
    nome: 'Busca de Produtos',
    descricao: 'Sistema para busca de produtos em estoque com filtro e detalhamento.',
    descricaoCompleta:
      'Sistema desenvolvido em Laravel para gerenciamento de produtos empresariais com diferentes níveis de acesso. Admins podem cadastrar e editar produtos, enquanto usuários normais visualizam e controlam a saída do estoque.',
    link: 'https://github.com/GabrielG71/busca_produto',
    imagemCard: '/images/busca_produto_homepage.png',
    viewImages: [
      {
        src: '/images/busca_produto_viewnormal.png',
        alt: 'View Normal do Usuário'
      },
      {
        src: '/images/busca_produto_viewadmin.png',
        alt: 'View Admin com funções de edição'
      }
    ]
  }
])

const modalAberto = ref(false)
const projetoSelecionado = ref(null)

function abrirModal(projeto) {
  projetoSelecionado.value = projeto
  modalAberto.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Header @toggle-menu="toggleMobileMenu" />

    <!-- Menu Mobile -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800/95 backdrop-blur-sm mt-16">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/" class="block px-3 py-2 hover:text-blue-400 transition-colors">Início</a>
        <a href="#projetos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Projetos</a>
        <Link 
          :href="route('login')" 
          class="block px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-center mt-2"
        >
          Login
        </Link>
      </div>
    </div>

    <!-- Título -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Meu Portfólio Completo
      </h1>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto">
        Aqui estão todos os projetos que desenvolvi com dedicação e atenção aos detalhes. Explore abaixo!
      </p>
    </section>

    <!-- Projetos -->
    <section id="projetos" class="py-20 bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="projeto in projetos"
            :key="projeto.nome"
            class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors"
          >
            <img
              v-if="projeto.imagemCard"
              :src="projeto.imagemCard"
              :alt="projeto.nome"
              class="h-40 w-full object-cover rounded-lg mb-4"
            />
            <div v-else class="h-40 bg-gray-700 rounded-lg mb-4"></div>

            <h3 class="text-xl font-bold mb-2">{{ projeto.nome }}</h3>
            <p class="text-gray-400 text-sm">{{ projeto.descricao }}</p>
            <button
              @click="abrirModal(projeto)"
              class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </section>

    <ProjetoModal 
      :show="modalAberto" 
      :projeto="projetoSelecionado" 
      @close="modalAberto = false" 
    />

    <Footer />
  </div>
</template>

<style scoped>
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