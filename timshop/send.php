<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$emailCl = $_POST['email'];}
if (isset($_POST['cart'])) {$cart = $_POST['cart'];}
/* Сюда впишите свою эл. почту */
$myaddress1 = $emailCl; // кому отправляем


//Письмо в магазин с заказом

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes1 = "Заказ\n
==========================================\n
Имя: $name\n
Контакт: $phone\n
E-mail: $emailCl\n
==========================================\n
Данные корзины\n
$cart
";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Order'; //сабж
$email=$emailCl; // от кого
$send=mail($myaddress1,$sub,$mes1,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

//Письмо отправителю о заказе

$myaddress2 = $emailCl; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes2 = "Вы отправили заказ в Durger King\n
==========================================\n
Имя: $name\n
Контакт: $phone\n
E-mail: $emailCl\n
==========================================\n
Данные корзины\n
$cart
";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Order'; //сабж
$email='shop@intermir.ru'; // от кого
$send=mail($myaddress2,$sub,$mes2,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=https://timoph16.github.io/durgerking');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Привет</title>
    <script type="text/javascript">
        setTimeout("location.replace('https://timoph16.github.io/durgerking')", 3000);
    </script>
</head>
<body>
    <div >
        <h1>Спасибо!<br>В ближайшее время с Вами свяжется представитель магазина по поводу оформления покупки. Ждите!</h1>
    </div>
</body>
</html>
