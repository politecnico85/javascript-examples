const canvas = d3.select(".canva")

const svg = canvas.append("svg")
            .attr('width', 600)
            .attr('height', 600);

var width = 500;
var height = 500;
var radius = Math.min(width, height);
var color = d3.scaleOrdinal(d3.schemeCategory20b);

// primer elemento

var g = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    

 // Data source
 var partition = d3.partition()
    .size([2 * Math.PI, radius]);

var root = d3.hierarchy(nodeData)
        .sum(function (d) { return d.size});


partirion(root);
var arc = d3.arc()
    .startAngle(function (d) { return d.depth ? null : "none";})
    .enter().append('path')
    .attr("display", function (d) { return d.depth ? null : "none"; })
    .attr("d", arc)
    .style('stroke', '#fff')
    .style("fill", function (d) { return color ((d.children ? d : d.parent).data.name);});