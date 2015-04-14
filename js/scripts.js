function triangulize(sides_input) {
    var triangleType = '';
    var sides = [];
    for(var i in sides_input) {
        sides.push(parseInt(sides_input[i]));
    }

    sides.sort(function(a, b){
        return a-b;
    });


    var a = parseInt(sides[0]);
    var b = parseInt(sides[1]);
    var c = parseInt(sides[2]);

    if (a + b <= c) {
        triangleType = alert('INCOMPATIBLE SIDES! TRI AGAIN!');
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
        triangleType = triangleType + ' (but it is also a right triangle)';
    }
    return triangleType;
}


jQuery(document).ready(function() {
    $("#side1").focus();

    $("#triangle-sides").submit(function(event) {

        var sides_input = document.getElementsByClassName( 'sides' ),
            sides  = [].map.call(sides_input, function( input ) {
                return input.value;
        });
        var triangleType = triangulize(sides);

        if(triangleType === 'EQUILATERAL!') {
            $("ul#equilateral").append("<li>" + sides + "</li>");
        }
        else if(triangleType === 'ISOSCELES!') {
            $("ul#isosceles").append("<li>" + sides + "</li>");
        }
        else if(triangleType === 'SCALENE!') {
            $("ul#scalene").append("<li>" + sides + "</li>");
        }

        // $("#triangleType").text(triangleType);
        // $("#result").show();
        event.preventDefault();
    });
});
