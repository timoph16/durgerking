<!DOCTYPE html>
<html>
<head>
	<title>Durger King</title>
	<meta charset='utf-8'>
	<link rel="icon" href="static/icon.png" type="image/x-icon">
	<link rel='stylesheet' href='/static/css/style.css'>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
	<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
	<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
</head>
<body>
	<h1>Каталог</h1>
	<div style='display: flex; justify-content: center'>
		<section style='width: 630px;' class='container'>
			<?php
			$prods = [
				'1' => ['Кроссовки 555', 555, 'https://shop4test.intermir.ru/img/85-1.jpg'],
				'2' => ['Кроссовки 666', 666, 'https://shop4test.intermir.ru/img/86-1.jpg'],
				'3' => ['Кроссовки 777', 777, 'https://shop4test.intermir.ru/img/87-1.jpg'],
				'4' => ['Кроссовки 888', 888, 'https://shop4test.intermir.ru/img/88-1.jpg'],
				'5' => ['Кроссовки 999', 999, 'https://shop4test.intermir.ru/img/89-1.jpg'],
				'6' => ['Кроссовки 1000', 1000, 'https://shop4test.intermir.ru/img/90-1.jpg']
			];
			foreach($prods as $id => $prod){
				$cart_info = "<div class='card'>";
				$cart_info += "<img class='card-img' src=$prod[2]>";
				$cart_info += "<h4>$prod[0]</h4>";
				$cart_info += "<p class='price'>Цена: $prod[1] руб.</p>";
				$cart_info += "<p class='size-list'>Размеры в наличии:<br>37 38 39 40 42 43 45</p>";
				$cart_info += "<button data-id='$id' data-name='$prod[0]' data-price=$prod[1]' class='add-to-cart rubik-font-light'>Добавить</button></div>"
			}
			?>
			<div class='korzina-window invs'>
				<div>
					<div class='close-korzina-btn' onclick='close_cart()'><img src='static/svg/close_cart.svg'></div>
					<h2 style='color: black; display: flex; justify-content: center;' class='rubik-font'>Корзина</h2>
					<div class='table' style='width: 560px;'>
						<table id='table' class='korzina-table' style='width: 560px;'>
							<tr class='rubik-font' style='background-color: purple; color: white; height: 40px; font-size: 12px;'>
								<th>Название товара</th>
								<th>Цена</th>
								<th colspan="3">Кол-во</th>
							</tr>
						</table>
					</div>
					<div id='cost'>Общая стоимость: </div>
					<h3 style='display: flex; justify-content: center;' class='rubik-font-black'>Оформление заказа</h2>
					<div class='send-form' style='display: flex; justify-content: center;'>
						<form method='POST' action='send'>
							<input id='hidden_item' type='hidden' name='cart' value='Привет'>
							<input type='text' name='name' placeholder='Имя' class="form-control rubik-font-black"><br>
							<input type='phone' name='phone' placeholder='Телефон' class="form-control rubik-font-black"><br>
							<input type='email' name='email' placeholder='Почта' class="form-control rubik-font-black"><br>
							<input type='submit' value='Отправить заказ' class='send-btn rubik-font-black'>
						</form>
					</div>
					<button style='border: 2px solid;' class='clear-korzina-btn' onclick='clear_cart()'>Очистить корзину</button>
				</div>
			</div>
		</section>
	</div>
	<button class='korzina-btn invs' onclick='open_cart();'>
		<img src='static/svg/shopping_cart.svg'>
	</button>
	<script src='static/js/script.js'></script>
</body>
</html>
