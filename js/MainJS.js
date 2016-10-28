/**
 * Created by colinstclaire on 10/18/16.
 */

function breweryDBGet(endpoint, parameter) {
    /*$.ajax({
        type: "GET",
        url: URL,
        contentType: "application/json; charset=urf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data) {
            // populate results
            alert("SUCCESS");
            var myData = JSON.parse(data);
            $.each(myData, function(index, element) {
                alert("index: " + index + ", element: " + element);
            })
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR: " + thrownError + " was thrown");
        }
    })*/

    var req = new XMLHttpRequest();
    req.open("get", URL, true);
    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            console.warn(req.responseText);
            var response = JSON.parse(req.responseText);
            var numberOfResults = response.totalResults; // parameter not recognized
            console.log(numberOfResults);
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    var data = processData(req);
    alert(data.name);
}

/*var BreweryDB = require("brewerydb-node");
var brewDB = new BreweryDB(["3dad4576e0edfa7128dbb5831f6968b8"]);

brewDB.beer.getById("avMkil", {}, callback);
*/

