const canvas = d3.select(".canva")

var dataArray = [4, 15, 34, 123, 23];

const svg = canvas.select("svg")

const rect = svg.selectAll("rect")

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 24)
    .attr("fill", "orange")
    .attr("height", function(d){
        return d*2;
    })

    .attr("x", function(d,i){
        console.log(0);
        return i*25;
    })
    .attr("y", function(d,i){
        return 100 - (d*2);
    })