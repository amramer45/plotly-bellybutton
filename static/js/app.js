// getting data from the json file
function getPlot(id) {
    
    // Read in the JSON data
    d3.json("./data/samples.json").then((data) => {
    console.log(data);

        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)    
    
        //////////// bar /////////
        var samples = data.samples.filter(s => s.id.toString() === id)[0];
        console.log(samples);

        // //samples_values
        
        // //otu_ids

        // //otu_labels

        // // create data variable
        // var data1 = [trace];

        // //create layout
        // var layout = {
        //     title: ""
        // };

        // //create the bar plot
        // Plotly.newPlot("bar", data1, layout);


        // ////////// bubble/////////
        // // Use otu_ids for the x values.
        // // Use sample_values for the y values.
        // // Use sample_values for the marker size.
        // // Use otu_ids for the marker colors.
        // // Use otu_labels for the text values

        // //create 
        // Plotly.newPlot("bubble", data2, layout2);

        // //create
        // Plotly.newPlot("guage", data3, layout3);

    });

};
