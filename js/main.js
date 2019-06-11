var color = "black";
$(".colors .well").click(function() {
    color = $(this).css("background-color");
});

$("#canvas-wrapper").click(function(e) {
    var rect = document.getElementById("canvas-wrapper").getBoundingClientRect();
    var circle = $("<span />").css("background-color", color).css("border-radius", "50%").
                               css("display", "inline-block").css("width", "3px").css("height", "3px").
                               css("position", "absolute").css("top", `${e.offsetY}px`).
                               css("left", `${e.offsetX}px`);
    if (parseInt(e.offsetX) < 5) {
        circle.css("left", "18px");
    }
    $(this).append(circle);
});

$("#canvas-wrapper").mousedown(function(event) {
    $(this).mousemove(function(e) {
        var line = $("<span />").css("background-color", color).css("display", "inline-block").
        css("width", "3px").css("height", "3px").
        css("position", "absolute").css("top", `${e.offsetY}px`).
        css("left", `${e.offsetX}px`);
    if (parseInt(e.offsetX) < 5) {
        line.css("left", "20px");
        }
    $(this).append(line);
    $(this).on("mouseup", function() {
        $(this).off("mousemove");
    })
    });
   
})

$("#custom-color").change(function(e) {
    color = $(this).val();
})

//$(".colors > div").clicl(function() )