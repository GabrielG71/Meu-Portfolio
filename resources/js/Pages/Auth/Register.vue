<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

// Mobile menu state
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <Head title="Registrar - Gabriel Gonçalves" />
        
        <Header @toggle-menu="toggleMobileMenu" />
        
        <!-- Menu Mobile -->
        <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800/95 backdrop-blur-sm mt-16">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="/#inicio" class="block px-3 py-2 hover:text-blue-400 transition-colors">Início</a>
                <a href="/#sobre" class="block px-3 py-2 hover:text-blue-400 transition-colors">Sobre</a>
                <a href="/#servicos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Serviços</a>
                <a href="/#projetos" class="block px-3 py-2 hover:text-blue-400 transition-colors">Projetos</a>
                <a href="/#contato" class="block px-3 py-2 hover:text-blue-400 transition-colors">Contato</a>
                <Link 
                    :href="route('login')" 
                    class="block px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-center mt-2"
                >
                    Entrar
                </Link>
            </div>
        </div>

        <!-- Main Content -->
        <main class="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
            <!-- Background with gradient and blur effects -->
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
                <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <!-- Register Form Container -->
            <div class="relative z-10 w-full max-w-md mx-auto px-4 py-8">
                <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                            Criar Conta
                        </h1>
                        <p class="text-gray-400">
                            Preencha os dados para se registrar
                        </p>
                    </div>

                    <!-- Register Form -->
                    <form @submit.prevent="submit" class="space-y-6">
                        <!-- Name Field -->
                        <div>
                            <InputLabel for="name" value="Nome" class="text-gray-300 font-medium mb-2" />
                            <TextInput
                                id="name"
                                type="text"
                                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                v-model="form.name"
                                required
                                autofocus
                                autocomplete="name"
                                placeholder="Seu nome completo"
                            />
                            <InputError class="mt-2 text-red-400" :message="form.errors.name" />
                        </div>

                        <!-- Email Field -->
                        <div>
                            <InputLabel for="email" value="Email" class="text-gray-300 font-medium mb-2" />
                            <TextInput
                                id="email"
                                type="email"
                                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                v-model="form.email"
                                required
                                autocomplete="username"
                                placeholder="seu@email.com"
                            />
                            <InputError class="mt-2 text-red-400" :message="form.errors.email" />
                        </div>

                        <!-- Password Field -->
                        <div>
                            <InputLabel for="password" value="Senha" class="text-gray-300 font-medium mb-2" />
                            <TextInput
                                id="password"
                                type="password"
                                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                v-model="form.password"
                                required
                                autocomplete="new-password"
                                placeholder="••••••••"
                            />
                            <InputError class="mt-2 text-red-400" :message="form.errors.password" />
                        </div>

                        <!-- Password Confirmation Field -->
                        <div>
                            <InputLabel for="password_confirmation" value="Confirmar Senha" class="text-gray-300 font-medium mb-2" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                v-model="form.password_confirmation"
                                required
                                autocomplete="new-password"
                                placeholder="••••••••"
                            />
                            <InputError class="mt-2 text-red-400" :message="form.errors.password_confirmation" />
                        </div>

                        <!-- Submit Button and Links -->
                        <div class="space-y-4">
                            <button
                                type="submit"
                                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:transform-none"
                                :class="{ 'opacity-50': form.processing }"
                                :disabled="form.processing"
                            >
                                <span v-if="form.processing" class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Registrando...
                                </span>
                                <span v-else>Registrar</span>
                            </button>

                            <!-- Login Link -->
                            <div class="text-center pt-4 border-t border-gray-700">
                                <p class="text-gray-400 text-sm">
                                    Já tem uma conta?
                                    <Link 
                                        :href="route('login')" 
                                        class="text-blue-400 hover:text-blue-300 transition-colors font-medium ml-1"
                                    >
                                        Faça login aqui
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Back to Home -->
                <div class="text-center mt-6">
                    <Link 
                        href="/" 
                        class="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Voltar ao início
                    </Link>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<style scoped>
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

/* Input focus glow effect */
input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button hover glow effect */
button[type="submit"]:hover:not(:disabled) {
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}
</style>