$(function() {
  $("#questions form").submit(function(event){
    // Set variables based on form input
    var gender = $("#inputGender").val();
    var age = $("#inputAge").val();
    var skill = $("#inputSkill").val();

    // Validate input

    // Identify celebrity
    if (gender === "Male") {
      var celebrity = "Scarlett Johansson";
    } else {
      var celebrity = "George Clooney";
    }

    // Add content to celebrity div
    $(".celebrity-match").text(celebrity);

    // Hide #questions and show #results
    $("#questions").hide();
    $("#results").show();

    // Prevent default action when submit event occurs
    event.preventDefault();
  });
});
