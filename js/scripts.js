function Place (name, landmark, state, duration, company, season) {
  this.nameKey = name;
  this.landmarkKey = landmark;
  this.stateKey = state;
  this.durantionKey = duration;
  this.companyKey = company;
  this.seasonKey = season;
}

Place.prototype.placeFullInfo = function() {
  return this.nameKey + "," + this.stateKey;
}

// user interface logic
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var placeInput = $("#place-name").val();
    var landmarkInput = $("#landmark").val();
    var stateInput = $("#state").val();
    var durationInput = $("#duration").val();
    var companyInput = $("#company").val();
    var seasonInput = $("#season").val();


    var newPlace = new Place(placeInput, landmarkInput, stateInput, durationInput, companyInput, seasonInput);

    console.log(newPlace);

    $("ul#places-info").append("<li><span class='new-place'>" + newPlace.placeFullInfo() + "</span></li>");

    $("#place-name").val(""); // resets the forms field to blank
    $("#landmark").val("");
    $("#state").val("");
    $("#duration").val("");
    $("#company").val("");
    $("#season").val("");

    $(".new-place").last().click(function() {
      $("#show-places-and-aspects").show();
      $("#show-places-and-aspects h2").text(newPlace.nameKey);
      $(".place-name").text(newPlace.nameKey);
      $(".landmark").text(newPlace.landmarkKey);
      $(".state").text(newPlace.stateKey);
      $(".duration").text(newPlace.durantionKey);
      $(".company").text(newPlace.companyKey);
      $(".season").text(newPlace.seasonKey);
    });
  });
});
