<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

/**
 * @OA\Info(
 *     title="Api Documentation",
 *     version="1.0.0",
 *     description="Api Documentation",
 * )
 */
abstract class ApiController extends Controller
{
    /**
     * Returns a generic success (200) JSON response.
     *
     * @param  string $message
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseSuccess($message = 'Success.', $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        } else {

            return response()->json([
                'status' => 200,
                'success' => true,
                'message' => $message,
                'data' => $data,
            ], 200);
        }
    }

    /**
     * Returns a resource updated success message (200) JSON response.
     *
     * @param  string $message
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseResourceUpdated($message = 'Resource updated.', $data = null)
    {

        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        return response()->json([
            'status' => 200,
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], 201);
    }

    /**
     * Returns a resource deleted (204) JSON response.
     *
     * @param  string $message
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseResourceDeleted($message = 'Resource deleted.', $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }


        return response()->json([
            'status' => 201,
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], 201);
    }

    /**
     * Returns an unauthorized (401) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseUnauthorized($errors = ['Unauthorized.'], $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        $response = [
            'status' => 401,
            'success' => false,
            'errors' => $errors,
            'data' => $data,
        ];

        return response()->json($response, 401);
    }

    /**
     * Returns an unprocessable entity (422) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseUnprocessable($errors, $data = null)
    {
    if ($data instanceof \Illuminate\Http\JsonResponse) {
        return $data;
    }
    $errorMessage = '';
    foreach ($errors as $field => $message) {
        if (is_array($message)) {
            $errorMessage .= $message[0] . ' ';
        } else {
            $errorMessage .= $message . ' ';
        }
    }
    $errorMessage = trim($errorMessage);
    $response = [
        'status' => 422,
        'success' => false,
        'errors' => $errors,
        'message' => $errorMessage ?: 'Unprocessable entity.', // Use the dynamic error message or a default one
        'data' => $data,
    ];
    return response()->json($response, 422);
    }

    /**
     * Returns a server error (500) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseServerError($errors = ['Server error.'], $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        $response = [
            'status' => 500,
            'success' => false,
            'errors' => $errors,
            'data' => $data,
        ];

        return response()->json($response, 500);
    }

    /**
     * Returns a not found (404) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseNotFound($errors = ['Not found.'], $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        $response = [
            'status' => 404,
            'success' => false,
            'errors' => $errors,
            'data' => $data,
        ];

        return response()->json($response, 404);
    }

    /**
     * Returns a forbidden (403) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */

    public function responseForbidden($errors = ['Forbidden.'], $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        $response = [
            'status' => 403,
            'success' => false,
            'errors' => $errors,
            'data' => $data,
        ];

        return response()->json($response, 403);
    }

    /**
     * Returns a bad request (400) JSON response.
     *
     * @param  array $errors
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseBadRequest($errors = ['Bad request.'], $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        $response = [
            'status' => 400,
            'success' => false,
            'errors' => $errors,
            'data' => $data,
        ];

        return response()->json($response, 400);
    }

    /**
     * Returns a created (201) JSON response.
     *
     * @param  string $message
     * @param  mixed $data
     * @return JsonResponse
     */
    public function responseCreated($message = 'Resource created.', $data = null)
    {
        if ($data instanceof \Illuminate\Http\JsonResponse) {
            return $data;
        }

        return response()->json([
            'status' => 201,
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], 201);
    }
}
