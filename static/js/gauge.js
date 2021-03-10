var washFrequency = data.metadata.map(d => d.wfreq)
console.log(`Washing Frequency: ${washFrequency}`);

var data3 = [
    {
        //domain: { x: [0, 1], y: [0, 1] },
        values: washFrequency,
        title: { text: "<b>Belly Button Washing Frequency</br> <br> Scrubs Per Week", font: {size: 14} },
        type: "indicator",
        showlegend: false,
        hole: 0.4,
        rotation: 90,
        text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
        direction: "clockwise",
        textinfo: "text",
        textposition: "inside",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 9] },
            bar: { color: "black" },
            bordercolor: "transparent",
            steps: [
                { range: [0, 1], color: "#e5d5e8" },
                { range: [1, 2], color: "#ddbce3" },
                { range: [2, 3], color: "#d8abe0" },
                { range: [3, 4], color: "#d093db" },
                { range: [4, 5], color: "#cc82d9" },
                { range: [5, 6], color: "#c46ad4" },
                { range: [6, 7], color: "#be54d1" },
                { range: [7, 8], color: "#b63bcc" },
                { range: [8, 9], color: "#9e11b8" }
            ],
        }
    }
];

//needle 
var degrees = 50, radius = .9
var radians = degrees * Math.PI / 180
var x = -1 * radius * Math.cos(radians) * washFrequency
var y = radius * Math.sin(radians)

//layout
var layout3 = {
    shapes: [{
        type: 'line',
        x0: 0.5,
        y0: 0.5,
        x1: 0.6,
        y1: 0.6,
        line: {
            color: 'black',
            width: 3
        }
    }],
    xaxis: {visible: false, range: [-1, 1]},
    yaxis: {visible: false, range: [-1, 1]},
    width: 500,
    height: 425,
    margin: {
        t: 20,
        b: 40,
        l: 100,
        r: 100
    },
    font: {
        color: "black",
        family: "Arial" 
    }
};

Plotly.newPlot("gauge", data3, layout3);
});
}