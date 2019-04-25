<?php 
 
$sendto   = "info@dotsensorium.com"; // почта, на которую будет приходить письмо
$usermail = $_POST['email-mane']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

 
// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "</body></html>";
 
// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<center><img src='images/spasibo.png'></center>";
} else {
    echo "<center><img src='images/ne-tpravleno.png'></center>";
}
 
?>

<head>
	<meta http-equiv="Refresh" content="4; url=http://dotsensorium.com/">
</head>