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
    	height: 147,
    	position: ["center center", "center center", "#notifications_button"],
    	buttons: { "Okay": function() {
            $(this).dialog("close");
        	}
    	}
	});

	$( "#notifications_button" ).click(function() {
		if(push_count % 2 == 0){
			document.getElementById("nots_dialog").innerHTML = "You are now receiving push notifications from this shelter.  You will directly receive any updates the shelter manager puts out.";
			document.getElementById("notifications_button").innerHTML = "Disable Push Notifications";
  			$( "#nots_dialog" ).dialog( "open" );
  			push_count++;
  		}

  		else {
  			document.getElementById("nots_dialog").innerHTML = "You have disabled push notifications.  To get updates from this shelter, you will have to come to this page to see them or enable push notifications.";
  			document.getElementById("notifications_button").innerHTML = "Receive Push Notifications";
  			$( "#nots_dialog" ).dialog( "open" );
  			push_count++;
  		}
	});

	//Disables browswer scrolling when cursos is in the screen.  
	//Changing the constant that is multiplying the delta (l46) changes scroll speed within the element.
	$( '#screen' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 5;
    e.preventDefault();
	});
});


