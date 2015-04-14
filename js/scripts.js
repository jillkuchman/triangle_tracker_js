function triangulize(sides_input) {
    var sides = [];
    for(var i in sides_input) {
        sides.push(parseInt(sides_input[i]));
    }

    sides.sort(function(a, b){
        return a-b;
    });

    var input_side_a = parseInt(sides[0]);
    var input_side_b = parseInt(sides[1]);
    var input_side_c = parseInt(sides[2]);

    var triangle = {    side_a: input_side_a,
                        side_b: input_side_b,
                        side_c: input_side_c,
                        triangle_type: function() {
                            if (side_a + side_b <= side_c ) {
                                type = "invalid";
                            }
                            else if (side_a === side_b && side_a === side_c) {
                                type = "equilateral";
                            }
                            else if (side_a === side_b || side_a === side_c || side_b === side_c) {
                                type = "isosceles";
                            }
                            else if (Math.pow(side_a, 2) + Math.pow(side_b, 2) === Math.pow(side_c, 2)) {
                                type="right";
                            }
                            else {
                                type = "scalene";
                            }
                            return type;
                        }

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
