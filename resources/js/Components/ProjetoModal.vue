<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div class="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
      <button @click="close" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl">&times;</button>

      <h2 class="text-2xl font-bold mb-4">{{ projeto.nome }}</h2>

      <p class="text-gray-300 mb-6">{{ projeto.descricaoCompleta ?? projeto.descricao }}</p>

      <div v-if="projeto.viewImages?.length" class="space-y-4">
        <div 
          v-for="(imagem, i) in projeto.viewImages" 
          :key="i" 
          class="rounded overflow-hidden border border-gray-700"
        >
          <img :src="imagem.src" :alt="imagem.alt" class="w-full object-cover" />
          <p class="text-sm text-gray-400 mt-1 text-center">{{ imagem.alt }}</p>
        </div>
      </div>

      <a 
        :href="projeto.link" 
        target="_blank" 
        class="inline-block mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Ver no GitHub
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  projeto: Object
})
const emit = defineEmits(['close'])

const close = () => emit('close')
</script>