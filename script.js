$(document).ready(function () {

    var searchTREFLE = function (plant) {
        var queryURL = "https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk" + plant;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(data.json());
        });
    };



    var plant = "balsam fir";
    var queryURL = "https://trefle.io/api/v1/plants?" + plant + "&token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(data.json());
    });


});