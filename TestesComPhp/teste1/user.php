<?php
//$id_user = $_GET ?? NULL;
require '../connection.php';


$query = "SELECT * FROM users";
$stmt = $conn -> prepare($query);
$stmt -> execute();

if($stmt -> rowCount() > 0){
    $response = [
        "type" => "Success",
        "data" => $stmt -> fetchAll()
    ];
    echo json_encode($response);
    exit;
}

if($stmt -> rowCount() == 0){
    $response = [
        "type" => "error",
        "message" => "não foram encontrados usuarios cadastrados!"
    ];
    echo json_encode($response);
    exit;
}