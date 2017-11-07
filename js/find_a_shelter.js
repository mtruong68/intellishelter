var userInput;
var src = ["User Current Location"]

$(document).ready(function() {
  console.log("ready!")

  $("#autocomplete").val(userInput);

  $("#autocomplete").focus(function() {
    $( "#autocomplete" ).autocomplete({
      minLength: 0,
      source: src,
     });
  }).focus(function() {
    $(this).autocomplete("search", "");
  });

  $("#submit").click(function() {
    console.log(src);
    userInput = $("#autocomplete").val();
    if(userInput !== '') {
      if(userInput === "Use Current Location") {
        userInput = "2332 Campus Drive"
      } else {
        if($.inArray(userInput, src) === -1) {
          src.push(userInput);
        }
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