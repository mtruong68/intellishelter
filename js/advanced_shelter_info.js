$(document).ready(function(){
	//use default if no value has been set
	if(!(localStorage.getItem("name") == null || localStorage.getItem("name") == "")){
		$("#Shelter_Name").text(localStorage.getItem("name"));
		$("#phone").text(localStorage.getItem("number"));
		$("#capacity").text(localStorage.getItem("capacity") + " / " + localStorage.getItem("max_capacity"));
		$("#additional_info").text(localStorage.getItem("additional_info"));
	}
});