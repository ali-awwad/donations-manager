<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTenantIdToAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('tenant')->nullable();
        });
        Schema::table('categories', function (Blueprint $table) {
            $table->string('tenant')->nullable();
        });
        Schema::table('campaigns', function (Blueprint $table) {
            $table->string('tenant')->nullable();
        });
        Schema::table('donations', function (Blueprint $table) {
            $table->string('tenant')->nullable();
        });
        Schema::table('donors', function (Blueprint $table) {
            $table->string('tenant')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('tenant');
        });
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('tenant');
        });
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropColumn('tenant');
        });
        Schema::table('donations', function (Blueprint $table) {
            $table->dropColumn('tenant');
        });
        Schema::table('donors', function (Blueprint $table) {
            $table->dropColumn('tenant');
        });
    }
}
