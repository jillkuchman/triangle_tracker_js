function triangulize(sides) {
    var triangleType = '';
    sides.sort();
    var a = sides[0];
    var b = sides[1];
    var c = sides[2];

    if (a + b >= c) {
        triangleType = 'TRIANGLE!';
    } else return "HAVE YOU EVER SEEN A TRIANGLE!?";











// debugger;
    return triangleType;
}


jQuery(document).ready(function() {
    $("#side1").focus();
    $("#triangle-sides").submit(function(event) {
        // var sides = $("#words").val();
        var sides_input = document.getElementsByClassName( 'sides' ),
            sides  = [].map.call(sides_input, function( input ) {
                return input.value;
        });
        var triangleType = triangulize(sides);
// debugger;

        $("#triangleType").text(triangleType);
        $("#result").show();
        event.preventDefault();
    });
});
