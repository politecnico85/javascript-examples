const canvas = d3.select(".canva")

var dataArray = [
    {width: 25, height: 4, fill: "pink"},
    {width: 25, height: 13, fill: "purple"},
    {width: 25, height: 25, fill: "orange"},
    {width: 25, height: 9, fill: "green"},
    {width: 25, height: 7, fill: "gray"},
    {width: 25, height: 2, fill: "yellow"}
]

const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);
            
const rect = svg.selectAll("rect")

d3.json("https://jsonplaceholder.typicode.com/todos/1")
    .then(data =>{
        console.log(data.title);
        //code here to actually draw elements on screen
})

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 24)
    .attr("fill", d => d.fill)
    .attr("height", function(d){
        return d.height*2;
    })
    .attr("x", function(d,i){
        console.log(0);
        return i*25;
    })
    .attr("y", function(d,i){
        return 100 - (d.height*2);
    })

    console.log(rect);