<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cancelamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'motivo',
        'nome',
        'necessidade',
        'objetivo',
        'user_id',
    ];

    public function projeto()
    {
        return $this->belongsTo(Projeto::class);
    }
}