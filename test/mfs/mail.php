<?php
$to = "dudarev.anton@gmail.com";
$tema = "Форма обратной связи MFS";
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>";
$message .= "Сообщение: ".$_POST['message']."<br>";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>