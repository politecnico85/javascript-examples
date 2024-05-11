const canvas = d3.select(".canva")

const svg = canvas.append("svg")
            .attr('width', 600)
            .attr('height', 600);

var width = 500;
var height = 500;
var radius = Math.min(width, height) / 2 ;
var color = d3.scaleOrdinal(d3.schemeTableau10);

// primer elemento

const g = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    
const arc = d3.arc()
        .startAngle(function (d) { return d.x0 })
        .endAngle(function (d) { return d.x1 })
        .innerRadius(function (d) { return d.y0 })
        .outerRadius(function (d) { return d.y1 });

 // Data source
 //var partition = d3.partition()
//    .size([2 * Math.PI, radius]);

//var root = d3.hierarchy(nodeData)
//        .sum(function (d) { return d.size});


//partirion(root);


    
d3.json("../data/data.json")
    .then(data => {

        const partition = d3.partition()
        .size([2 * Math.PI, radius]);

        const root = d3.hierarchy(data)
        .sum(function (d) { return d.size});

        partition(root);

        g.selectAll('path')
        .data(root.descendants())
        .enter().append('path')
        .attr("display", function (d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .style('stroke', '#fff')
        .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });


    })    