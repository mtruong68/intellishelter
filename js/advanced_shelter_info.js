$(document).ready(function(){
	//use default if no value has been set
	if(!(localStorage.getItem("name") == null || localStorage.getItem("name") == "")){
		$("#Shelter_Name").text(localStorage.getItem("name"));
		$("#phone").text(localStorage.getItem("number"));
		$("#capacity").text(localStorage.getItem("capacity") + " / " + localStorage.getItem("max_capacity"));
		$("#additional_info").text(localStorage.getItem("additional_info"));
	}
	var push_count = 0;

	$( "#nots_dialog" ).dialog({ autoOpen: false });
	$("#nots_dialog").dialog({
		modal: true,
		draggable: false,
    	resizable: false,
    	width: 300,
    	height: 115,
    	position: ["center center", "center center", "#notifications_button"],
    	buttons: { "Okay": function() {
            $(this).dialog("close");
        	}
    	}
	});

	$( "#notifications_button" ).click(function() {
		if(push_count % 2 == 0){
			document.getElementById("nots_dialog").innerHTML = "Do you want to receive push notifications from this shelter?";
			document.getElementById("notifications_button").innerHTML = "Disable Push Notifications";
  			$( "#nots_dialog" ).dialog( "open" );
  			push_count++;
  		}

  		else {
  			document.getElementById("nots_dialog").innerHTML = "Do you want to stop receiving push notifications from this shelter?";
  			document.getElementById("notifications_button").innerHTML = "Receive Push Notifications";
  			$( "#nots_dialog" ).dialog( "open" );
  			push_count++;
  		}
	});
});


