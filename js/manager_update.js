$(document).ready(function(){

	//if its storage exists, use that, else default
	if(localStorage.getItem("name") != null){		
		var name = localStorage.getItem("name");
		var capacity = localStorage.getItem("capacity");
		var max_capacity = localStorage.getItem("max_capacity");
		var additional_info = localStorage.getItem("additional_info");
	}else{
		var name = $("#form_name").val();
		var capacity = $("#form_cap").val();
		var max_capacity = $("#form_max").val();
		var additional_info = $("#update_info").text();
	}

	//set current values set above
	$("#form_name").val(name);
	$("#form_cap").val(capacity);
	$("#form_max").val(max_capacity);
	$("#update_info").text(additional_info);

	//on click, set storage values to current values
	$("#submit_button").click(function(){
		name = $("#form_name").val();
		capacity = $("#form_cap").val();
		max_capacity = $("#form_max").val();
		additional_info = $("#update_info").text();

		localStorage.setItem("name", name);
		localStorage.setItem("capacity", capacity);
		localStorage.setItem("max_capacity", max_capacity);
		localStorage.setItem("additional_info", additional_info);
	});	
});