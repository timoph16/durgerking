let shop_card=document.querySelector('.card');
shop_info = '';
//alert(shop_card.outerHTML)
posts = [
	{'id': 0, 'name': 'Кроссовки 555', 'price': 555, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 5, 'image': 'https://shop4test.intermir.ru/img/85-1.jpg'},
	{'id': 1, 'name': 'Кроссовки 666', 'price': 666, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 6, 'image': 'https://shop4test.intermir.ru/img/86-1.jpg'},
	{'id': 2, 'name': 'Кроссовки 777', 'price': 777, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 7, 'image': 'https://shop4test.intermir.ru/img/87-1.jpg'},
	{'id': 3, 'name': 'Кроссовки 888', 'price': 888, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 8, 'image': 'https://shop4test.intermir.ru/img/88-1.jpg'},
	{'id': 4, 'name': 'Кроссовки 999', 'price': 999, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 9, 'image': 'https://shop4test.intermir.ru/img/89-1.jpg'},
	{'id': 5, 'name': 'Кроссовки 1000', 'price': 1000, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/90-1.jpg'},
	{'id': 6, 'name': 'Кроссовки 1001', 'price': 1001, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/91-1.jpg'},
	{'id': 7, 'name': 'Кроссовки 1002', 'price': 1002, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/92-1.jpg'},
	{'id': 8, 'name': 'Кроссовки 1003', 'price': 1003, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/93-1.jpg'},
	{'id': 9, 'name': 'Кроссовки 1004', 'price': 1004, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/94-1.jpg'},
	{'id': 10, 'name': 'Кроссовки 1005', 'price': 1005, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/95-1.jpg'},
	{'id': 11, 'name': 'Кроссовки 1006', 'price': 1006, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://test.delotime.online/img/krossovki/96-1.webp'}
	
];

for (let i = 0; i<12; i++){
	shop_info += `
	<div class='card'>
	<img class='card-img' src=`+posts[i]["image"]+`>
	<h4>`+posts[i]["name"]+`</h5>
	<p class='price'>Цена: `+posts[i]["price"]+` руб.</p>
	<p class='size-list'>Размеры в наличии:<br>37 38 39 40 42 43 45</p>
	<button data-id=`+posts[i]["id"]+` data-name='`+posts[i]["name"]+`' data-price=`+posts[i]["price"]+` class='add-to-cart rubik-font-light'>Добавить</button>
	</div>`
}
//console.log(shop_info);
shop_card.outerHTML = shop_info
//~ `<div class='card'>
	//~ <img class='card-img' src='https://shop4test.intermir.ru/img/85-1.jpg'>
	//~ <h4>555</h5>
	//~ <p class='price'>Цена: 555 руб.</p>
	//~ <p class='size-list'>Размеры в наличии:<br>37 38 39 40 42 43 45</p>
	//~ <button data-id="1" data-name="555" data-price="555" class='add-to-cart rubik-font-light'>Добавить</button>
//~ </div>`



function insert_to_table(id, name, price, count){
	let cart_table = document.querySelector('.korzina-table');
	content = `
	<tr class='rubik-font-light'>
		<td>${id}</td>
		<td>${name}</td>
		<td>${price} руб.</td>
		<td>${count}</td>
		<td class="columns-del" onclick='delete_item()'>-</td>
		<td class="columns-del" onclick='add_item()'>+</td>
	</tr>
	`
	cart_table.innerHTML.replace('</tbody>', `${content}</tbody>`);
}

function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(a) {
	localStorage.setItem("cart", JSON.stringify(a));
	return false;
}

let btns = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', add2cart);
}

function add2cart(){
	this.disabled = false;
	let cart_data = getCartData() || {},
		itemID = this.dataset.id,
		itemName = this.dataset.name,
		itemPrice = this.dataset.price;

	if (cart_data.hasOwnProperty(itemID)) {
		cart_data[itemID][2] += 1;
	} else {
		cart_data[itemID] = [itemName, itemPrice, 1];
	}
	//~ alert(itemID);
	//~ alert(itemName);
	//~ alert(itemPrice);
	setCartData(cart_data);
	check_cart();
}

function check_cart(){
	let korzina = document.querySelector('.korzina-btn')
	if (localStorage.getItem('cart') == null){
		korzina.classList.add('invs');
	} else {
		korzina.classList.remove('invs');
	}

}

function close_cart(){
	let korzina = document.querySelector('.korzina-btn');
	let korzina_window = document.querySelector('.korzina-window');
	//~ korzina.classList.remove('invs');
	check_cart();
	korzina_window.classList.add('invs');
}

function open_cart(){
	let korzina = document.querySelector('.korzina-btn');
	let korzina_window = document.querySelector('.korzina-window');
	let cart_data = getCartData(),
		totalItems = '',
		totalSum = 0,
		cartInfo = '';
	if (cart_data !== null) {
		totalItems = `
		<table class='korzina-table' style='width: 560px;'>
			<tr class='rubik-font' style='background-color: purple; color: white; height: 40px; font-size: 12px;'>
				<th>Название товара</th>
				<th>Цена</th>
				<th colspan="3">Кол-во</th>
			</tr>`;
		for (let items in cart_data) {
			uno = [', ', 'руб. ', 'шт.']
			totalItems += "<tr class='rubik-font-light'>";
			for (let i = 0; i < cart_data[items].length; i++) {
				totalItems += `<td>${cart_data[items][i]}</td>`;
				cartInfo += `${cart_data[items][i]} ${uno[i]}`
			}
			cartInfo += "\n";
			totalSum += Number(String(cart_data[items][1]).split(",").join("")) * cart_data[items][2];
			totalItems += "<td class = 'columns-del' onclick = delete_item(" + items + ")>-</td>";
			totalItems += "<td class = 'columns-del' onclick = add_item(" + items + ")>+</td></tr>";
		}
		totalItems += "</table>";

		document.getElementById("table").innerHTML = totalItems;
		document.getElementById("hidden_item").value = cartInfo + `Общая стоимость: ${totalSum} руб.`
	}
	korzina.classList.add('invs');
	korzina_window.classList.remove('invs');
	return totalSum;
}

function add_item(itemId) {
	let cart_data = getCartData();
	cart_data[itemId][2] += 1;
	setCartData(cart_data);
	console.log(open_cart());
	document.getElementById('cost').innerHTML = `Общая стоимость: ${open_cart()} руб.`
	open_cart();
}

function delete_item(itemId) {
	let cart_data = getCartData();
	if (cart_data[itemId][2] == 1) {
		delete cart_data[itemId];
	} else {
		cart_data[itemId][2] -= 1;
	}
	setCartData(cart_data);

	if (open_cart() == 0) {
		localStorage.removeItem("cart");
		check_cart();
	}
	document.getElementById('cost').innerHTML = `Общая стоимость: ${open_cart()} руб.`
}

function clear_cart(){
	localStorage.removeItem('cart');
	close_cart();
	check_cart();
}

`<tr class='rubik-font-light'>
	<td>1</td>
	<td>Кроссовки 555</td>
	<td>555 руб.</td>
	<td>5</td>
	<td class="columns-del" onclick='delete_item(1)'>-</td>
	<td class="columns-del" onclick='add_item(1)'>+</td>
</tr>`

document.getElementById('cost').innerHTML = `Общая стоимость: ${open_cart()} руб.`

close_cart();
check_cart();
