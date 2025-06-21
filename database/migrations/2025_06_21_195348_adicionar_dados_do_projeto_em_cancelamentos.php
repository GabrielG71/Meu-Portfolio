<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cancelamentos', function (Blueprint $table) {
            // Remove o projeto_id (se quiser manter, pode pular isso)
            $table->dropForeign(['projeto_id']);
            $table->dropColumn('projeto_id');

            // Adiciona os dados do projeto
            $table->string('nome');
            $table->string('necessidade');
            $table->string('objetivo');
            $table->unsignedBigInteger('user_id'); // para rastrear quem cancelou, opcional
        });
    }

    public function down(): void
    {
        Schema::table('cancelamentos', function (Blueprint $table) {
            $table->dropColumn(['nome', 'necessidade', 'objetivo', 'user_id']);

            $table->foreignId('projeto_id')->nullable()->constrained()->onDelete('set null');
        });
    }
};