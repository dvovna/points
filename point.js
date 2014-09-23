function Point(svgW, svgH, radius, cx, cy, colorChangeTime, moveSpeed) {
    var circle = d3.select('svg').append('circle'),
        circleSize = radius || 10,
        vector = {
            x: 1,
            y: 1
        },
        svgWidth = svgW,
        svgHeight = svgH,
        intervalId;

    circle
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', circleSize)
        .attr('fill', 'red');

    function checkRightBottomBorder(currCoord, vectorCoord, maxSize) {
        return vectorCoord > 0 && (currCoord + circleSize) >= maxSize;
    }

    function checkLeftTopBorder(coord, vectorCoord) {
        return vectorCoord < 0 && (coord - circleSize) === 0 || coord < 0;
    }

    function updateVeсtor(curr, coordStr) {
        var maxSize = coordStr === 'x' ? svgWidth : svgHeight;

        if (checkRightBottomBorder(curr, vector[coordStr], maxSize)) {
            vector[coordStr] = -1;
        } else if (checkLeftTopBorder(curr, vector[coordStr])) {
            vector[coordStr] = 1;
        }
    }

    function getNextCoord(direction, coord) {
        return direction > 0 ? ++coord : --coord;
    }

    function getX() {
        var x = parseInt((this.attributes.cx.value), 10);

        updateVeсtor(x, "x");

        return getNextCoord(vector.x, x);
    }

    function getY() {
        var y = parseInt((this.attributes.cy.value), 10);

        updateVeсtor(y, 'y');

        return getNextCoord(vector.y, y);
    }

    function startMove(intervalTime) {
        intervalId = setInterval(function () {
            circle
                .attr('cx', getX)
                .attr('cy', getY)
        }, intervalTime);
    }

    function startColorAnimation(color, speed) {
        var colorToSet = color === "red" ? "yellow" : "red";

        circle
            .transition()
            .delay(500)
            .duration(speed)
            .attr('fill', colorToSet)
            .each("end", function () {
                startColorAnimation(colorToSet, speed);
            });
    }


    function onMouseMove() {
        vector.x = vector.x * -1;
        vector.y = vector.y * -1;
    }

    circle.on("mouseenter", onMouseMove);

    startColorAnimation('red', colorChangeTime);
    startMove(moveSpeed);
}
