$(document).ready(function () {
        // KEYS
        // var mapQuestKey = "70E8X6jLI6nw29Le9G8TvkstrZeiZ0wW";
        // var CORS = "https://cors-anywhere.herokuapp.com/";
        // var trefleKey = "FeZ4wCC6Iqhbm3dsZ9ctF6O4KjM1KxChGVcP8_HI19s";
        // app functionality:
        // WHEN I search for a city
        // so need a getElementById or in jQuery $("#id")[], this will get HTML DOM data as opposed to getting the HTML element {https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery}
        // grab postal code for search
        
        var trefleKey = "FeZ4wCC6Iqhbm3dsZ9ctF6O4KjM1KxChGVcP8_HI19s"
        
        var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=FeZ4wCC6Iqhbm3dsZ9ctF6O4KjM1KxChGVcP8_HI19s";
        $.ajax({
                url: queryURL,
                method: "GET"
        }).then(function (response) {
                console.log(response);
        });
        
        
        // function mySearch(postal_code) {
        //         fetch('http://www.mapquestapi.com/search/v2/radius?q=' + postal_code + '&appid=' + key)
        //                 .then(function (resp) {
        //                         return resp.json()
        //                 }) // This converts our data to json.
        //                 .then(function (data) {
        //                         displayLocation(data);
        //                 })
        //                 .catch(function (err) {
        //                         // catch any errors
        //                         console.log(err)
        //                 });
        // } 
        // function mySearch(postal_code) {
        //         $.ajax({
        //                 url: CORS + 'https://www.mapquestapi.com/search/v2/radius?q=' + postal_code + '&appid=' + mapQuestKey,
        //                 method: "GET"
        //         }).then(function (response) {
        //                 console.log(response);
        //         })
        // }
        mySearch(18951);
        // potential code for search button: user types in zip code and place is displayed:
        // THEN I am presented with my city name, facts, and images about local plants [Trefle]. Syntax: 
        // $.ajax({
        //     url: [Trefle API key], 
        //     method: "GET"
        // }).then(function(response) {
        //     console.log(response);
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
})


// http://www.mapquestapi.com/geocoding/v1/address?key=xJLl5TPSyGCIT6uVxCpsx5RemRPyUOEN&acallback=renderOptions&inFormat=kvp&outFormat=json&location=Lancaster,PA&thumbMaps=false