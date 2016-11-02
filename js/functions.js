/**
 * Created by colinstclaire on 10/31/16.
 */
/*---------------------------------------------
 Developer: Colin St. Claire
 Function Name: parseJSON(filePath);
 Description: The beginnings of the function that
 will parse our JSON files and append HTML to
 the results page.
 Modified: 11/01/16
 ---------------------------------------------*/
function parseJSON(filePath) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.open("GET", filePath, false);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var jsonObj = JSON.parse(request.responseText);
            console.log(jsonObj);
        } else {
            console.log("ERROR");
        }
    }
}

//parseJSON("/data/stout.json");

/*---------------------------------------------
 Developer: Colin St. Claire
 Function Name: getJSON(filePath);
 Description: The beginnings of the function that
 will parse our JSON files and append HTML to
 the results page.
 Modified: 11/01/16
 ---------------------------------------------*/
function getJSON(filePath) {
    $.getJSON(filePath, function (json) {
        /*$.each(json, function(key, val) {
            console.log("key: " + key + ", val: " + val);
            if (val.hasOwnProperty("labels")) {
                console.log(val + " has a label.");
                $("<img src='" + val.labels.medium + "'>").appendTo("#BeerHolder1");
            }
            $("<p>" + val.name + "</p>").appendTo("#BeerHolder1");
        });
        $("<p>" + json.data[0].name + "</p>").appendTo("#BeerHolder1");*/

        for (element in json.data) {
            var img = json.data[element].labels;
            if (typeof img !== 'undefined' && img) {
                console.log(img);
                $("<img src='" + json.data[element].labels.medium + "'>").appendTo("#BeerHolder1");
            }
        }
    });
}

console.log("done in functions.js");
