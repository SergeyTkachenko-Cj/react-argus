<?php
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$email = $_POST['email'];
$inn = $_POST['inn'];
$stroy = $_POST['st'];
$proekt = $_POST['pr'];
$izisk = $_POST['iz'];
$formcontent =" Email: $email \n\n ИНН: $inn \n\n Выписка из СРО Строителей: $stroy шт. \n\n Выписка из СРО Проектировщиков: $proekt шт. \n\n Выписка из СРО Изыскателей: $izisk шт.";
$recipient = "tka4inni@gmail.com";
$subject = "Заказ выписки из СРО с сайта";

$headerFields = array(
    "From: {$mail_head}",
    "MIME-Version: 1.0",
    "Content-Type: text/html;charset=utf-8"
);

$mail_sent = mail($recipient, $subject, $formcontent, implode("\r\n", $headerFields));

// $headers= "MIME-Version: 1.0\r\n";
// $headers .= "Content-type: text/html; charset=utf-8";
// $mail_head = 'argus.group';
// $email = $_POST['email'];
// $inn = $_POST['inn'];
// $stroy = $_POST['st'];
// $proekt = $_POST['pr'];
// $izisk = $_POST['iz'];

// $formcontent=" Email: $email \n\n ИНН: $inn \n\n Выписка из СРО Строителей: $stroy шт. \n\n Выписка из СРО Проектировщиков: $proekt шт. \n\n Выписка из СРО Изыскателей: $izisk шт.";
// $recipient = "tka4inni@gmail.com";
// $subject = "Заказ выписки из СРО с сайта";
// $mailheader = "From: $mail_head \r\n";

// mail($recipient, $subject, $formcontent, $mailheader, $headers);
?>