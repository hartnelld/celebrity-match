$(function() {
  $("#questions form").submit(function(event){
    // Set variables based on form input
    var gender = $("#inputGender").val();
    var age = $("#inputAge").val();
    var skill = $("#inputSkill").val();

    // Validate input



    // Identify celebrity
    if (gender === "Male") {
      if (age <= 35) {
        if (skill.length <= 5) {
          var celebrity = "Scarlett Johansson";
          var celebURL = "http://ia.media-imdb.com/images/M/MV5BMTUwNzMwMzgyOV5BMl5BanBnXkFtZTcwMjk0ODY1NA@@._V1._SX640_SY962_.jpg";
        } else {
          var celebrity = "Annalise Basso";
          var celebURL = "http://ia.media-imdb.com/images/M/MV5BMTkwMDQzNjIxNl5BMl5BanBnXkFtZTgwMTQ4OTU2NDE@._V1_UY317_CR9,0,214,317_AL_.jpg";
        }
      } else {
        var celebrity = "Kate Walsh";
        var celebURL = "http://ia.media-imdb.com/images/M/MV5BMTk2NDEzNzg3MV5BMl5BanBnXkFtZTcwNjI1Mzg2Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg";
      }
    } else if (gender === "Female") {
      if (age <= 35) {
        if (skill.length <= 5) {
          var celebrity = "George Clooney";
          var celebURL = "http://ia.media-imdb.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg";
        } else {
          var celebrity = "Sacha Baron Cohen";
          var celebURL = "http://ia.media-imdb.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg";
        }
      } else {
        var celebrity = "Chris Carter";
        var celebURL = "http://ia.media-imdb.com/images/M/MV5BNzE0NjcyMjkyNF5BMl5BanBnXkFtZTcwMTUxMDA4MQ@@._V1_UY317_CR6,0,214,317_AL_.jpg";
      }
    } else {
      var celebrity = "Kate Walsh";
      var celebURL = "http://ia.media-imdb.com/images/M/MV5BMTk2NDEzNzg3MV5BMl5BanBnXkFtZTcwNjI1Mzg2Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg";
    }

    // This code is far more readable
    // The previous code was written while troubleshooting
    // Turns out variable.length is != variable.length()

    //   } else if () {
    //     var celebrity = "Annalise Basso";
    //     var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTkwMDQzNjIxNl5BMl5BanBnXkFtZTgwMTQ4OTU2NDE@._V1_UY317_CR9,0,214,317_AL_.jpg");
    //   }
    // } else if (gender === "Female") {
    //   if (age < 35 && skill.length() < 5) {
    //     var celebrity = "George Clooney";
    //     var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg");
    //   } else {
    //     var celebrity = "Sacha Baron Cohen";
    //     var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg");
    //   }
    // } else {
    //   if (age < 35 && skill.length() < 5) {
    //     var celebrity = "George Clooney";
    //     var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg");
    //   } else {
    //     var celebrity = "Scarlett Johansson";
    //     var celebURL = ("http://ia.media-imdb.com/images/M/MV5BMTUwNzMwMzgyOV5BMl5BanBnXkFtZTcwMjk0ODY1NA@@._V1._SX640_SY962_.jpg");
    //   }
    // }

    // Add content to celebrity div
    $(".celebrity-match").text(celebrity);

    // Hide #questions and show #results
    $("#questions").hide();
    $("#results").show();
    $("#celeb-pic").append("<img src='" + celebURL + "'>");
    $("#celeb-pic").fadeIn("slow");
    $("mark").fadeIn("slow");

    // Prevent default action when submit event occurs
    event.preventDefault();
  });
});
