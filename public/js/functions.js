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


/*--------------------------------------------------------------
 Developers: Colin St. Claire, Adriene Cranny, Ryan Miller
 Function Name: getSearchResults(filePath);
 Description: Called on search button click or "enter" on search bar.
 Queries BreweryDB, stores img, beerId, beerName, and style, then calls
 getBreweryAppend.
 Modified: 11/30/16
 ---------------------------------------------------------------*/
function getSearchResults(search, divId) { // need to change this to use $.ajax for error handling
    var filePath = "/beersearch/?q=" + search;
    $.getJSON(filePath, function (json) {
        // clears previous search results
        $(".beerSearchContainer").empty();
        for (var element in json.data) {
            var img = json.data[element].labels;
            var beerId = json.data[element].id;
            var beerName = json.data[element].name;
            var style = "";
            if (typeof json.data[element].style !== 'undefined' && json.data[element].style) {
                style = json.data[element].style.shortName;
            }
            getBreweryAppend(beerId, img, beerName, style, divId);
            //console.log("beerId: " + beerId);
        }
    });
}

/*--------------------------------------------------------------
 Developer: Colin St. Claire, Adriene Cranny, Ryan Miller
 Function Name: getSearchResults(filePath);
 Description: The beginnings of the function that
 will parse our JSON files and append HTML to
 the results page.
 Modified: 11/30/16
 ---------------------------------------------------------------*/
function getBreweryAppend(beerId, img, beerName, style, divId) {
    var filePath = "/brewerysearch/?q=" + beerId;
    var brewery = "Not found";
    $.getJSON(filePath, function (json) {
        if (typeof json.data[0].name !== 'undefined' && json.data[0].name) {
            brewery = json.data[0].name;
        }
        //console.log(brewery);
        if (typeof img !== 'undefined' && img) {
            $("<div class='beerSearchContainer' id='results'><div><br><a href="+""+"><img src=" + img.medium + "></a></div>" +
                "<span>Name: " + beerName + "</span><br><span>Brewery: " + brewery +" </span><br>" +
                "<span>Style: " + style+ "</span><br></div>").appendTo(divId);
        }
    });
}


function foodResult(selection) {
    //Chicken/Poultry
    //Beef/Pork
    //Desserts
    //Vegetables
    //Salads
    var divId = "#foodResults";
    var chicken = ["pale ale"];
    var beef = ["amber ale"];
    var dessert =["stout"];
    var vegetable = ["saison"];
    var salad = ["pilsner"];
    switch(selection) {
        /* todo make an object of suitable beer search strings for each food type and search a random one

        */
        case "Chicken/Poultry":
            // chicken beer
            getSearchResults(chicken[0], divId);
            break;
        case "Beef/Pork":
            // beef beer
            getSearchResults(beef[0], divId);
            break;
        case "Desserts":
            //dessert beer
            getSearchResults(dessert[0], divId);
            break;
        case "Vegetables":
            // vegetables
            getSearchResults(vegetable[0], divId);
            break;
        case "Salads":
            // salads
            getSearchResults(salad[0], divId);
            break;
        default:
            break;
    }
}

function flavorResult(selection) {
    //Malty
    //Hoppy
    //Clean
    //Roasty
    //Hipster
    var divId = "#flavorResults";
    var malty = ["bock"];
    var hoppy = ["ipa"];
    var clean =["pilsner"];
    var roasty = ["stout"];
    var hipster = ["pabst"];
    switch(selection) {
        /* todo make an object of suitable beer search strings for each food type and search a random one

         */
        case "Malty":
            getSearchResults(malty[0], divId);
            break;
        case "Hoppy":

            getSearchResults(hoppy[0], divId);
            break;
        case "Clean":

            getSearchResults(clean[0], divId);
            break;
        case "Roasty":

            getSearchResults(roasty[0], divId);
            break;
        case "Hipster":

            getSearchResults(hipster[0], divId);
            break;
        default:
            break;
    }
}
