(function () {
    var svg = d3.select('body').append('svg'),
        svgHeight = parseInt(svg.style("height"), 10),
        svgWidth = parseInt(svg.style('width'), 10),
        colorAnimationTime,
        moveAnimationTime,
        cx,
        cy,
        radius;

    function createPoints(isPointOrCircle) {
        svg.selectAll("circle").remove();

        for (var i = 1; i <= 100; i = i + 1) {
            radius = !isPointOrCircle ? Math.floor(Math.random() * 50 + 1) : 2;
            cx = i * Math.floor(Math.random() * 10 + 1);
            cy = i * Math.floor(Math.random() * 10 + 1);
            colorAnimationTime = radius * 10 + 500;
            moveAnimationTime = radius;

            Point(svgWidth, svgHeight, radius, cx, cy, colorAnimationTime, moveAnimationTime);
        }
    }

    document.getElementById("is_point").onchange = function () {
        createPoints(this.checked);
    };
    createPoints(false);
}());

