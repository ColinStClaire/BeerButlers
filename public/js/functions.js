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
function getJSON(filePath) { // need to change this to use $.ajax for error handling
    $.getJSON(filePath, function (json) {
        $(".beerSearchContainer").empty();
        for (var element in json.data) {
            var img = json.data[element].labels;
            if (typeof img !== 'undefined' && img) {
                $("<div class='beerSearchContainer'><div><br><img src='" + img.medium + "'></div>" +
                    "<span>Name:</span><br><span>Brewery:</span><br>" +
                    "<span>Style:</span><br></div>").appendTo("#beerHolderResults");
            }
            //$("<p>" + element.name + "</p>").appendTo("#BeerHolder1");
        }
    });
}

/*---------------------------------------------
 Developer: Adriene Cranny
 Function Name: getAllBeers(filePath);
 Description: Goes through every JSON file and gets all names
 Modified: 11/03/16
 ---------------------------------------------*/
function getAllBeers(filePath) {
    $.getJSON(filePath, function (json) {
        for (var element in json.data) {
            var beer = json.data[element];
            $("<li><a href=''>" + beer.name + "</a></li>").appendTo("#BreweryHolder1");
            //var val = json.data[element];
           // $("<li><a href=''>" + val.id + "</a></li>").appendTo("#BreweryHolder1");
        }
    });
}

/*---------------------------------------------
 Developer: Colin St. Claire
 Function Name: searchAndNavToResults(filePath);
 Description: Navigates to the results.html page,
 and performs a beer search
 Modified: 11/01/16
 ---------------------------------------------*/
function searchAndNavToResults(parameter) {
    var resultsPage = window.open("results.html","_self");
    resultsPage.getJSON("data/" + parameter + ".json");
    //$('#beerSearchResults').val(parameter);
    /*$('#searchButtonResults').triggerHandler("click", function() {
        getJSON("data/" + parameter + ".json");
    })*/
}


console.log("done in functions.js");

