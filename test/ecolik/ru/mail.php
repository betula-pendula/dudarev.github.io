<?php
if (isset($_POST['g-recaptcha-response'])){
    $url_to_google_api = "https://www.google.com/recaptcha/api/siteverify";
    $secret_key = '6Leu938UAAAAANACgoNGhWxHF4nITB2rF1sVqXty';
    $query = $url_to_google_api . '?secret=' . $secret_key . '&response=' . $_POST['g-recaptcha-response'] . '&remoteip=' . $_SERVER['REMOTE_ADDR'];
    $data = json_decode(file_get_contents($query));
    if ($data->success) {
        // Продолжаем работать с данными для авторизации из POST массива
        $to = "gb@ecolik.net"; // емайл получателя данных из формы 
        $tema = "Форма обратной связи"; // тема полученного емайла 
        $message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
        $message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
        $headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
        mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
    } else {
        exit('Извините но похоже вы робот \(0_0)/');
    }
}else{
    exit('Вы не прошли валидацию reCaptcha');
}
?>