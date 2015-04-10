function triangulize() {

    // var sides = [];

    var sides_input = document.getElementsByClassName( 'sides' ),
        names  = [].map.call(sides_input, function( input ) {
            return input.value;
    });//.join( '|' );

    debugger;
    console.log(sides);


    // alert(names);


    // var a = 0;
    // var b = 0;
    // var c = 0;


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
