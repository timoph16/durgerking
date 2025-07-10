function checkCart() {
	shoppingCart=document.getElementById('korzina');
	if ((localStorage.getItem("cart") != null) && (localStorage.getItem("cart") != '{}')){
		shoppingCart.style.display = "block";
	} else {
		shoppingCart.style.display = "none";
	}
	//~ alert(localStorage.getItem("cart") == '{}')
}
checkCart();

function close_cart(){
	document.querySelector('.korzina-win').classList.add('invs');
}

function add2cart(id, name, price) {
	cartData = getCartData() || {};
	
	if (cartData.hasOwnProperty(id)) {
		cartData[id][2] += 1;
	} else {
		cartData[id] = [name, price, 1];
	}
	
	if (!setCartData(cartData)) {
		alert("Товар " + name.toUpperCase() + " добавлен в корзину")
		shoppingCart.classList.remove("invs");
	}
	checkCart();
	return cartData;
}

function setCartData(a) {
	localStorage.setItem("cart", JSON.stringify(a));
	return false;
}

function getCartData() {
	return JSON.parse(localStorage.getItem("cart"));
}

function open_cart() {
	document.querySelector('.korzina-win').classList.remove('invs');
	let cartData = getCartData();
	let totalItems = '';
	let totalSum = 0;
	let cartInfo = '';
	if (cartData !== null) {
		totalItems = `<table class='korzina-table'><tr>
		<th width="50%">Наименование</th><th>Цена</th><th colspan=3>кол-во</th></tr>`;
		for (let items in cartData){
			totalItems += "<tr>";
			for (let i = 0; i < cartData[items].length; i++) {
				if (i == 0) {
					totalItems += `<td width="50%" class='kolvo'>${cartData[items][i]}</td>`;
				} else {
					totalItems += `<td width="25%" class='kolvo'>${cartData[items][i]}</td>`;
				}
				cartInfo += `${cartData[items][i]}\t`;
			}
			cartInfo += "\n";
			totalSum += Number(String(cartData[items][1]).split(",").join("")) * cartData[items][2];
			totalItems += "<td class='kolvo columns-del' onclick = delete_item(" + items + ")> - </td>";
			totalItems += "<td class='kolvo columns-del' onclick = add_item(" + items + ")> + </td></tr>";
		}
		totalItems += "</table>";

		document.getElementById("table").innerHTML = totalItems;
		document.getElementById("hidden_item").value = cartInfo + `Общая стоимость: ${totalSum} руб.`
		document.getElementById("cost").innerHTML = `Общая стоимость: ${totalSum} руб.`;
	}
	return totalSum;
}

hidden_item = document.getElementById("hidden_item");
console.log(hidden_item.value);

function delete_item(itemId) {
	let cartData = getCartData();
	if (cartData[itemId][2] == 1) {
		delete cartData[itemId];
	} else {
		cartData[itemId][2] -= 1;
	}
	setCartData(cartData);
	
	if (open_cart() == 0) {
		localStorage.removeItem("cart");
		shoppingCart.style.display = "none";
		document.querySelector('.korzina-win').classList.add('invs');
	}
	
	checkCart();
}

function add_item(itemId) {
	let cartData = getCartData();
	cartData[itemId][2] += 1;
	setCartData(cartData);
	open_cart();
}
