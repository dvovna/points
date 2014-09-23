function Point(svgWidth, svgHeight, radius, cx, cy, colorChangeTime) {
    var circle = d3.select('svg').append('circle'),
        circleSize = radius || 10,
        vector = {
            x: 1,
            y: 1
        },
        mouse = {
            x: 0,
            y: 0
        };

    circle
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', circleSize)
        .attr('fill', 'red');

    function checkRightBorder(currX) {
        return vector.x > 0 && (currX + circleSize) === svgWidth;
    }

    function checkLeftBorder(currX) {
        return vector.x < 0 && (currX - circleSize) === 0;
    }

    function checkBottomBorder(currY) {
        return vector.y > 0 && (currY + circleSize) === svgHeight;
    }

    function checkTopBorder(currY) {
        return vector.y < 0 && (currY - circleSize) === 0;
    }

    function checkForXEnd(currX) {
        if (checkRightBorder(currX) || currX === mouse.x) {
            vector.x = -1;
        } else if (checkLeftBorder(currX) || currX === mouse.x) {
            vector.x = 1;
        }
    }

    function checkForYEnd(currY) {
        if (checkBottomBorder(currY) || currY === mouse.y) {
            vector.y = -1;
        } else if (checkTopBorder(currY) || currY === mouse.y) {
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


    function onMouseMove(e) {
        vector.x = vector.x * -1;
        vector.y = vector.y * -1;
    }

    circle.on("mouseenter", onMouseMove);

    startColorAnimation('red', colorChangeTime);
    startMove(20);
}
