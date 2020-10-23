//business logic 
$(document).ready(function() {
  $("form#celeb-dating").submit(function(event) {
    event.preventDefault();

    // const animal ??
    // const spare-time ??

    const million = $("select#million").val(); 
//user interface
//let output = 'nick'

    if (million === "holiday") {
      $('#nick').fadeIn();
    } else if (million === "wildlife") { 
      $('#jane').fadeIn();
    } else if (million === "trek") {
      $('#bear').fadeIn();
    } else if (million === "school") {
      $('#ada').fadeIn ();
    } 

      //$(#bear).text(quote);
      //$(#output).show();

//want V it up top to occur 1st
//    event.preventDefault();
  }); 
});

//const dob = $("#born").val();
// const favoriteColor = $("#color").val();
// const flavor = $("input:radio[name=flavor]:checked").val();