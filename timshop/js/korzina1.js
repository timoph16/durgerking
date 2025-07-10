function getCartData() {
	return JSON.parse(localStorage.getItem("cart"));
}

function checkCart() {
	if (localStorage.getItem("cart") != null) {
		shoppingCart.style.display = "block";
	} else {
		shoppingCart.style.display = "none";
	}
}
checkCart();

function setCartData(a) {
	localStorage.setItem("cart", JSON.stringify(a));
	return false;
}

function open_cart() {
    let cartData = getCartData(),
		totalItems = '',
		totalSum = 0,
		cartInfo = '';
	if (cartData !== null) {
		totalItems = `<table id="table" class="korzina-table"><tr>
		<th>Наименование</th><th>Цена</th><th colspan="3">Кол-во</th></tr>`;
		for (let items in cartData) {
			totalItems += "<tr>";
			for (let i = 0; i < cartData[items].length; i++) {
				totalItems += `<td>${cartData[items][i]}</td>`;
				cartInfo += `${cartData[items][i]}\t`
			}
			cartInfo += "\n";
			totalSum += Number(String(cartData[items][1]).split(",").join("")) * cartData[items][2];
			totalItems += "<td class = 'kolvo columns-del' onclick = delete_item(" + items + ")> - </td>";
			totalItems += "<td class = 'kolvo columns-del' onclick = add_item(" + items + ")> + </td></tr>";
		}
		totalItems += "</table>";

		document.getElementById("table").innerHTML = totalItems;
		//document.getElementById("cost").innerHTML = `РћР±С‰Р°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ: ${totalSum} СЂСѓР±.`;
		document.getElementById("hidden_cart_item").value = cartInfo + `РћР±С‰Р°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ: ${totalSum} СЂСѓР±.`;
	}
	return totalSum;
}

function add_item(id) {
	let cartData = getCartData();
	cart_data[id][2] += 1;
	setCartData(cart_data);
	openCart();
}

function delete_item(id) {
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
		alert("РљРѕСЂР·РёРЅР° РѕС‡РёС‰РµРЅР°");
		closeWind(true);
	}
}

function close_cart(){
    document.querySelector('.korzina-win').classList.add('invs');
}

function add2cart(){
    this.disabled = true; // Р±Р»РѕРєРёСЂРѕРІР°С‚СЊ РЅР° РІСЂРµРјСЏ РѕРїРµСЂР°С†РёРё
	let cartData = getCartData() || {}, // РїРѕР»СѓС‡РµРЅРёРµ РґР°РЅРЅС‹С… РєРѕСЂР·РёРЅС‹ РёР»Рё СЃРѕР·РґР°РЅРёРµ РЅРѕРІРѕРіРѕ РѕР±СЉРµРєС‚Р°
		itemID = this.dataset.id, // id С‚РѕРІР°СЂР°
		itemName = this.dataset.name,
		itemPrice = this.dataset.price;

	if (cartData.hasOwnProperty(itemID)) { // РµСЃР»Рё С‚РѕРІР°СЂ СѓР¶Рµ РІ РєРѕСЂР·РёРЅРµ, С‚Рѕ РґРѕР±Р°РІР»РµС‚ +1 Рє РµРіРѕ РєРѕР»-РІСѓ
		cartData[itemID][2] += 1;
	} else { // РёРЅР°С‡Рµ РґРѕР±Р°РІР»СЏРµРј РІ РѕР±СЉРµРєС‚
		cartData[itemID] = [itemName, itemPrice, 1];
	}
	// РѕР±РЅРѕРІР»СЏРµРј РґР°РЅРЅС‹Рµ РІ LocalStorage
	if (!setCartData(cartData)) {
		this.disabled = false; // РєРЅРѕРїРєР° СЂР°Р·Р±Р»РѕРєРёСЂРѕРІР°РЅР°
		alert("Товар " + itemName.toUpperCase() + " Добавлен в корзину")
		shoppingCart.style.display = "block";
	}
	return cartData;
}

function clearEverything() {
	if (confirm("Р’С‹ С‚РѕС‡РЅРѕ С…РѕС‚РёС‚Рµ РїРѕР»РЅРѕСЃС‚СЊСЋ РѕС‡РёСЃС‚РёС‚СЊ РєРѕСЂР·РёРЅСѓ?")) {
		localStorage.removeItem("cart");
		alert("РљРѕСЂР·РёРЅР° РїРѕР»РЅРѕСЃС‚СЊСЋ РѕС‡РёС‰РµРЅР°");
		shoppingCart.style.display = "none";
		closeWind(true);
	}
}