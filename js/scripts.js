$(function() {
  $("#questions form").submit(function(event){
    // Set variables based on form input
    var gender = $("#inputGender").val();
    var age = $("#inputAge").val();
    var skill = $("#inputSkill").val();

    // Validate input

    // Identify celebrity
    if (gender === "Male") {
      if (age < 35 || skill.length() < 5) {
        var celebrity = "Scarlett Johansson";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTUwNzMwMzgyOV5BMl5BanBnXkFtZTcwMjk0ODY1NA@@._V1._SX640_SY962_.jpg");
      } else {
        var celebrity = "Annalise Basso";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTkwMDQzNjIxNl5BMl5BanBnXkFtZTgwMTQ4OTU2NDE@._V1_UY317_CR9,0,214,317_AL_.jpg");
      }
    } else if (gender === "Female") {
      if (age < 35 && skill.length() < 5) {
        var celebrity = "George Clooney";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg");
      } else {
        var celebrity = "Sacha Baron Cohen";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg");
      }
    } else {
      if (age < 35 && skill.length() < 5) {
        var celebrity = "George Clooney";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg");
      } else {
        var celebrity = "Scarlett Johansson";
        var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTUwNzMwMzgyOV5BMl5BanBnXkFtZTcwMjk0ODY1NA@@._V1._SX640_SY962_.jpg");
      }
    }

    // Add content to celebrity div
    $(".celebrity-match").text(celebrity);

    // Hide #questions and show #results
    $("#questions").hide();
    $("#results").show();
    $("mark").fadeIn("slow");

    // Prevent default action when submit event occurs
    event.preventDefault();
  });
});
