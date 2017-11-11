var walk = document.getElementById("walk");
var car = document.getElementById("car");
var transit = document.getElementById("transit");
var map = document.getElementById("image");

var walktable = document.getElementById("walktable");
var cartable = document.getElementById("cartable");
var transittable = document.getElementById("transittable");

var buttons = [walk, car, transit];

function walk_f() {
	
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}

	walk.classList.add("on");
	map.src = "../images/walk_directions.png";

	cartable.style.display = "none";
	transittable.style.display = "none";
	walktable.style.display = "table";
}

function car_f() {
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}

	car.classList.add("on");
	map.src = "../images/car_directions.png";

	cartable.style.display = "table";
	transittable.style.display = "none";
	walktable.style.display = "none";
}

function transit_f() {
	for (i=0; i<3; ++i){
		buttons[i].classList.remove("on");
	}

	transit.classList.add("on");
	map.src = "../images/bus_directions.png";

	cartable.style.display = "none";
	transittable.style.display = "table";
	walktable.style.display = "none";
}