<!DOCTYPE html>
<html>
<head>
	<title>Викторина</title>
	<meta charset='utf-8'>
</head>
<body>
	<div class='search-entry'>
		<h1>Поиск</h1>
	</div>
	<div class='search-entry'>
		<input id="entry" onchange="on_change()" class='search-entry-text' type="text">
	</div>
	<div class='search-entry'>
		<h4>Сортировать по</h4>
	</div>
	<div class='sort-toolbar'>
		<button class="sort-prop is-active" onclick="sort_values('id', 0)">ID</button>
		<button class="sort-prop" onclick="sort_values('title', 1)">Названию</button>
		<button class="sort-prop" onclick="sort_values('code', 2)">Коду</button>
	</div>
<!--
	<button class="sort-prop" onclick="sort_values('cnt', 3)">Количеству вопросов</button>
-->
	<?php
		$filename = 'test_hello.txt';
		$file = fopen($filename, 'r');
		if ($file) {
			$content = fread($file, filesize($filename)); // Читаем содержимое файла
			fclose($file); // Закрываем файл
			echo $content;
		} else {
			echo "Не удалось открыть файл.";
		}
		
	?>
	
	<div class='search-entry'>
		<div id='stol' class='test-cards-list'>
		</div>
	</div>
	<script src='test_list.js'></script>
	<script>
		const fs = require("fs");
		const data1 = "Hello Node.js\n";
		fs.writeFile("hello2.txt", data, function(error){
			if(error){  // если ошибка
				return console.log(error);
			}
			console.log("Файл успешно записан");
		});
		
		
		let entry = document.getElementById('entry');
		function on_change(){
			power_off();
			empty_list = '';
			//~ alert();
			for (i=0; i<data.length; i++){
				if (data[i].title.includes(entry.value)){
					let id = data[i].id;
					let title = data[i].title;
					let count = data[i].len;
					let code = data[i].code;
					let time = data[i].time;
					empty_list += "<div class='test-card'><h2 class='test-title'>"+title+"</h2><div style='display: flex; justify-content: center; flex-direction: row;'>";
					empty_list += "<span class='test-table-row'><p>ID: "+id+"</p><p>Всего вопросов: "+count+"</p></span>";
					empty_list += "<span class='test-table-row'><p>Код: "+code+"</p><p>Время: "+time+"</p></span></div></div>";
				}
			}
			document.getElementById('stol').innerHTML = empty_list;
			return document.getElementById('stol').innerHTML;
			//~ console.log("OC: "+navigator.userAgent); // .includes('Windows NT'))
			//~ console.log("Язык: "+navigator.language);
		}
		
		function sort_values(key, id){
			power_off();
			entry.value = "";
			
			//~ console.log(id);
			document.querySelectorAll('.sort-prop')[id].classList.add('is-active');
			empty_list = [];
			sarancha = "{"
			for (i=0; i<data.length; i++){
				if (key == 'id'){
					sarancha += '"'+data[i].id+'": '+JSON.stringify(data[i]).replaceAll(',', ', ').replaceAll(':', ': ');
					empty_list.push(data[i].id);
				} else if (key == 'title'){
					sarancha += '"'+data[i].title+'": '+JSON.stringify(data[i]).replaceAll(',', ', ').replaceAll(':', ': ');
					empty_list.push(data[i].title);
				} else if (key == 'code'){
					sarancha += '"'+data[i].code+'": '+JSON.stringify(data[i]).replaceAll(',', ', ').replaceAll(':', ': ');
					empty_list.push(data[i].code);
				}
				
				if (i != data.length-1){
					sarancha += ", ";
				} else if (i == data.length-1){
					sarancha += "}";
				}
			}
			//~ for (dolg of ['id', 'title', 'code']){
				//~ sarancha = sarancha.replaceAll('"'+dolg+'"', dolg);
			//~ }
			dict_list = []
			empty_list.sort();
			for (empty of empty_list){
				dict_list.push(JSON.parse(sarancha)[empty]);
			}
			
			update_list(dict_list);
		}
		
		console.log('Привет'.toLowerCase());
		
		function power_off(){
			props = document.querySelectorAll('.sort-prop');
			for (prop of props){
				prop.classList.remove('is-active');
			}
		}
		
		function update_list(data){
			empty_list = ''
			for (i=0; i<data.length; i++){
				let id = data[i].id;
				let title = data[i].title;
				let count = data[i].len;
				let code = data[i].code;
				let time = data[i].time;
				empty_list += "<div class='test-card'><h2 class='test-title'>"+title+"</h2><div style='display: flex; justify-content: center; flex-direction: row;'>";
				empty_list += "<span class='test-table-row'><p>ID: "+id+"</p><p>Всего вопросов: "+count+"</p></span>";
				empty_list += "<span class='test-table-row'><p>Код: "+code+"</p><p>Код: "+time+"</p></span></div></div>";
			}
			document.getElementById('stol').innerHTML = empty_list;
		}
		
		on_change();
		//~ a = JSON.parse('{"2000": {"id": 1}, "3000": {"id": 2}}') //, (key, value) //=> 
			//typeof value === "object" ? undefined: value,
		//)
		//~ console.log(a.3000.id);
	</script>
	<style>
		body{
			background-color: black;
		}
		.test-table {
			position: absolute;
			left: 25%;
			
			width: 50vw;
			background-color: green;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			text-align: center;
		}
		.test-table-row {
			margin: 5px;
			color: white;
		}
		.sort-prop{
			text-decoration: none;
			color: white;
			margin: 7px;
			padding-left: 7px;
			padding-right: 7px;
			background-color: green;
			
			border-radius: 5px;
		}
		.is-active{
			background-color: blue;
		}
		.sort-toolbar{
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		
		.test-table-row {
			margin-top: 5px;
			margin-bottom: 5px;
			margin-left: 10px;
			margin-right: 10px;
			color: white;
		}
		
		.search-entry-submit{
			text-align: center;
			vertical-align: center;
			width: 90px;
			height: 35px;
			border-radius: 10px;
			background-color: green;
			color: white;
		}
		
		.search-entry-text{
			width: 500px;
			height: 30px;
			border-radius: 10px;
		}
		
		.search-entry{
			display: flex;
			justify-content: center;
		}
		
		.test-cards-list{
			display: flex;
			justify-content: center;
		}
		
		h1{
			padding-bottom: 10px;
			padding-top: 0px;
			margin: 3px;
			width: 30vw;
			height: 5vh;
			display: flex;
			justify-content: center;
			color: white;
			border-radius: 10px;
		}
		h4{
			margin-top: 10px;
			margin-bottom: 0px;
			width: 30vw;
			height: 5vh;
			display: flex;
			justify-content: center;
			color: white;
			border-radius: 10px;
		}
		
		body{
			background-color: black;
		}
		
		.test-card{
			padding-bottom: 15px;
			background-color: green;
			width: 500px;
			border-radius: 10px;
			margin: 15px;
		}
		
		.test-cards-list{
			display: flex;
			justify-content: center;
			flex-direction: column;
		}
		
		p{
			margin: 0px;
		}
		.test-title, p{
			display: flex;
			justify-content: center;
			color: white;
		}
	</style>
</body>
</html>
