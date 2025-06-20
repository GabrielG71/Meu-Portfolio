<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projeto;
use Inertia\Inertia;

class ProjetoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'necessidade' => 'required|string|max:255',
            'objetivo' => 'required|string|max:255',
        ]);

        // Impedir duplicação
        if (Projeto::where('user_id', auth()->id())->exists()) {
            return redirect()->back()->withErrors(['projeto' => 'Você já criou um projeto.']);
        }

        Projeto::create([
            'nome' => $request->nome,
            'necessidade' => $request->necessidade,
            'objetivo' => $request->objetivo,
            'user_id' => auth()->id(),
        ]);

        return redirect()->back()->with('success', 'Projeto criado com sucesso!');
    }

    public function index()
    {
        return Inertia::render('Admin', [
            'user' => auth()->user(),
            'projetos' => Projeto::orderByDesc('created_at')->get(),
        ]);
    }

    public function update(Request $request, Projeto $projeto)
    {

        $request->validate([
            'nome' => 'required|string|max:255',
            'necessidade' => 'required|string|max:255',
            'objetivo' => 'required|string|max:255',
        ]);

        $projeto->update($request->only('nome', 'necessidade', 'objetivo'));

        return redirect()->back()->with('success', 'Projeto atualizado com sucesso!');
    }

    public function destroy(Projeto $projeto)
    {

        $projeto->delete();

        return redirect()->back()->with('success', 'Projeto removido com sucesso!');
    }

    public function meuProjeto()
    {
        $projeto = Projeto::where('user_id', auth()->id())->first();

        return Inertia::render('Dashboard', [
            'user' => auth()->user(),
            'projeto' => $projeto
        ]);
    }

}