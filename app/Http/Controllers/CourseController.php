<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $hasCourse = $user->courses()->exists();

        $course = Course::latest()->where('user_id', auth()->id())->get();

        return Inertia::render('Learnings/Index', [
            'hasCourse'         => $hasCourse,
            'courseCreated'     => $course,
            'successMessage'    => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Learnings/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'         => 'required|string|max:255',
            'url'           => 'required|url',
            'platform'      => 'required|string',
            'category'      => 'required|string',
            'description'   => 'required|string'
        ]);

        $course = new Course([
            'user_id'       => auth()->id(),
            'title'         => $validated['title'],
            'url'           => $validated['url'],
            'platform'      => $validated['platform'],
            'category'      => $validated['category'],
            'description'   => $validated['description']
        ]);

        $course->save();

        return redirect()->route('learning.index')->with('success', 'Course created successfully!');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
