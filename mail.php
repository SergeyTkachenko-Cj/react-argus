<?php
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$email = $_POST['email'];
$inn = $_POST['inn'];
$stroy = $_POST['st'];
$proekt = $_POST['pr'];
$izisk = $_POST['iz'];

$formcontent=" Email: $email \n\n ИНН: $inn \n\n Выписка из СРО Строителей: $stroy шт. \n\n Выписка из СРО Проектировщиков: $proekt шт. \n\n Выписка из СРО Изыскателей: $izisk шт.";
// $recipient = "vkirillov.online@yandex.ru";
$recipient = "tka4inni@gmail.com";
$subject = "Заказ выписки из СРО с сайта";
$mailheader = "From: $mail_head \r\n";

mail($recipient, $subject, $formcontent, $mailheader);
?>