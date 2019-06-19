<?php
if(isset($_POST['submit'])){
$to = "dudarev.anton@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$name = $_POST['name'];
$subject = "Форма отправки сообщений с сайта";
$message = $name . " оставил сообщение:" . "\n\n" . $_POST['message'];
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",1000);
</script>