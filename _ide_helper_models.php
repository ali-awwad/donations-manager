<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Campaign
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property int $target
 * @property int $category_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $tenant
 * @property-read \App\Models\Category|null $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Donation[] $donations
 * @property-read int|null $donations_count
 * @property-read mixed $created_at_readable
 * @method static \Database\Factories\CampaignFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign newQuery()
 * @method static \Illuminate\Database\Query\Builder|Campaign onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign pinId(int $id)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign query()
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereTarget($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereTenant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Campaign whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Campaign withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Campaign withoutTrashed()
 */
	class Campaign extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property string $color
 * @property string $slug
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $tenant
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Campaign[] $campaigns
 * @property-read int|null $campaigns_count
 * @property-read mixed $created_at_readable
 * @method static \Database\Factories\CategoryFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Query\Builder|Category onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Category pinId(int $id)
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereTenant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Category withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Category withoutTrashed()
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Comment
 *
 * @property int $id
 * @property string $body
 * @property string|null $commentable_type
 * @property int|null $commentable_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read mixed $created_at_readable
 * @method static \Illuminate\Database\Eloquent\Builder|Comment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Comment newQuery()
 * @method static \Illuminate\Database\Query\Builder|Comment onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Comment query()
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereCommentableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereCommentableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Comment whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Comment withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Comment withoutTrashed()
 */
	class Comment extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Donation
 *
 * @property int $id
 * @property string $uuid
 * @property int $amount
 * @property int $campaign_id
 * @property int $donor_id
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $donation_date
 * @property string|null $tenant
 * @property-read \App\Models\Campaign|null $campaign
 * @property-read \App\Models\Donor|null $donor
 * @property-read mixed $created_at_readable
 * @method static \Database\Factories\DonationFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Donation newQuery()
 * @method static \Illuminate\Database\Query\Builder|Donation onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Donation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereCampaignId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereDonationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereDonorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereTenant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donation whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|Donation withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Donation withoutTrashed()
 */
	class Donation extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Donor
 *
 * @property int $id
 * @property string $name
 * @property string|null $alias
 * @property string|null $remarks
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string|null $tenant
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Campaign[] $campaigns
 * @property-read int|null $campaigns_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Category[] $categories
 * @property-read int|null $categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Donation[] $donations
 * @property-read int|null $donations_count
 * @property-read mixed $created_at_readable
 * @property-read \App\Models\User|null $user
 * @method static \Database\Factories\DonorFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Donor newQuery()
 * @method static \Illuminate\Database\Query\Builder|Donor onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Donor pinId(int $id)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor query()
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereAlias($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereRemarks($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereTenant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Donor whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|Donor withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Donor withoutTrashed()
 */
	class Donor extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string $user_type
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string|null $tenant
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Donor[] $donors
 * @property-read int|null $donors_count
 * @property-read mixed $created_at_readable
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|User admin()
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User member()
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Query\Builder|User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|User orderByRequest($orderBy, $direction)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User superAdmin()
 * @method static \Illuminate\Database\Eloquent\Builder|User tenant()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTenant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUserType($value)
 * @method static \Illuminate\Database\Query\Builder|User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|User withoutTrashed()
 */
	class User extends \Eloquent {}
}

