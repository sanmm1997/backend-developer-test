<?php

namespace App\Traits;

trait ResponseTrait
{

    private static function getResponseFromProcces(bool $statusProcess, $data = []) {
        return response()->json([
            'status' => $statusProcess ? 200 : 500,
            'success' => $statusProcess,
            'message' => $statusProcess ? 'Proceso finalizado correctamente' : 'Ha sucedido un error, vuelva a intentarlo',
            'data' => $data
        ], $statusProcess ? 200 : 500);
    }

}
