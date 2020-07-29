<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Pragma: public');
header('Access-Control-Allow-Origin: *');

$mail_head = 'argus.group';
$email = $_POST['email'];
$inn = $_POST['inn'];
$stroy = $_POST['st'];
$proekt = $_POST['pr'];
$izisk = $_POST['iz'];

$subject = "Заказ выписки из СРО с сайта";
$message = "Email: $email\n<br />\n<br />ИНН: $inn\n<br />\n<br />Выписка из СРО Строителей: $stroy шт.\n<br />\n<br />Выписка из СРО Проектировщиков: $proekt шт.\n<br />\n<br />Выписка из СРО Изыскателей: $izisk шт.";
$html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'</body></html>';

//Load Composer's autoloader
require 'mailer/vendor/autoload.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'argus@argus.group';                 // SMTP username
    $mail->Password = 'plSYrr4r';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='argus@argus.group';
    $mail->FromName="Заказ выписки из СРО с сайта";
    $mail->addAddress("115@argus-eko.ru", "АРГУС.ГРУП");     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Заказ выписки из СРО с сайта";
    $mail->Body    = $html;
    $mail->AltBody = $message;
    $mail->send();
    $return = true;
    echo json_encode($return);
    } 
    catch (Exception $e) {
    $return = false;
    echo json_encode($return);
}
?>