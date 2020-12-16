<?php
header('Access-Control-Allow-Origin: *');

$pass = test_input($_POST['pass']);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($pass !== 'argusforever') {
    header('HTTP/1.1 500 Internal Server Booboo');
    header('Content-Type: application/json; charset=UTF-8');
}
?>