var incorrect_pw = document.getElementById("incorrect_pw");
var emailinput = document.getElementById("text-input-e").value;
var pwinput = document.getElementById("text-input-p").value;

function submitlogin() {
	//if (emailinput == "shelter" && pwinput == "password"){
		window.location.href = "manager_overview.html";
	//} else {
	//	incorrect_pw.style.visibility = "visible";
	//}
}