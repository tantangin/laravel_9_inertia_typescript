<?php

namespace App\Http\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;


/**
 *
 */
class FileService
{
    static function uploadFile(UploadedFile $file, $prefix = "UPL", $folder = "upload")
    {
        $tanggal = date("Y-m-d");
        $tanggalArray = explode("-", $tanggal);
        $fileName = $prefix . "_" . implode("", $tanggalArray) . date('_His_') . str()->random(3) . "." . $file->extension();
        $file->move(public_path($folder), $fileName);
        return $fileName;
    }
    static function deleteFile(string $file, string  $folder = "upload")
    {
        $file_path =  $folder . "/" . $file;
        if (File::exists($file_path))
            File::delete($file_path);
    }
}
