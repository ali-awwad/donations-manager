<?php

namespace App\Http\Controllers;

use App\Http\Resources\DonationResource;
use App\Http\Resources\DonorResource;
use App\Http\Resources\UserResource;
use App\Models\Donation;
use App\Models\Donor;
use App\Models\User;
use App\Traits\GenericTableColumns;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DonorController extends Controller
{
    use GenericTableColumns;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Donor::class);

        $query = Donor::orderBy(
            request('order_by') ?? 'created_at',
            request('order_direction') ?? 'desc'
        )

            ->when(request('search'), function ($q) {
                return $q->where('name', 'like', '%' . request('search') . '%');
            });

        if (!Auth::user()->isAdmin()) {
            $query->where('donors.user_id', Auth::id());
        }

        return Inertia::render('Donors/Index', [
            'title' => 'Donors Page',
            'items' => DonorResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Donor::count(),
            'initSearch' => request('search') ?? '',
            'order_by' => request('order_by') ?? 'created_at',
            'order_direction' => request('order_direction') ?? 'desc',
            'columns' => [
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => 'Alias', 'field' => 'alias', 'data_type' => 'text'],
                ['label' => 'Total Donations', 'field' => 'total_donations', 'data_type' => 'text'],
                ['label' => '# Of Donations', 'field' => 'donations_count', 'data_type' => 'text'],
                ['label' => '# of Campaigns', 'field' => 'campaigns_count', 'data_type' => 'text'],
                ['label' => '# of Categories', 'field' => 'categories_count', 'data_type' => 'text'],

            ],
            'filters' => request()->only(['search', 'per_page']),
            'actions' => [
                [
                    'name' => 'destroy',
                    'text' => __('Delete'),
                    'route' => 'donors.destroy',
                    'method' => getRouteMethod('donors.destroy'),
                    'require_selection' => true
                ],
            ],
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Donor::class),
                'create' => Auth::user()->can('create', Donor::class),
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
        $this->authorize('create', Donor::class);

        $query = User::orderByDesc('id');
        if (!Auth::user()->isAdmin()) {
            $query->where('id', Auth::id());
        }

        return Inertia::render('Donors/Create', [
            'title' => 'Add New Donor',
            'selected_user_id' => request('user_id'),
            'users' => UserResource::collection($query->paginate())
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
        $this->authorize('create', Donor::class);

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
            if (!Auth::user()->isAdmin()) {
                $donor->user_id = Auth::id();
            } elseif ($request->user_id) {
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
        $this->authorize('view', $donor);
        $query = (new DonationController)->initQuery();
        return Inertia::render('Donors/Show', array_merge([
            'title' => $donor->name,
            'item' =>  DonorResource::make($donor->append(['remarks'])),
            'items' => DonationResource::collection($query->where('donor_id', $donor->id)->paginate()),
            'count'=> Donation::where('donor_id', $donor->id)->count(),
            'can' => [
                'create_donation' => Auth::user()->can('create', Donation::class),
            ]
        ],$this->settings('donations')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function edit(Donor $donor)
    {
        $this->authorize('update', $donor);

        $query = User::orderByDesc('id');
        if (!Auth::user()->isAdmin()) {
            $query->where('id', Auth::id());
        }

        return Inertia::render('Donors/Edit', [
            'title' => 'Add New Donor',
            'item' => DonorResource::make($donor->append(['remarks'])),
            'users' => UserResource::collection($query->paginate())
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
        $this->authorize('update', $donor);

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
            if (!Auth::user()->isAdmin()) {
                $donor->user_id = Auth::id();
            } elseif ($request->user_id) {
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
    public function destroy($ids)
    {
        foreach (explode(',',$ids) as $id) {
            $this->authorize('delete', Donor::find($id));
        }
        DB::beginTransaction();
        try {
            Donor::destroy(explode(',',$ids));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        if(url()->previous()==route('donors.show',$ids))
        return Redirect::route('donors.index')->with('success', 'Item deleted successfully');
        else
        return back()->with('success', 'Item deleted successfully');
    }
}
