$(document).ready(function(){
	//use default if no value has been set
	if(localStorage.getItem("name") == null || localStorage.getItem("name") == ""){
		$("#name").text(" YWCA Evanston ");
		$("#phone").text(" +1 (958) 555-0100 ");
	}
	else{
		$("#name").text(localStorage.getItem("name"));
		$("#phone").text(localStorage.getItem("number"));
	}
});