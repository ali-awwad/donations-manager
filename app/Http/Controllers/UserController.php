<?php

namespace App\Http\Controllers;

use App\Http\Resources\DonorResource;
use App\Http\Resources\UserResource;
use App\Models\Donor;
use App\Models\User;
use App\Traits\GenericTableColumns;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    use GenericTableColumns;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', User::class);

        $query = User::tenant()->orderBy(
            request('order_by') ?? 'created_at',
            request('order_direction') ?? 'desc'
        )
            ->when(request('search'), function ($q) {
                return $q->where('name', 'like', '%' . request('search') . '%')
                    ->orWhere('email', 'like', '%' . request('search') . '%')
                    ->orWhere('tenant', 'like', '%' . request('search') . '%');
            });

        return Inertia::render('Users/Index', array_merge(
            [
                'title' => 'Users Page',
                'items' => UserResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
                'count' => User::count(),
                'can' => [
                    'viewAny' => Auth::user()->can('viewAny', User::class),
                    'create' => Auth::user()->can('create', User::class),
                    'fixTenant' => Auth::user()->isSuperAdmin(),
                ]
            ],
            $this->settings('users')
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', User::class);
        return Inertia::render('Users/Create', [
            'title' => 'Create User',
            'can' => [
                'isAdmin' => Auth::user()->isAdmin()
            ]
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
        $this->authorize('create', User::class);

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'max:255'],
            'email' => ['required', 'unique:users,email', 'email', 'max:255'],
            'password' => ['required', 'confirmed', Password::min(8)],
            'user_type' => ['required', 'max:7'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->user_type = $request->user_type;
        $user->password = Hash::make($request->password);
        $user->save();

        return Redirect::route('users.show', $user)->with('success', 'Item updated successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $this->authorize('view', $user);

        $query = Donor::orderBy(
            request('order_by') ?? 'created_at',
            request('order_direction') ?? 'desc'
        )

            ->when(request('search'), function ($q) {
                return $q->where('name', 'like', '%' . request('search') . '%');
            });

        if (!Auth::user()->isAdmin() && !Auth::user()->isSuperAdmin()) {
            $query->where('donors.user_id', Auth::id());
        }

        return Inertia::render('Users/Show', array_merge([
            'title' => $user->name,
            'item' => UserResource::make($user),
            'count' => Donor::where('user_id', $user->id)->count(),
            'items' => DonorResource::collection($query->where('user_id', $user->id)->orderByDesc('created_at')->paginate())
        ],$this->settings('donors')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->authorize('update', $user);

        return Inertia::render('Users/Edit', [
            'title' => $user->name,
            'item' => UserResource::make($user),
            'can' => [
                'isAdmin' => Auth::user()->isAdmin()
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->authorize('update', $user);

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'max:255'],
            'email' => ['required', 'unique:users,email,' . $user->id, 'email', 'max:255'],
            'password' => ['nullable', 'confirmed', Password::min(8)],
            'user_type' => ['required', 'max:7'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->user_type = $request->user_type;
        if ($request->password) {
            dd($request->password);
            $user->password = Hash::make($request->password);
        }
        $user->save();

        return Redirect::route('users.show', $user)->with('success', 'Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($ids)
    {
        foreach (explode(',',$ids) as $id) {
            $this->authorize('delete', User::find($id));
        }
        DB::beginTransaction();
        try {
            User::destroy(explode(',',$ids));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        if(url()->previous()==route('users.show',$ids))
        return Redirect::route('users.index')->with('success', 'Item deleted successfully');
        else
        return back()->with('success', 'Item deleted successfully');
    }
}
