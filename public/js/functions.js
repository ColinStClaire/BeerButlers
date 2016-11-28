/**
 * Created by colinstclaire on 10/31/16.
 */
$.ajaxSetup({
    async: false
});
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
 Function Name: getSearchResults(filePath);
 Description: The beginnings of the function that
 will parse our JSON files and append HTML to
 the results page.
 Modified: 11/01/16
 ---------------------------------------------*/
function getSearchResults(search) { // need to change this to use $.ajax for error handling
    var filePath = '/beersearch/?q=' + search;
    $.getJSON(filePath, function (json) {
        // clears previous search results
        $(".beerSearchContainer").empty();
        for (var element in json.data) {
            var img = json.data[element].labels;
            var beerId = json.data[element].id;
            var beerName = json.data[element].name;
            var brewery = getBrewery(beerId);
            //var style = json.data[element].style.shortName;
            //var href = "http://google.com/search?q=" + brewery + "+" + beerName + "+" + style;

            console.log("beerId: " + beerId);
            //console.log("brewery: " + brewery);
            //alert(brewery);
            if (typeof img !== 'undefined' && img) {
                $("<div class='beerSearchContainer'><div><br><a href="+""+"><img src=" + img.medium + "></a></div>" +
                    "<span>Name: " + beerName + "</span><br><span>Brewery: "+ brewery +"</span><br>" +
                    "<span>Style: " + json.data[element].style.shortName + "</span><br></div>").appendTo("#beerHolderResults");
            }
        }
    });
}

function getBrewery(beerId) {
    var filePath = "/brewerysearch/?q=" + beerId;
    var brewery = "Not found";
    /*$.ajax({
       url: filePath,
       async: false,
       dataType: 'json',
       complete: function(json) {
           brewery = json.data[0].name;
       }
    });
    return brewery;
    */
    $.getJSON(filePath, function (json) {
        brewery = json.data[0].name;
        //alert(brewery);
        success: return brewery;
    });
}

function returnBrewery(brewery) {
    return brewery;
}

/*---------------------------------------------
 Developer: Adriene Cranny
 Function Name: getAllBeers(filePath);
 Description: Goes through every JSON file and gets all names
 Modified: 11/03/16
 ---------------------------------------------*/
function getAllBeers(search) {
    var filePath ='/beersearch/?q=' + search;
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

