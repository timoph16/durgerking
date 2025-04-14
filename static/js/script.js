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

function add2cart(id, name, price) 
{
	let cart_data = JSON.parse(localStorage.getItem('cart'));
	alert(`Товар ${id} добавлен в корзину`)
	if (localStorage.getItem('cart') == null){
		localStorage.setItem('cart', JSON.stringify({'id': id}));
		
	}
	//~ } else {
		//~ let cart_data = JSON.parse(localStorage.getItem('cart'));
		//~ cart_data[id] = {'name': name, 'price': price}
		//~ localStorage.setItem('cart', JSON.stringify(cart_data[id]));
	//~ }
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
	korzina.classList.remove('invs');
	korzina_window.classList.add('invs');
}

function open_cart(){
	let korzina = document.querySelector('.korzina-btn');
	let korzina_window = document.querySelector('.korzina-window');
	korzina.classList.add('invs');
	korzina_window.classList.remove('invs');
}

function delete_item(id){
	for (x of localStorage.getItem('cart_data').split('\n')){
		console.log(x)
	}
	//~ cart_data.replace()
}

//~ insert_to_table()
`<tr class='rubik-font-light'>
	<td>1</td>
	<td>Кроссовки 555</td>
	<td>555 руб.</td>
	<td>5</td>
	<td class="columns-del" onclick='delete_item(1)'>-</td>
	<td class="columns-del" onclick='add_item(1)'>+</td>
</tr>`


check_cart()
