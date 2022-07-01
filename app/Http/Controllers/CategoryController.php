<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\CategoryResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Traits\GenericTableColumns;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    use GenericTableColumns;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Category::class);
        $query = Category::orderBy(
            request('order_by') ?? 'id',
            request('order_direction') ?? 'desc'
        )
            ->when(request('search'), function ($q) {
                return $q->where('name', 'like', '%' . request('search') . '%');
            });
        return Inertia::render('Categories/Index', array_merge( [
            'title' => 'Categories',
            'items' => CategoryResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Category::count(),
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Category::class),
                'create' => Auth::user()->can('create', Category::class),
            ]
        ],$this->settings('categories')));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Category::class);
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
        $this->authorize('create', Category::class);

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
        $this->authorize('view', $category);

        $query = (new CampaignController)->initQuery();

        return Inertia::render('Categories/Show', array_merge([
            'title' => $category->name,
            'item' =>  CategoryResource::make($category->append(['description'])),
            'items' => CampaignResource::collection($query->where('category_id', $category->id)->orderByDesc('created_at')->paginate()),
            'count' => Campaign::where('category_id', $category->id)->count(),
            'can' => [
                'create_campaign' => Auth::user()->can('create', Campaign::class),
            ]
        ],$this->settings('campaigns')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $this->authorize('update', $category);

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
        $this->authorize('update', $category);

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
    public function destroy($ids)
    {
        foreach (explode(',',$ids) as $id) {
            $this->authorize('delete', Category::find($id));
        }
        DB::beginTransaction();
        try {
            Category::destroy(explode(',',$ids));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        if(url()->previous()==route('categories.show',$ids))
        return Redirect::route('categories.index')->with('success', 'Item deleted successfully');
        else
        return back()->with('success', 'Item deleted successfully');
    }
}
