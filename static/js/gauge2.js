var washFrequency = data.metadata.map(d => d.wfreq)
console.log(`Washing Frequency: ${washFrequency}`);

var data3 = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        title: { text: "<b>Belly Button Washing Frequency</br> <br> Scrubs Per Week", font: {size: 14} },
        type: "pie",
        showlegend: false,
        hole: 0.5,
        rotation: 90,
        text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
        hoverinfo: "skip",
        direction: "clockwise",
        textinfo: "text",
        textposition: "inside",
        values: [81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81],
        marker: { 
            colors: ["#e5d5e8", "#ddbce3", "#d8abe0", "#d093db", "#cc82d9", "#c46ad4", "#be54d1", "#b63bcc", "#9e11b8", "white"],
            labels: ["", "0", "1", "2", "3","4","5","6","7","8","9"],
            hoverinfo: "skip"
        },
        
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