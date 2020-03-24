<?php
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$email = $_POST['email'];
$inn = $_POST['inn'];
$stroy = $_POST['СРО Строителей'];
$proekt = $_POST['СРО Проектировщиков'];
$izisk = $_POST['СРО Изыскателей'];

$formcontent=" Email: $email \n\n ИНН: $inn \n\n СРО Строителей: $stroy \n\n СРО Проектировщиков: $proekt \n\n СРО Изыскателей: $izisk";
// $recipient = "vkirillov.online@yandex.ru";
$recipient = "tka4inni@gmail.com";
$subject = "Контактная форма";
$mailheader = "From: $mail_head \r\n";

mail($recipient, $subject, $formcontent, $mailheader);
?>