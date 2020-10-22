//business logic 
$(document).ready(function() {
  $("form#celeb-dating").submit(fuction(event)) {
    // const animal ??
    // const spare-time ??
    const million = $("select#million").val(); 
//user interface
    //let output = 'nick'
    if (million === "Go on a romantic holiday with my lover") {
      $('#nick').fadeIn();
    } else if (million === "Start a wildlife sanctuary") { 
      $('#jane').fadeIn();
    } else if (million === "Trek around the world") {
      $('#bear').fadeIn();
    } else (million === "Start a coding school") {
      $('#ada').fadeIn ();
    } 

      //$(#bear).text(quote);
      //$(#output).show();

    event.preventDefault();
  }); 
};

//const dob = $("#born").val();
// const favoriteColor = $("#color").val();
// const flavor = $("input:radio[name=flavor]:checked").val();