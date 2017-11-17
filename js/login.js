var incorrect_pw = document.getElementById("incorrect_pw");
var emailinput = document.getElementById("text-input-e");
var pwinput = document.getElementById("text-input-p");

function submitlogin() {
	if ((emailinput.value == "shelter@shelter.gov") && (pwinput.value == "password")){
		window.location.href = "manager_overview.html";
	} else {
		incorrect_pw.style.visibility = "visible";
	}
}