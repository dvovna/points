(function () {
    var svg = d3.select('body').append('svg'),
        svgHeight = parseInt(svg.style("height"), 10),
        svgWidth = parseInt(svg.style('width'), 10),
        colorAnimationTime,
        moveAnimationXTime,
        moveAnimationYTime,
        cx,
        cy,
        radius,
        pointNumberEl = document.getElementById("point_number");
        isPointEl = document.getElementById("is_point");

    function createPoints(isPointOrCircle, pointsNumber) {
        svg.selectAll("circle").remove();

        for (var i = 1; i <= pointsNumber; i = i + 1) {
            radius = !isPointOrCircle ? Math.floor(Math.random() * 50 + 1) : 2;
            cx = i * Math.floor(Math.random() * 10 + 1);
            cy = i * Math.floor(Math.random() * 10 + 1);
            colorAnimationTime = radius * 10 + 500 + i;
            moveAnimationXTime = radius * 2;
            moveAnimationYTime = radius / 2;

            Point(svgWidth, svgHeight, radius, cx, cy, colorAnimationTime, moveAnimationXTime, moveAnimationYTime);
        }
    }

    isPointEl.onchange = function () {
        createPoints(this.checked, pointNumberEl.value);
    };

    pointNumberEl.onchange = function () {
        createPoints(isPointEl.checked, this.value);
    };
    createPoints(isPointEl.checked, pointNumberEl.value);
}());

