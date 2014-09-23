(function () {
    var svg = d3.select('body').append('svg'),
        svgHeight = parseInt(svg.style("height"), 10),
        svgWidth = parseInt(svg.style('width'), 10),
        colorAnimationTime,
        moveAnimationTime,
        cx,
        cy,
        radius;

    for (var i = 1; i <= 300; i = i + 1) {
        radius = Math.floor(Math.random() * 50 + 1);
        cx = i * Math.floor(Math.random() * 10 + 1);
        cy = i * Math.floor(Math.random() * 10 + 1);
        colorAnimationTime = radius * 10 + 500;
        moveAnimationTime = radius;

        Point(svgWidth, svgHeight, radius, cx, cy, colorAnimationTime, moveAnimationTime);
    }
}());

