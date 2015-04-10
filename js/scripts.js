function triangulize(sides) {
    var triangleType = '';
    sides.sort();

    var a = parseInt(sides[0]);
    var b = parseInt(sides[1]);
    var c = parseInt(sides[2]);

    if (c > a + b) {
        triangleType = 'INCOMPATIBLE SIDES! TRI AGAIN!';
    }
    else if (a === b && a === c) {
        triangleType = 'EQUILATERAL!';
    }
    else if (a === b || a === c || b === c) {
        triangleType = 'ISOSCELES!';
    }
    else  {
        triangleType = 'SCALENE!';
    }

    return triangleType;
}


jQuery(document).ready(function() {
    $("#side1").focus();
    // $("#triangleType").text('');

    $("#triangle-sides").submit(function(event) {

        var sides_input = document.getElementsByClassName( 'sides' ),
            sides  = [].map.call(sides_input, function( input ) {
                return input.value;
        });
        var triangleType = triangulize(sides);

        $("#triangleType").text(triangleType);
        $("#result").show();
        event.preventDefault();
    });
});
