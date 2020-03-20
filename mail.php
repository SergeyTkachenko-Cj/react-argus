<?php
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$name = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['birthdate'];

$formcontent=" От: $name \n\n Email: $email \n\n Сообщение: $message";
// $recipient = "vkirillov.online@yandex.ru";
$recipient = "tka4inni@gmail.com";
$subject = "Контактная форма";
$mailheader = "From: $mail_head \r\n";

mail($recipient, $subject, $formcontent, $mailheader);
?>