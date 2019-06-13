var color = "black";
var penSize = "3px";

$(document).ready(function() {
    localStorage.setItem("pen-size", penSize);
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
    
    var posX = x / rect.width;
    var posY = y / rect.height;
    if (posX > 0.97 || posY > 0.97 || posX < 0.03 || posY < 0.03) {
        circle = null;
    }
    $(this).append(circle);
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
   
        var posX = x / rect.width;
        var posY = y / rect.height;
        if (posX > 0.97 || posY > 0.97 || posX < 0.02 || posY < 0.02) {
            line = null;
        }    
        $(this).append(line);

    $(this).on("mouseup", function() {
        $(this).off("mousemove");
    }); 
  })
})

$(".clr").click(function() {
    $("#canvas-wrapper").html("");
})
