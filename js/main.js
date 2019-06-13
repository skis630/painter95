var color = "black";
var penSize = "3px";

$(document).ready(function() {
    localStorage.clear();
})

//features
$(".colors .well").click(function() {
    color = $(this).css("background-color");
    localStorage.setItem("color", color);
    penSize = localStorage.getItem("pen-size");
});

$(".dropdown-menu.pen-width li div").click(function() {
    penSize = $(this).css("height");
    localStorage.setItem("pen-size", penSize);
    var erased = localStorage.getItem("erased");
    if (erased) {
        color = localStorage.getItem("color");
        localStorage.setItem("erased", false);
    }
});
$("#custom-color").click(function(e) {
    color = $(this).val();
    localStorage.setItem("color", color);
    penSize = localStorage.getItem("pen-size");
});
$("#custom-color").change(function(e) {
    color = $(this).val();
    localStorage.setItem("color", color);
    penSize = localStorage.getItem("pen-size");
});
$(".erase").click(function() {
    color = "white";
    penSize = "30px";
    localStorage.setItem("erased", true);
});
// $(".erase").click(function() {
//     color = "white";
//    $(".dropdown-menu.pen-width").css("display", "none");
//    $(".dropdown-menu.eraser").css("opacity", "1");
// });
// $(".erase").blur(function() {
//     $(".dropdown-menu.eraser").css("opacity", 0);
// })
// $(".pen-size").click(function() {
//     $(".dropdown-menu.pen-width").css("opacity", "1");
// })
// $(".pen-size").blur(function() {
//     $(".dropdown-menu.pen-width").css("opacity", "0");
//     $(".dropdown-menu.eraser").css("opacity", "0");
// });

//paint
$("#canvas-wrapper").click(function(e) {
    var rect = document.getElementById("canvas-wrapper").getBoundingClientRect();
    var x = e.pageX - $(this).offset().left + 13;
    var y = e.pageY - $(this).offset().top;
    var circle = $("<span />").css("background-color", color).css("border-radius", "50%").
                               css("display", "inline-block").css("width",penSize).css("height", penSize).
                               css("position", "absolute").css("top", y).
                               css("left", x);
    $(this).append(circle);

    var posX = x / rect.width;
    var posY = y / rect.height;

    if (posX > 0.95 || posY > 0.95 || posX < 0.05 || posY < 0.05) {
        $(this).off("click");
    }


});

$("#canvas-wrapper").mousedown(function(event) {
    var rect = document.getElementById("canvas-wrapper").getBoundingClientRect();
    $(this).mousemove(function(e) {
        var x = e.pageX - $(this).offset().left + 13;
        var y = e.pageY - $(this).offset().top;
        var line = $("<span />").css("background-color", color).css("display", "inline-block").
        css("width", penSize).css("height", penSize).
        css("position", "absolute").css("top", y).css("left", x).
        css("border-radius", "50%");
   
    $(this).append(line);
    $(this).on("mouseup", function() {
        $(this).off("mousemove");
    });

    var posX = x / rect.width;
    var posY = y / rect.height;

    if (posX > 0.95 || posY > 0.95 || posX < 0.05 || posY < 0.05) {
        $(this).off("mousemove");
    }    
  })
})

//$(".colors > div").clicl(function() )
$(".clr").click(function() {
    $("#canvas-wrapper").html("");
})


var left = $("#canvas-wrapper span").css("left");
$("#canvas-wrapper span").filter(function() {
        return $(this).css("left").substring(0, left.length - 2) < 100;
      }).remove();