(function () {
    var svg = d3.select('body').append('svg'),
        circle = svg.append('circle'),
        svgHeight = parseInt(svg.style("height"), 10),
        svgWidth = parseInt(svg.style('width'), 10),
        circleSize = 10,
        vector = {
            x: 1,
            y: 1
        };

    circle
        .attr('cx', 10)
        .attr('cy', 10)
        .attr('r', circleSize)
        .attr('fill', 'red');

    function checkForXEnd(currX) {
        if (vector.x > 0 && (currX + circleSize) === svgWidth) {
            vector.x = -1;
            return;
        } else if (vector.x < 0 && (currX - circleSize) === 0) {
            vector.x = 1;
            return;
        }
    }

    function checkForYEnd(currY) {
        if (vector.y > 0 && (currY + circleSize) === svgHeight) {
            vector.y = -1;
            return;
        } else if (vector.y < 0 && (currY - circleSize) === 0) {
            vector.y = 1;
            return;
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

    function start(color, speed) {
        var colorToSet = color === "red" ? "yellow" : "red";

        circle
            .transition()
            .delay(500)
            .duration(speed)
            .attr('fill', colorToSet)
            .each("end", function () {
                start(colorToSet, speed);
            });

        setInterval(function () {
            circle
                .attr('cx', getX)
                .attr('cy', getY)
        }, 50);
}

    start('red', 5000);

}());

