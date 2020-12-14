
// jQuery ready function to ensure html loads fully before JS is applied
$(document).ready(function () {
        // KEYS
        // CORS anywhere 
        var CORS = "https://cors-anywhere.herokuapp.com/";
        // my Trefle API
        var trefleKey = "XFCEuJcUs4V77OvMQjS1Xdkf01F0p_MnkDhaN5FyUSA";




        // WHEN I search for a city

        // THEN I am presented with facts, and images about local plants [Trefle]. 
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

        // THEN I am presented with weather facts in my region for my plant scout.
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
                                console.log(onecallresponse);
                                $("#city-name").text("Current City: " + city);
                                
                                $("#humidity").text("Humidity: " + onecallresponse.current.humidity);

                                $("#uv-index").text("Current UV-Index: " + onecallresponse.current.uvi);

                                $("#visibility").text("Visibility: " + onecallresponse.current.visibility);

                                // convert kelvin to fahrenheit 
                                var fahrenheit = Math.round((parseFloat(onecallresponse.current.temp) - 273.15) * 1.80 + 32);

                                // display degrees symbol
                                var degrees = "\u02DA"
                                $("#temp").text("Current Temperature: " + fahrenheit + degrees + "F");

                                // convert UNIX sunrise time
                                var unixTimeSunrise = onecallresponse.current.sunrise;

                                var date = new Date(unixTimeSunrise * 1000);

                                var hours = date.getHours();
                                var minutes = "0" + date.getMinutes();

                                var formattedSunrise = hours + ":" + minutes.substr(-2);
                                console.log(formattedSunrise);

                                $("#sunrise").text("Sunrise: " + formattedSunrise);

                                // convert UNIX sunset time measurement
                                var unixTimeSunset = onecallresponse.current.sunset;

                                var date = new Date(unixTimeSunset * 1000);

                                var hours = date.getHours();
                                var minutes = "0" + date.getMinutes();

                                var formattedTime = hours + ":" + minutes.substr(-2);

                                console.log(formattedTime);
                                $("#sunset").text("Sunset: " + formattedTime);


                        })
                })


        // THEN my searches can be appended to the application page

        }

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