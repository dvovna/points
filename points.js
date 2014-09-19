var svg = d3.select('body').append('svg')

svg
    .attr('x', 50)
    .attr('y', 50);

svg
    .append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 10)
    .attr('fill', 'yellow')
    .transition()
    .duration(1000)
    .attr('fill', 'red')
    .transition()
    .duration(1000)
    .attr('fill', 'yellow')

