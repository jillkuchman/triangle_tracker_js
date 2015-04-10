function triangulize(sides_input) {
    var triangleType = '';
    var sides = [];
    for(var i in sides_input) {
        sides.push(parseInt(sides_input[i]));
    }
    console.log(sides);
    sides.sort(function(a, b){
        return a-b;
    });
    console.log(sides);

    var a = parseInt(sides[0]);
    var b = parseInt(sides[1]);
    var c = parseInt(sides[2]);

    if (a + b <= c) {
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
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        triangleType = triangleType + '(and it is also a right triangle)';
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
