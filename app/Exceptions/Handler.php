<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Prepare exception for rendering.
     *
     * @param  \Throwable  $e
     * @return \Throwable
     */
    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);
        $titles = [
            503 => '503 Service Unavailable',
            500 => '500 Server Error',
            404 => '404 Page Not Found',
            403 => '403 Forbidden',
        ];
        $messages = [
            503 => 'Sorry, we are doing some maintenance. Please check back soon.',
            500 => 'Whoops, something went wrong on our servers.',
            404 => 'Sorry, the page you are looking for could not be found.',
            403 => 'Sorry, you are forbidden from accessing this page.',
        ];
        if (!app()->environment(['local', 'testing']) && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
            return Inertia::render('Errors/Generic', ['status' => $response->getStatusCode(), 'title' => $titles[$response->getStatusCode()], 'message'=>$messages[$response->getStatusCode()]])
                ->toResponse($request)
                ->setStatusCode($response->getStatusCode());
        } else
        if ($response->getStatusCode() === 419) {
            return back()->with([
                'message' => 'The page expired, please try again.',
            ]);
        } else if ($response->getStatusCode() === 429) {
            return back()->with([
                'message' => 'Too Many Requests. please try again later',
            ]);
        }

        return $response;
    }
}
