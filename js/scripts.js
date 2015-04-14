jQuery(document).ready(function() {
    $("#side1").focus();

    $("#triangle-sides").submit(function(event) {

        event.preventDefault();

        var sides_input = document.getElementsByClassName( 'sides' );
        var sides  = [].map.call(sides_input, function( input ) {
                return input.value;
        });
        var sides_int = [];
        for(var i in sides) {
            sides_int.push(parseInt(sides[i]));
        }

        sides_int.sort(function(a, b){
            return a-b;
        });
        console.log(sides_int);

        var input_side_a = parseInt(sides_int[0]);
        var input_side_b = parseInt(sides_int[1]);
        var input_side_c = parseInt(sides_int[2]);
        var is_right = false;
        var asterisk = "-";
        console.log(input_side_a);


        var new_triangle = {    side_a: input_side_a,
                                side_b: input_side_b,
                                side_c: input_side_c,
                                right_status: asterisk,
                                triangleType: function() {
                                    if (this.side_a + this.side_b <= this.side_c || this.side_a === 0) {
                                        type = "invalid";
                                    }
                                    else if (this.side_a === this.side_b && this.side_a === this.side_c) {
                                        type = "equilateral";
                                    }
                                    else if (this.side_a === this.side_b || this.side_a === this.side_c || this.side_b === this.side_c) {
                                        type = "isosceles";
                                    }
                                    else {
                                        type = "scalene";
                                    }
                                    if (Math.pow(this.side_a, 2) + Math.pow(this.side_b, 2) === Math.pow(this.side_c, 2)) {
                                        type += " right";
                                    }

                                    return type;
                                },
                                // isRight: function() {
                                //     if (is_right) {
                                //         asterisk = "*";
                                //     }
                                //     return asterisk;
                                // },

                            };

                            console.log(asterisk);

        // var triangleType = triangulize(sides);

        if(new_triangle.triangleType() === 'equilateral') {
            $("ul#equilateral").append("<li>" + input_side_a + ", " + input_side_b + ", " + input_side_c + "</li>");
        }
        else if(new_triangle.triangleType() === 'isosceles') {
            $("ul#isosceles").append("<li>" + input_side_a + ", " + input_side_b + ", " + input_side_c + "</li>");
        }
        else if(new_triangle.triangleType() === 'scalene') {
            $("ul#scalene").append("<li>" + input_side_a + ", " + input_side_b + ", " + input_side_c + "</li>");
        }
        else if(new_triangle.triangleType() === 'isosceles right') {
            $("ul#isosceles").append("<li>" + input_side_a + ", " + input_side_b + ", " + input_side_c + "* </li>");
        }
        else if(new_triangle.triangleType() === 'scalene right') {
            $("ul#scalene").append("<li>" + input_side_a + ", " + input_side_b + ", " + input_side_c + "* </li>");
        }

        else if(new_triangle.triangleType() === 'invalid') {
            alert("Do it right, asshole.");
        }

    });
});
