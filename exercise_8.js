const canvas = d3.select(".canva");

const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);


const rect = svg.selectAll("rect");

d3.json('text.json')
    .then(data => {
        console.log(data);

        const y = d3.scaleLinear()
                    .domain([0,d3.max(data, d => d.height)])
                    .range([0,250]);
                    
        //console.log(y(0));
        //console.log(y(250));            
        //console.log(y(500));  

        const x = d3.scaleBand()
                .domain(data.map(item => item.fill))
                .range([0,500])
                .paddingInner(0.010);

        //console.log(data.map(item => item.fill));
        //console.log(x("magenta"));

        console.log(x.bandwidth());


        rect.data(data)
            .enter().append("rect")
            .attr("width",  x.bandwidth)
            .attr("height", (d, i) => y(d.height))
            .attr("fill", (d) => d.fill)
            .attr("x", (d,i) => x(d.fill))
            
    })
