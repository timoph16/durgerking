let products = [
	{id: '1', name: 'Футболка ТВОЕ x OZON (Микробы)', price: 730, img: "футболка x ozon.webp"},
	{id: '2', name: 'Футболка ТВОЕ x OZON (Велосипед)', price: 730, img: "7590486824.webp"},
	{id: '3', name: 'Футболка ТВОЕ (Fresh Mango)', price: 730, img: "7631416658.webp"},
	{id: '4', name: 'Футболка ТВОЕ (Бежевый)', price: 730, img: "7402269289.webp"},
	{id: '5', name: 'Футболка ТВОЕ (Michelangelo)', price: 720, img: "7304017794.webp"},
	{id: '6', name: 'Футболка ТВОЕ (Cool Summer)', price: 720, img: "7609594750.webp"},
	{id: '7', name: 'Футболка ТВОЕ (Holiday Club)', price: 720, img: "7612926786.webp"},
	{id: '8', name: 'Футболка Gloria Jeans (Бежевая без принта)', price: 620, img: "7541694893.webp"},
	{id: '9', name: 'Футболка Gloria Jeans (Rock Start)', price: 620, img: "7342345705.webp"},
	{id: '9', name: 'Футболка ТВОЕ x OZON (Пломбир)', price: 620, img: "7587053579.webp"}
];

container = document.querySelector('.container');
cards_data = ''
for (p of products){
	cards_data += "<div class='card'>"
	cards_data += "<img class='product-img' src='img/products/"+p.img+"'>"
	cards_data += "<h3 class='Rubik' class='card-title'>"+p.name+"</h3>"
	cards_data += "<p class='Rubik'>Цена: "+p.price+" руб.</p>"
	cards_data += "<div style='display:flex;justify-content: center;'>"
	cards_data += "<button onclick=\"add2cart("+p.id+", '"+p.name+"', "+p.price+")\" class='btn2cart'>В корзину</button>"
	cards_data += "</div>"
	cards_data += "</div>";
}
container.innerHTML = cards_data;





