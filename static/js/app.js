// getting data from the json file
//function getPlot(id) {
id = "940"

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
        //Add OTU to value for char visualization 


        //otu_labels
        var otuLabel = selectedSample.otu_labels.slice(0, 10).reverse();
        console.log(`OTU Labels: ${otuLabel}`)

        //trace
        var trace1 = {
            type: "bar",
            name: "banana",
            x: sampleValues,
            y: otuIds,
            orientation: "h"
        };

        // create data variable
        var data1 = [trace1];

        // //create layout
        var layout1 = {
            title: "Top 10 OTU IDs for Selected ID"
        };

        //create the bar plot
        Plotly.newPlot("bar", data1, layout1);


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

//};
