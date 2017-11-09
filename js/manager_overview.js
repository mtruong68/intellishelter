$(document).ready(function(){
	if(localStorage.getItem("name") == null || localStorage.getItem("name") == ""){
		$("#top_text").text("YWCA Evanston");
	}
	else{
		$("#top_text").text(localStorage.getItem("name", name));
	}
});