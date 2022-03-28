<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\CategoryResource;
use App\Models\Campaign;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Categories/Index', [
            'title' => 'Categories',
            'items' => CategoryResource::collection(Category::orderByDesc('created_at')->paginate(10)),
            'can'=>[
                'viewAny'=> Auth::user()->can('viewAny',Category::class),
                'create'=> Auth::user()->can('create',Category::class),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Categories/Create', [
            'title' => 'Create Category',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'category_name' => 'required|max:255',
            'color' => 'required|max:255',
            'description' => 'required|max:3000',
        ]);
        DB::beginTransaction();
        try {
            $category = new Category();
            $category->name = $request->category_name;
            $category->description = $request->description;
            $category->color = $request->color;
            $category->slug = Str::slug($category->name);
            $category->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('categories.show', $category)->with('success', 'Item created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return Inertia::render('Categories/Show', [
            'title' => $category->name,
            'item' =>  CategoryResource::make($category->append(['description'])),
            'campaigns' => CampaignResource::collection(Campaign::where('category_id', $category->id)->orderByDesc('created_at')->paginate())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'title' => 'Edit Category: ' . $category->name,
            'item' => CategoryResource::make($category->append(['description'])),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $this->validate($request, [
            'category_name' => 'required|max:255',
            'color' => 'required|max:255',
            'description' => 'required|max:3000',
        ]);
        DB::beginTransaction();
        try {
            $category->name = $request->category_name;
            $category->description = $request->description;
            $category->color = $request->color;
            $category->slug = Str::slug($category->name);
            $category->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('categories.show', $category)->with('success', 'Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        DB::beginTransaction();
        try {
            $category->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        return Redirect::route('categories.index')->with('success', 'Item deleted successfully');
    }
}
