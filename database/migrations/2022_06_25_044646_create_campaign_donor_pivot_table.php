<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCampaignDonorPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campaign_donor', function (Blueprint $table) {
            $table->unsignedBigInteger('campaign_id')->index();
            $table->foreign('campaign_id')->references('id')->on('campaigns')->onDelete('cascade');
            $table->unsignedBigInteger('donor_id')->index();
            $table->foreign('donor_id')->references('id')->on('donors')->onDelete('cascade');
            $table->primary(['campaign_id', 'donor_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('campaign_donor');
    }
}
