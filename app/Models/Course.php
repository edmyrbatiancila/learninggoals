<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'url',
        'platform',
        'category',
        'complete'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
