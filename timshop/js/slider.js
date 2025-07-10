function init_slider(){
	let slider = document.getElementById('items');
	let dots = document.querySelector('.slider-dots');
	slider_data = '';
	slider_dots_data = '';
	for (i=1; i<9; i++){
		slider_data += '<div class="item" style="display: none;">';
		slider_data += '<img class="slide_img" src="img/slides/slide'+i+'.webp">';
		slider_data += '</div>';

		slider_dots_data += '<span onclick="current_slide('+(i-1)+')" class="dot inactive">'+i+'</span>'
	}
	slider.innerHTML = slider_data;
	dots.innerHTML = slider_dots_data;
	current_slide(0);
}

function off_slides(){
	let slides = document.querySelectorAll('.item');
	let dots = document.querySelectorAll('.dots');
	for (slide of slides){
		slide.style.display = "none";
	}
	for (dot of dots){
		if ('active' in dot.classList){
			dot.classList.remove('active');
			dot.classList.add('inactive');
		}
	}
}

function current_slide(slide_id){
	let slides = document.querySelectorAll('.item');
	let dots = document.querySelectorAll('.dot');
	off_slides();
	for (i=0; i<8; i++){
		dots[i].classList.add('inactive');
		dots[i].classList.remove('active');
	}
	slides[slide_id].style.display = "block";
	dots[slide_id].classList.add('active');
	dots[slide_id].classList.remove('inactive');
}
init_slider();

function get_slide_id(){
	let slides = document.querySelectorAll('.item');
	slide_state_list = [];
	for (x of slides){
		slide_state_list.push(x.style.display)
	}
	slide_id = slide_state_list.indexOf('block');
	return slide_id;
}

function prev_slide(){
	slide_id = get_slide_id();
	if (slide_id > 0){
		current_slide(slide_id-1);
	} else {
		current_slide(7);
	}
}

function next_slide(){
	slide_id = get_slide_id();
	if (slide_id < 7){
		current_slide(slide_id+1);
	} else {
		current_slide(0);
	}
}

function go(){
	next_slide();
	setTimeout(go, 3000);
}

setTimeout(go, 3000);