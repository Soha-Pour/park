$(document).ready(function() {

  $("form#question").submit(function(event) {
    var height = parseInt($("#height").val());
    event.preventDefault();

    if (height >= 48) {
      $(".tall-enough").show();
    } else {
      $(".too-short").show();
    }
  });
});
