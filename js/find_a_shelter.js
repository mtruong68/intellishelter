var userInput;
var src = ["User Current Location"]

$(document).ready(function() {
  console.log("ready!")

  if(!(localStorage.getItem("name") == null || localStorage.getItem("name") == "")){
    $("#name").text(localStorage.getItem("name"));
  }

  $("#autocomplete").val(userInput);

  $('#loc').click(function() {
    userInput = 'Use My Location';
    if(window.location.href !== "find_a_shelter_AFTER.html") {
      window.location.href = "find_a_shelter_AFTER.html";
    }
  })
  $("#submit").click(function() {
    userInput = $("#autocomplete").val();
    if(userInput !== '') {
      if($.inArray(userInput, src) === -1) {
        src.push(userInput);
      }
      if(window.location.href !== "find_a_shelter_AFTER.html") {
        window.location.href = "find_a_shelter_AFTER.html";
      }
    } else {
      $('.search-box .shelter').remove();
      $('.search-box').append(`<div class='shelter' id="Invalid"><span><b>Invalid Input. Please enter a shelter location</span></div>`);
    }
  })

})
