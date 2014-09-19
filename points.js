(function () {
    var svg = d3.select('body').append('svg');

    svg
        .attr('x', 50)
        .attr('y', 50)
        .append('circle')
        .attr('cx', 200)
        .attr('cy', 200)
        .attr('r', 10);

    svg
        .selectAll('circle')
        .attr('fill', 'red');


    function startColorAnimation(color) {
        var colorToSet = color === "red" ? "yellow" : "red";

        svg
            .selectAll('circle')
            .transition()
            .duration(1000)
            .attr('fill', colorToSet)
            .each("end", function () {
                startColorAnimation(colorToSet);
            });
    }

    startColorAnimation('red');
}());

