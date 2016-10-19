/**
 * Created by colinstclaire on 10/18/16.
 */

function breweryDBGetBeer(beer) {
    $.ajax({
        type: "GET",
        url: "http://api.brewerydb.com/v2/beers?key=3dad4576e0edfa7128dbb5831f6968b8&name=" + beer +"",
        //data: args,
        contentType: "application/json; charset=urf-8",
        dataType: "json",
        success: function (data) {
            // populate results
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
