function deprelif(elem){
  viva = elem.innerHTML.split('');
  viva = [viva[1], viva[2], viva[0]];
  setTimeout(deprelif(elem), 1000);
}

function parovoz(function_name, time){
  setTimeout(function_name, time);
}
