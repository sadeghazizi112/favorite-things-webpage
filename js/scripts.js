

var secondarray = []

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    var favorites = $("#favoritethings").val();
    var newarray = favorites.split(", ");

    secondarray.push(newarray[1]);
    secondarray.push(newarray[0]);
    secondarray.push(newarray[2]);

    $("ul").append('<li>' + secondarray[0] + '</li>');
    $("ul").append('<li>' + secondarray[1] + '</li>');
    $("ul").append('<li>' + secondarray[2] + '</li>');
  });
});
