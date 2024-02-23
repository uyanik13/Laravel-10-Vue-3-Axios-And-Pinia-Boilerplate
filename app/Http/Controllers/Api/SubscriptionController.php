<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

/**
 * @OA\Tag(
 *     name="SubscriptionController",
 *     description="API Endpoints for Subscriptions"
 * )
 */
class SubscriptionController extends ApiController
{
    protected $service;

    public function __construct()
    {
        //Define Service
    }


    /**
     * @OA\Get(
     *     path="/api/v1/subscription",
     *     operationId="getAllSubscriptions",
     *     tags={"SubscriptionController"},
     *     summary="Get all subscriptions",
     *     description="Returns all subscriptions",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent()
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error",
     *         @OA\JsonContent()
     *     )
     * )
     */
    public function index(Request $request)
    {
        return $this->responseSuccess('All Subscriptions are listed', ['data' => []]);
    }

     /**
     * @OA\Post(
     *     path="/api/v1/subscription",
     *     operationId="createSubscription",
     *     tags={"SubscriptionController"},
     *     summary="Create a new subscription",
     *     security={{"jwt":{}}},
     *     description="Creates a new subscription and returns it",
     *     @OA\Response(
     *         response=201,
     *         description="Category Created Successfully",
     *         @OA\JsonContent()
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error",
     *         @OA\JsonContent()
     *     )
     * )
     */
    public function store(Request $request)
    {
        return $this->responseSuccess('Subscription has been created', ['data' => $request->all()]);
    }

}
