<?php
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$formcontent="Имя: $name \n\n Email: $email \n\n Телефон: $tel";
$recipient = "tka4inni@gmail.com";
$subject = "Регистрация на вебинар 'Антикризисная платформа бизнеса'";
$mailheader = "From: $mail_head \r\n";

mail($recipient, $subject, $formcontent, $mailheader);
?>