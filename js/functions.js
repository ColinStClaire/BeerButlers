///

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

parseJSON("/data/stout.json")

console.log("done in functions.js");