<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Autenticado
Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard do usuário comum
    Route::get('/dashboard', [ProjetoController::class, 'meuProjeto'])->name('dashboard');

    // Admin
    Route::get('/admin', [ProjetoController::class, 'index'])->name('admin.index'); // OU use AdminController se preferir

    // Projetos
    Route::post('/projetos', [ProjetoController::class, 'store'])->name('projetos.store');
    Route::put('/projetos/{projeto}', [ProjetoController::class, 'update'])->name('projetos.update');
    Route::delete('/projetos/{projeto}', [ProjetoController::class, 'destroy'])->name('projetos.destroy');
    Route::post('/projetos/{projeto}/cancelar', [ProjetoController::class, 'solicitarCancelamento'])->name('projetos.cancelar');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';