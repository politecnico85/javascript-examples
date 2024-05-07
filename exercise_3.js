const canvas = d3.select(".canva")

var dataArray = [4, 15, 34];


//const svg = canvas.append("svg")
//            .attr("width", 600)
//            .attr("height", 600);
            
const svg = canvas.select("svg")
            
const rect = canvas.selectAll("rect");

rect.attr("width", 24)
    .data(dataArray)
    .attr("fill", "orange")
    .attr("height", function(d){
        return d*3;
    })
    
    .attr("x", function(d, i) {
        console.log(d);
        return i*25;
    })
    .attr("y", function (d, i) {
        return 100 - (d*3);
    })
    
