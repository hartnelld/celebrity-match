$(function() {
  $("#questions form").submit(function(event){
    var gender = $("#inputGender").val();
    var age = $("#inputAge").val();
    alert(gender);
    event.preventDefault();
  });
});
