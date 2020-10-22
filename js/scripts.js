$(document).ready(function() {
  $("#celeb-dating").submit (fuction(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const favoriteColor = $("select#favoriteColor").val();
  }
}

const dob = $("#born").val();
const favoriteColor = $("#color").val();
const flavor = $("input:radio[name=flavor]:checked").val();