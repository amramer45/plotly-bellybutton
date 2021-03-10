// getting data from the json file
function getPlot(id) {
//id = "940"

    // Read in the JSON data
    d3.json("./data/samples.json").then((data) => {
    console.log(data)  
    
        //////////// bar /////////
        var selectedSample = data.samples.filter(item => item.id.toString() === id)[0];
        console.log(`ID Selected: ${id}`)
        console.log(selectedSample);

        // get only top 10 sample values to plot and reverse for the plotly
        var sampleValues = selectedSample.sample_values.slice(0, 10).reverse();
        console.log(`Selected Sample: ${sampleValues}`)
        
        //otu_ids
        var otuIds = selectedSample.otu_ids.slice(0, 10).reverse();
        console.log(`OTU ID: ${otuIds}`)
        //Add OTU to value for chart visualization 
        otuIdsWord = otuIds.map(x => "OTU: " + x)


        //otu_labels
        var otuLabel = selectedSample.otu_labels.slice(0, 10).reverse();
        console.log(`OTU Labels: ${otuLabel}`)

        //trace
        var trace1 = {
            type: "bar",
            x: sampleValues,
            y: otuIdsWord,
            orientation: "h"
        };

        // create data variable
        var data1 = [trace1];

        // //create layout
        var layout1 = {
            title: "Top 10 OTU IDs for Selected ID",
            yaxis: {},
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };

        //create the bar plot
        Plotly.newPlot("bar", data1, layout1);


        // ////////// bubble/////////

        var sampleValuesBubble = selectedSample.sample_values;
        var otuIdsBubble = selectedSample.otu_ids;
        var otuLabelBubble = selectedSample.otu_labels;

        //trace
        var trace2 = {
            x: otuIdsBubble,
            y: sampleValuesBubble,
            mode: "markers",
            marker: {
                size: sampleValuesBubble,
                color: otuIdsBubble,
                colorscale: [[0, 'darkblue'], [0.33, 'blue'], [0.67, 'purple'], [1, 'lavender']],
                opacity: [1, 0.8, 0.6, 0.4],
            },
            text: otuLabelBubble
        };

        // create data variable
        var data2 = [trace2];

        //create layout
        var layout2 = {
            xaxis: {title: "Operational Taxonomic Unit (OTU) ID"},
            yaxis: {title: "Frequency"},
            height: 500,
            width: 1200
        };

        Plotly.newPlot("bubble", data2, layout2);

        //////////create gauge chart///////////

    var selectedID = data.metadata.filter(item => item.id.toString() === id)[0];
    var washFrequency = selectedID.wfreq;
        //console.log(`Washing Frequency: ${washFrequency}`);
            var data3 = [
                {domain: { x: [0, 1], y: [0, 1] },
                value: washFrequency,
                title: { text: "<b>Belly Button Washing Frequency</br> <br> Scrubs Per Week", font: {size: 14} },
                type: "indicator",
                mode: "gauge+number",
                direction: 'clockwise',
                showlegend: false,
                gauge: {
                    axis: { range: [0, 9], tickwidth: 1, tickcolor: "d#00008B", showticklables: false },
                    bgcolor: "white",
                    borderwidth: 2,
                    bar: { color: "#00008B" },
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
            }];
                
            //layout
            var layout3 = {
                width: 500,
                height: 425,
                margin: {
                    t: 20,
                    b: 40,
                    l: 0,
                    r: 0
                },
            }    
        
    Plotly.newPlot("gauge", data3, layout3);
});
}

function getInfo(id) {
    //Getting Demographic data
    d3.json("./data/samples.json").then((data) => {
        
        //get metadata for the info panel
        var metadata = data.metadata
        //console.log(metadata)
    
        //Filter
        var result = data.metadata.filter(item => item.id.toString() === id)[0];
        
        //Set drop menu to the selected id
        var demographicInfo = d3.select("#sample-metadata");
        
        //Empty the info panel each time
        demographicInfo.html("");
        
        //Append demographic data for the id to the info panel
        Object.entries(result).forEach((idInfo) => {
            demographicInfo.append("p").text(`${idInfo[0]} : ${idInfo[1]} \n`);
        });
    });

}

//Event change function
function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

//create the function for the initial data rendering
function init() {
    //select dropdown menu
    var dropdown = d3.select("#selDataset");

    //read the data
    d3.json("./data/samples.json").then((data) => {
        //console.log(data)

        //get the id data to the dropdown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        //call the functions to display the data and plots
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    
    });
}

//initialize the dashboard 
init();