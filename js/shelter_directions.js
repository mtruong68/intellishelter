var walk = document.getElementById("walk");
var car = document.getElementById("car");
var transit = document.getElementById("transit");
var buttons = [walk, car, transit];

function walk_f() {
	
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}
	walk.classList.add("on");
}

function car_f() {
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}
	car.classList.add("on");
}

function transit_f() {
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}
	transit.classList.add("on");
}