<?php

namespace App\Http\Controllers;

use App\Http\Resources\DonationResource;
use App\Http\Resources\DonorResource;
use App\Http\Resources\UserResource;
use App\Models\Donation;
use App\Models\Donor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DonorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny',Donor::class);

        return Inertia::render('Donors/Index', [
            'title' => 'Donors Page',
            'donors' => DonorResource::collection(Donor::orderByDesc('created_at')->paginate()),
            'can'=>[
                'viewAny'=> Auth::user()->can('viewAny',Donor::class),
                'create'=> Auth::user()->can('create',Donor::class),
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
        $this->authorize('create',Donor::class);

        return Inertia::render('Donors/Create', [
            'title' => 'Add New Donor',
            'selected_user_id'=>request('user_id'),
            'users'=>UserResource::collection(User::orderByDesc('id')->paginate())
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
        $this->authorize('create',Donor::class);

        $this->validate($request, [
            'donor_name' => 'required|max:255',
            'alias' => 'required|max:555|string',
            'remarks' => 'required|max:3000',
            'user_id' => 'nullable|exists:users,id',
        ]);
        DB::beginTransaction();
        try {
            $donor = new Donor();
            $donor->name = $request->donor_name;
            $donor->remarks = $request->remarks;
            $donor->alias = $request->alias;
            if($request->user_id) {
                $donor->user_id = $request->user_id;
            }
            $donor->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('donors.show', $donor)->with('success', 'Item created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function show(Donor $donor)
    {
        $this->authorize('view',$donor);

        return Inertia::render('Donors/Show', [
            'title' => $donor->name,
            'donor' =>  DonorResource::make($donor->append(['remarks'])),
            'items' => DonationResource::collection(Donation::where('donor_id',$donor->id)->paginate())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function edit(Donor $donor)
    {
        $this->authorize('update',$donor);

        return Inertia::render('Donors/Edit', [
            'title' => 'Add New Donor',
            'item' => DonorResource::make($donor->append(['remarks'])),
            'users'=>UserResource::collection(User::orderByDesc('id')->paginate())
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donor $donor)
    {
        $this->authorize('update',$donor);

        $this->validate($request, [
            'donor_name' => 'required|max:255',
            'alias' => 'required|max:555|string',
            'remarks' => 'required|max:3000',
            'user_id' => 'nullable|exists:users,id',
        ]);
        DB::beginTransaction();
        try {
            $donor->name = $request->donor_name;
            $donor->remarks = $request->remarks;
            $donor->alias = $request->alias;
            if($request->user_id) {
                $donor->user_id = $request->user_id;
            }

            $donor->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('donors.show', $donor)->with('success', 'Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donor $donor)
    {
        $this->authorize('delete',$donor);

        DB::beginTransaction();
        try {
            $donor->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        return Redirect::route('donors.index')->with('success', 'Item deleted successfully');
    }
}
