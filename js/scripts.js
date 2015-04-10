function triangulize(sides) {
    var sides_array = [sides[0], sides[3], sides[6]]
    var triangle_type = '';
    // var sides_input = document.getElementsByClassName( 'sides' ),
    //     sides  = [].map.call(sides_input, function( input ) {
    //         return input.value;
    // });
    var sides = sides_array.sort();
    var a = sides[0];
    var b = sides[1];
    var c = sides[2];

    if (a + b <= c || a + b >= c) {
        triangle_type = 'TRIANGLE!';
    }












// debugger;
    // var output =
    return triangle_type;
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
