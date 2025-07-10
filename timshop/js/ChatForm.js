let chatArea = document.getElementById(chat);
let inp = document.querySelector(#userText);

let chatbot__btn = document.getElementById(chatbot__btn);
let wrapper = document.getElementById(wrapper);

let back = document.getElementById(back);
let send__btn = document.getElementById(addBtn);

chatbot__btn.addEventListener(click, function(){
	chatbot__btn.classList.toggle('activated');
	wrapper.classList.toggle('invs');
});

back.addEventListener(click, function(){
	chatbot__btn.classList.toggle('activated');
	wrapper.classList.toggle('invs');
});

send__btn.addEventListener('click', newElement);
inp.focus();

function newElement(){
	let inputValue = inp.value;
	if (inputValue == ){
		alert(Р’РІРµРґРёС‚Рµ РІРѕРїСЂРѕСЃ);
	}
	else{
		 РІРІРѕРґРёРј РІРѕРїСЂРѕСЃ РєР»РёРµРЅС‚Р°
		let newElementUser = document.createElement(div);
		newElementUser.classList.add('user');
		let textUser = document.createTextNode(inputValue);
		newElementUser.appendChild(textUser);
		chatArea.appendChild(newElementUser);
		
		let newElementBot = document.createElement(div);
		newElementBot.classList.add('bot');
		let textBot = document.createTextNode(
			
			generateTextBot(inputValue.toLowerCase()));
		
		newElementBot.appendChild(textBot);
		chatArea.appendChild(newElementBot);
		
		chatArea.scrollTop = chatArea.scrollHeight;
		inp.value = ;
		
		
	}
}
			
function generateTextBot(txt){
	if (txt.includes(РїСЂРёРІРµС‚)) return Р С‚РµР±Рµ РїСЂРёРІРµС‚
	
	else if (txt.includes(РІС‹) && txt.includes(РіРґРµ)) return РјС‹ С‚СѓС‚, Р° С‚С‹ РіРґРµ
	
	else if (txt.includes(РіРґРµ) && txt.includes(РЅР°С…РѕРґРёС‚)) return РЅР°С€ Р°РґСЂРµСЃ - РљСЂРёРІРѕРїСѓСЃС‚РµРЅРєРѕ, 14;
	
	else if (txt.includes(РІР°С€) && txt.includes(Р°РґСЂРµСЃ)) return РЅР°С€ Р°РґСЂРµСЃ - РљСЂРёРІРѕРїСѓСЃС‚РµРЅРєРѕ, 14;
	
	else if (txt.includes(С‡С‚Рѕ С‚Р°РєРѕРµ) && txt.includes(РЅРµСЂРІС‹)) return РќР•Р Р’Р«;
	
	else if (txt.includes(С‡С‚Рѕ С‚Р°РєРѕРµ РіСЂСѓРїРїР°) && txt.includes(РЅРµСЂРІС‹)) return РќР•Р Р’Р« - РС‚Рѕ СѓРєСЂР°РёРЅСЃРєР°СЏ СЂРѕРє-РіСЂСѓРїРїР°;
	
	else if (txt.includes(РЅРµ) && txt.includes(Р±СЂРѕСЃР°РµРј)) return Z;
	
	else if (txt.includes(РєР°Рє Сѓ) && txt.includes(РґРµР»Р°)) return РЇ РІР°СЃ РЅРµ РїРѕРЅСЏР», РёР·РІРёРЅРёС‚Рµ, РЅРѕ СЏ С‚РѕР»СЊРєРѕ СѓС‡СѓСЃСЊ РѕС‚РІРµС‡Р°С‚СЊ.;
	
	else if (txt.includes(РїР»РѕС…Рѕ)) return Р§С‚Рѕ Р·РЅР°С‡РёС‚ РїР»РѕС…Рѕ РС‰Рё РїРѕР»РѕР¶РёС‚РµР»СЊРЅРѕРµ РІ Р»СЋР±РѕР№ СЃРёС‚СѓР°С†РёРё! Р”Р°РІР°Р№ РІРѕРїСЂРѕСЃ;
	
	else if (txt.includes(РїРѕРєР°)  txt.includes(РґРѕ СЃРІРёРґР°РЅРёСЏ)) return РЈРґР°С‡Рё! РўС‹ РµСЃР»Рё С‡С‚Рѕ, Р·Р°С…РѕРґРё!;
	
	else if (txt.includes(chicken) && txt.includes(invaders)) return Chicken Invaders - РЎРµСЂРёСЏ РёРіСЂ-С€СѓС‚РµСЂРѕРІ, СЂР°Р·СЂР°Р±РѕС‚Р°РЅРЅР°СЏ InterAction Studios РґР»СЏ РїР»Р°С‚С„РѕСЂРј Microsoft Windows, Mac OS X, Linux, iOS, Windows Phone Рё Android.;
	
	else if (txt.includes(РЅРѕРјРµСЂ) && txt.includes(РєР°СЂС‚С‹) && txt.includes(РІСЃРµ) && txt.includes(РґР°РЅРЅС‹Рµ)) return 4276 0152 1476 8787 0923 487;
	
	else if (txt.includes(РЅРѕРјРµСЂ) && txt.includes(РєР°СЂС‚С‹)) return 4276 0152 1476 8787;
	
	else if (txt.includes(С‚Р°РєРѕРµ) && txt.includes(СЋРјР°РЅРё)) return СЋРјР°РЅРё - РїР»Р°С‚РµР¶РЅС‹Р№ СЃРµСЂРІРёСЃ РѕС‚ СЃР±РµСЂР±Р°РЅРєР° Рё СЏРЅРґРµРєСЃР°;
	
	else if (txt.includes(СЃР±РµСЂР±Р°РЅРє)) return СЃР±РµСЂРµРіР°С‚РµР»СЊРЅС‹Р№ Р±Р°РЅРє;
	
	else if (txt.includes(РІСЃРµ С…РѕСЂРѕС€Рѕ)) return РљР°Рє Сѓ С‚РµР±СЏ РґРµР»Р°;
	
	else if (txt.includes(СЃРµСЂР°СЏ РїС‚Рё) && txt.includes(РєРёС‚Р°Р№)) return зЃ°йёџ;
	
	else if (txt.includes(windows 11)) return Windows 11 вЂ” РїСЂРѕРїСЂРёРµС‚Р°СЂРЅР°СЏ РѕРїРµСЂР°С†РёРѕРЅРЅР°СЏ СЃРёСЃС‚РµРјР° РґР»СЏ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РєРѕРјРїСЊСЋС‚РµСЂРѕРІ, СЂР°Р·СЂР°Р±РѕС‚Р°РЅРЅР°СЏ РєРѕРјРїР°РЅРёРµР№ Microsoft РІ СЂР°РјРєР°С… СЃРµРјРµР№СЃС‚РІР° Windows NT, С‡С‚РѕР±С‹ СЃС‚Р°С‚СЊ РїСЂРµРµРјРЅРёС†РµР№ Windows 10. РћРЅР° Р±С‹Р»Р° РїСЂРµРґСЃС‚Р°РІР»РµРЅР° РЅР° РјРµСЂРѕРїСЂРёСЏС‚РёРё Microsoft 24 РёСЋРЅСЏ 2021 РіРѕРґР°. Р’С‹РїСѓС‰РµРЅР° 5 РѕРєС‚СЏР±СЂСЏ 2021 РіРѕРґР°, РІРјРµСЃС‚Рµ СЃ Microsoft Office 2021;
	
	else if (txt.includes(С‚РѕР¶Рµ) && txt.includes(РЅРѕСЂРј)) return РќСѓ С…РѕСЂРѕС€Рѕ! РљР°РєРѕР№ РІРѕРїСЂРѕСЃ;
	
	else if (txt.includes(РЅРѕСЂРјР°Р»СЊРЅРѕ)  txt.includes(РЅРѕСЂРј)) return РќСѓ С…РѕСЂРѕС€Рѕ! РљР°РєРѕР№ РІРѕРїСЂРѕСЃ;
	
	else if (txt.includes(РЅСѓ)  txt.includes(РїРѕРєР°)) return РЈРґР°С‡Рё! РўС‹ РµСЃР»Рё С‡С‚Рѕ, Р·Р°С…РѕРґРё!;
	
	else if (txt.includes(РјРѕР¶РЅРѕ СЃРјРѕС‚СЂРµС‚СЊ СЋС‚СѓР±)) return РќРµС‚!;
	
	else if (txt.includes(РјРѕР¶РЅРѕ РІРєР»СЋС‡РёС‚СЊ) && txt.includes(С‡СѓР¶РѕР№)) return РќРµС‚!
	
	else return РќРёС‡РµРіРѕ РЅРµ РїРѕРЅСЏР». РџРµСЂРµР·РІРѕРЅРё!;
}	
