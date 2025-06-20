<?php

namespace App\Http\Controllers;

use App\Models\Projeto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        if (auth()->user()->email !== 'gabrielgoncalves2851@gmail.com') {
            abort(403, 'Acesso não autorizado.');
        }

        return Inertia::render('Admin', [
            'user' => auth()->user(),
            'projetos' => Projeto::orderBy('created_at', 'desc')->get(),
        ]);
    }
}