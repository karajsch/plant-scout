
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

// jQuery ready function to ensure html loads fully before JS is applied
$( document ).ready( function() {

})

// app functionality:
// WHEN I search for a city
    // so need a getElementById or in jQuery $("#id")[], this will get HTML DOM data as opposed to getting the HTML element {https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery}

// THEN I am presented with my city name, facts, and images about local plants [this will come from the NatureServer Explorer REST API]. Syntax: 
        // $.ajax({
        //     url: [NatureServer Explorer REST API], 
        //     method: "GET"
        // }).then(function(response) {
        //     console.log(response);
        // })

        // $.ajax({
        //     url: [API],
        //     method: "GET"
        // })

// WHEN I scroll down the page 
// THEN I can save profiles to local storage
// Syntax:
        // window.localStorage

        // to SAVE DATA to localStorage:
        // localStorage.setItem("key", "value");

        // to READ DATA from localStorage:
        // var lastname = localStorage.getItem("key");

        // to REMOVE DATA from localStorage:
        // localStorage.removeItem("key");

// THEN I can also receive recommendations about local parks to visit (this will come from MapQuest and National Park Service API) 
// 

