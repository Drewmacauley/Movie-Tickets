$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const age = parseInt($("input#age").val());
    const time = $("select#time").val();

    if (time === 'matinee') {
      if (age > 60) {
        $("#cost").text("Two Dollars");
      } else if (age < 60) {
        $("#cost").text("Ten Dollars");
      }
    } else if (time === 'standard') {
      if (age > 60) {
        $("cost").text("Eleven Dollars");
        else if (age < 60) {
          $("#cost").text("Fifteen DIllars");
        }
      }
    }
  });
});

if (time === matinee) {
  if (age > 60) {
    $("#cost").text("Ten Dollars");