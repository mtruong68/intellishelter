$(document).ready(function(){

	if(localStorage.getItem("name") != null){		
		var name = localStorage.getItem("name");
		var number = localStorage.getItem("number");
		var capacity = localStorage.getItem("capacity");
		var max_capacity = localStorage.getItem("max_capacity");
		var additional_info = localStorage.getItem("additional_info");
	
		$("#form_name").val(name);
		$("#form_number").val(number);
		$("#form_cap").val(capacity);
		$("#form_max").val(max_capacity);
		$("#update_info").val(additional_info);
	}
		
	//on click, set storage values to current values
	$("#submit_button").click(function(){
		name = $("#form_name").val();
		number = $("#form_number").val();
		capacity = $("#form_cap").val();
		max_capacity = $("#form_max").val();
		additional_info = $("#update_info").val();

		localStorage.setItem("name", name);
		localStorage.setItem("number", number);
		localStorage.setItem("capacity", capacity);
		localStorage.setItem("max_capacity", max_capacity);
		localStorage.setItem("additional_info", additional_info);
	});

});