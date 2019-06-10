$("#canvas-wrapper").click(function(e) {
    // var color = $(".colors").click(function(e) {
    //     return $(this).
    // })
    var rect = document.getElementById("canvas-wrapper").getBoundingClientRect();
    var circle = $("<span />").css("background-color", "black").css("border-radius", "50%").
                               css("display", "inline-block").css("width", "3px").css("height", "3px").
                               css("position", "absolute").css("top", `${e.pageY - rect.top}px`).
                               css("left", `${e.pageX - rect.left}px`);
    $(this).append(circle);
})

//$(".colors > div").clicl(function() )