<?php

namespace App\Http\Controllers;

use App\Http\Resources\DonorResource;
use App\Http\Resources\UserResource;
use App\Models\Donor;
use App\Models\User;
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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Users/Index', [
            'title' => 'Users Page',
            'users'=> UserResource::collection(User::orderByDesc('created_at')->paginate(10)),
            'can'=>[
                'viewAny'=> Auth::user()->can('viewAny',User::class),
                'create'=> Auth::user()->can('create',User::class),
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

        return Inertia::render('Users/Create', [
            'title' => 'Create User',
            'can'=>[
                'isAdmin'=>Auth::user()->isAdmin()
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
        $validator = Validator::make($request->all(), [
            'name' => ['required','max:255'],
            'email' => ['required','unique:users,email','email','max:255'],
            'password' => ['required', 'confirmed', Password::min(8)],
            'user_type'=>['required','max:7'],
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
        return Inertia::render('Users/Show', [
            'title' => $user->name,
            'item'=>UserResource::make($user),
            'donors'=>DonorResource::collection(Donor::where('user_id',$user->id)->orderByDesc('created_at')->paginate())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'title' => $user->name,
            'item'=>UserResource::make($user),
            'can'=>[
                'isAdmin'=>Auth::user()->isAdmin()
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
        $validator = Validator::make($request->all(), [
            'name' => ['required','max:255'],
            'email' => ['required','unique:users,email,'.$user->id,'email','max:255'],
            'password' => ['nullable', 'confirmed', Password::min(8)],
            'user_type'=>['required','max:7'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                        ->withErrors($validator)
                        ->withInput();
        }


        $user->name = $request->name;
        $user->email = $request->email;
        $user->user_type = $request->user_type;
        if($user->password) {
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
    public function destroy(User $user)
    {
        DB::beginTransaction();
        try {
            $user->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        return Redirect::route('users.index')->with('success', 'Item deleted successfully');
    }
}
