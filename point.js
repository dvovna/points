function Point(svgWidth, svgHeight, radius, cx, cy, colorChangeTime) {
    var circle = d3.select('svg').append('circle'),
        circleSize = radius || 10,
        vector = {
            x: 1,
            y: 1
        };

    circle
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', circleSize)
        .attr('fill', 'red');

    function checkForXEnd(currX) {
        if (vector.x > 0 && (currX + circleSize) === svgWidth) {
            vector.x = -1;
        } else if (vector.x < 0 && (currX - circleSize) === 0) {
            vector.x = 1;
        }
    }

    function checkForYEnd(currY) {
        if (vector.y > 0 && (currY + circleSize) === svgHeight) {
            vector.y = -1;
        } else if (vector.y < 0 && (currY - circleSize) === 0) {
            vector.y = 1;
        }
    }

    function getX() {
        var x = parseInt((this.attributes.cx.value), 10);

        checkForXEnd(x);

        if (vector.x > 0) {
            x++;
        } else {
            x--;
        }
        return x;
    }

    function getY() {
        var y = parseInt((this.attributes.cy.value), 10);

        checkForYEnd(y);

        if (vector.y > 0) {
            y++;
        } else {
            y--;
        }

        return y;
    }

    function startMove(intervalTime) {
        setInterval(function () {
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

    startColorAnimation('red', colorChangeTime);
    startMove(20);
}
