/**
 * Created by colinstclaire on 10/18/16.
 */

function breweryDBGet(endpoint, parameter) {
    var url = "http://api.brewerydb.com/v2/" + endpoint + "?key=3dad4576e0edfa7128dbb5831f6968b8&name=" + parameter + "";
    $.ajax({
        type: "GET",
        url: url,
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
    })
}
