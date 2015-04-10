function triangulize() {

    // var sides = [];

    var sides_input = document.getElementsByClassName( 'sides' ),
        sides  = [].map.call(sides_input, function( input ) {
            return input.value;
    });
    console.log(sides + 'unsorted');
    sides.sort();
    console.log(sides + 'sorted');
    var a = sides[0];
    var b = sides[1];
    var c = sides[2];

debugger;
    // var output =
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
