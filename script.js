
// jQuery ready function to ensure html loads fully before JS is applied
$(document).ready(function () {
        // KEYS

        // CORS anywhere 
        var CORS = "https://cors-anywhere.herokuapp.com/";

        // my Trefle API
        var trefleKey = "XFCEuJcUs4V77OvMQjS1Xdkf01F0p_MnkDhaN5FyUSA";




        // WHEN I search for a city
        // so need a getElementById or in jQuery $("#id")[], this will get HTML DOM data as opposed to getting the HTML element {https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery}


        // THEN I am presented with my city name, facts, and images about local plants [Trefle]. Syntax: 

        var plant = "Oak Tree";

        // Trefle URL
        var trefleURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

        $.ajax({
                url: trefleURL,
                method: "GET"
        }).then(function (response) {
                console.log(response);

                var tRow = $("<tr>");

                var plantTd = $("<td>").text(response.Plant);
                var placeTd = $("<td>").text(response.Place);

                tRow.append(plantTd, placeTd);

                $("tbody").append(tRow);
        });

        // THEN I am presented with facts about local parks in my area. Syntax:
        var APIKey = "1676721fa532ea2e5a0ab18034cd5a47";
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?appid=" + APIKey;
        var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey;

        $("#search-button").click(citySearch)

        // search for city in side bar and get data in Console
        function citySearch(e) {
                if (e) {
                        e.preventDefault();
                }

                // userInput
                var city = $("#search-input").val()

                // jQuery Ajax call to another server [request to get current weather data from API]
                $.ajax({
                        url: currentWeatherURL + "&q=" + city,
                        method: "GET",
                }).then(function (response) {
                        return $.ajax({
                                url: queryURL + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon,
                                method: "GET",
                        }).then(function (onecallresponse) {
                                console.log(onecallresponse)
                                $("#city-name").text("Current City: " + city);
                                
                                $("#humidity").text("Humidity: " + onecallresponse.current.humidity);

                                $("#wind-speed").text("Wind Speed: " + onecallresponse.current.wind_speed);

                                $("#uv-index").text("Current UV-Index: " + onecallresponse.current.uvi);

                                // convert kelvin to fahrenheit (is not working with the display)
                                var fahrenheit = Math.round((parseFloat(onecallresponse.current.temp) - 273.15) * 1.80 + 32);
                                console.log(fahrenheit);

                                var degrees = "\u02DA"
                                $("#temp").text("Current Temperature: " + fahrenheit + degrees);

                        })
                })


        }

        // THEN my searches can be appended to the application page (this goes inside the $.ajax({})). Syntax:
        // var tRow = $("<tr>");

        // var birdData = $("<td>").text()
        // var plantData = ("<td>").text()

        // tRow.append(birdData, plantTd)

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


// const inputCharacter = document.getElementById("#search-button");
        // const userSearch = document.getElementById("#search-button");

        // userSearch.addEventListener("keyup", (e) => {
        // console.log(e.target.value)
        // });

        // placeSearch({
        //         key: 'qGB7LA5vtSnOJhSeAeVA9DhAIxt0mUTn',
        //         container: document.querySelector('#search-input')
        // });

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