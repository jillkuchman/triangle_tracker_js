function triangulize(side1, side2, side3) {
  var a = 0;
  var b = 0;
  var c = 0;

  var sides = document.getElementsByClassName( 'sides' ),
    names  = [].map.call(inputs, function( input ) {
        return input.value;
    }).join( '|' );
    console.log(names);
    debugger;
  //if (side1 > side2)







  return output;
}


jQuery(document).ready(function() {
  $("#side1").focus();
  $("#triangle-sides").submit(function(event) {
    var sides = $("#words").val();
    var triangle_class = triangulize(sides);

    $("#triangle-class").text(triangle_class);
    $("#result").show();
    event.preventDefault();
  });
});
