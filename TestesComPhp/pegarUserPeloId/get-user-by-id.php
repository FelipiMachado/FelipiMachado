<?php
if (!isset($_GET['user_id'])) {
    echo json_encode([
        "type" => "Error",
        "message" => "user_id não fornecido"
    ]);
    exit;
}

$idUser = $_GET['user_id'];  

require '../connection.php';

$query = 'SELECT * FROM users WHERE user_id = :user_id';
$stmt = $conn->prepare($query);
$stmt->bindParam('user_id', $idUser);
$stmt->execute();

if ($stmt->rowCount() == 1) {
    $response = [
        "type" => "Success",
        "data" => $stmt->fetch()
    ];
    echo json_encode($response);
} else {
    $response = [
        "type" => "Error",
        "message" => "Usuário não encontrado"
    ];
    echo json_encode($response);
}

exit;
