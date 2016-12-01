$(function() {
    "use strict";

    var answer = ["1", "1", "1", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "0", "1", "0", "0", "0", "1", "1"];

    var submit = [];

    // http://jsfiddle.net/Brv6J/3/
    var isMouseDown = false,
        isHighlighted;
    $(".nonotable .blank").mousedown(function(event) {
        isMouseDown = true;
        if(event.which === 1) {
            $(this).toggleClass("fill").removeClass("nope");
            isHighlighted = $(this).hasClass("fill");
            if(isHighlighted === true) {
                $(this).attr("data-nn-value", 1);
            } else {
                $(this).attr("data-nn-value", 0);
            }
        } else if(event.which === 3) {
            $(this).toggleClass("nope").removeClass("fill").attr("data-nn-value", 0);
            isHighlighted = $(this).hasClass("nope");
        }
        return false;
    }).mouseover(function(event) {
        if(isMouseDown) {
            if(event.which === 1) {
                $(this).toggleClass("fill", isHighlighted).removeClass("nope");
                if(isHighlighted === true) {
                    $(this).attr("data-nn-value", 1);
                } else {
                    $(this).attr("data-nn-value", 0);
                }
            } else if(event.which === 3) {
                $(this).toggleClass("nope", isHighlighted).removeClass("fill").attr("data-nn-value", 0);
            }
        }
    }).bind("selectstart", function() {
        return false;
    });

    $(document).mouseup(function() {
        isMouseDown = false;
    });

    $("button").click(function() {
        // $(".nonotable .blank").parent("tr").each(function() {
        //     var idx = $(this).index();
        // });
        // $(".nonotable .blank").each(function() {
        //     answer.push($(this).attr("data-nn-value"));
        // });
        submit = [];
        $(".nonotable .blank").each(function() {
            submit.push($(this).attr("data-nn-value"));
        });

        // http://jsfiddle.net/47WCQ/1/

        console.log(submit);
    });

});

