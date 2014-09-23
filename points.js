(function () {
    var svg = d3.select('body').append('svg'),
        svgHeight = parseInt(svg.style("height"), 10),
        svgWidth = parseInt(svg.style('width'), 10),
        cx = 10,
        cy = 50,
        radius = 10;

    for(var i = 100; i <= 900; i = i + 100) {
        new Point(svgWidth, svgHeight, radius, cx + i * Math.random(), cy + i * Math.random(), i*10, Math.floor(Math.random()*10));
    }
}());

