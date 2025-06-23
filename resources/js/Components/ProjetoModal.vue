<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div class="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
      <button @click="close" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl">&times;</button>

      <h2 class="text-2xl font-bold mb-4">{{ projeto.nome }}</h2>
      <p class="text-gray-300 mb-4">{{ projeto.descricao }}</p>

      <a 
        :href="projeto.link" 
        target="_blank" 
        class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
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