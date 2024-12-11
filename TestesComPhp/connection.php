<?php

    $host = "127.0.0.1";
    $userConn = "root";
    $passwordConn = "";
    $database = "db_dev_central";
    $optionsConn = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    ];

    $conn = new PDO(
        "mysql:host=$host;dbname=$database",
        $userConn,
        $passwordConn,
        $optionsConn
    );