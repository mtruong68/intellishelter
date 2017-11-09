$(document).ready(function(){
	if(localStorage.getItem("name") != null){
		$("#top_text").text(localStorage.getItem("name", name));
	}
});