//business logic 
$(document).ready(function() {
  $("#animal").submit(fuction(event)) 
});
//user interface
  const million = $("select#million").val(); {
    if (million === "Go on a romantic holiday with my lover") {
      $('#nick').fadeIn();
    } else if (million === "Start a wildlife sanctuary") { 
      $('#jane').fadeIn();
    } else if (million === "Trek around the world") {
      $('#bear').fadeIn();
    } else (million === "Start a coding school") {
      $('#ada').fadeIn ();
    } 
    event.preventDefault();
  });


//const dob = $("#born").val();
// const favoriteColor = $("#color").val();
// const flavor = $("input:radio[name=flavor]:checked").val();