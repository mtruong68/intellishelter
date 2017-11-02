$(document).ready(function() {
  console.log("ready!")
  $("#autocomplete").click(function() {
    $( "#autocomplete" ).autocomplete({
      minLength: 0,
      source: ["Use Current Location"]
     });
  }).focus(function() {
    $(this).autocomplete("search", "");
  });
  var shelters =`<div class='shelter' id="YWCA"><span><b>YWCA Evanston</b> - 1.7m</span><span>1215 Church St.</span></div>
  <div class='shelter' id="Salvation"><span><b>Salvation Army Disaster</b> - 2.1m</span><span>1403 Sherman Ave.</span></div>
  <div class='shelter' id="RedCross"><span><b>Red Cross Shelter</b> - 2.2m</span><span>623 E. McCourt</span></div>
  <div class='shelter' id="United"><span><b>United Center</b> - 8.9m</span><span>1901 W Madison St.</span></div>
`
  $("#submit").click(function() {
    if($("#autocomplete").val() !== '') {
      $("#autocomplete").val("2332 Campus Drive");
      $("#image").attr('src','images/Evanston_map.png');
      $('.search-box').append(shelters);
    }
  })

})
