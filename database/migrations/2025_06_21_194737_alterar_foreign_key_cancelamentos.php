<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cancelamentos', function (Blueprint $table) {
            // Primeiro, removemos a foreign key existente
            $table->dropForeign(['projeto_id']);

            // Depois tornamos o campo nullable
            $table->foreignId('projeto_id')->nullable()->change();

            // E criamos novamente a foreign key com SET NULL
            $table->foreign('projeto_id')->references('id')->on('projetos')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('cancelamentos', function (Blueprint $table) {
            // Remove a nova foreign key
            $table->dropForeign(['projeto_id']);

            // Volta a ser obrigatório
            $table->foreignId('projeto_id')->nullable(false)->change();

            // Restaura com onDelete('cascade')
            $table->foreign('projeto_id')->references('id')->on('projetos')->onDelete('cascade');
        });
    }
};