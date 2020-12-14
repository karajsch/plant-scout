// jQuery ready function to ensure html loads fully before JS is applied
$(document).ready(function () {
        // KEYS
        // my eBirds API
        var birdsKey = "kpre85dgbr8q";

        // CORS anywhere 
        var CORS = "https://cors-anywhere.herokuapp.com/";

        // my Trefle API
        var trefleKey = "XFCEuJcUs4V77OvMQjS1Xdkf01F0p_MnkDhaN5FyUSA";

        // eBirds URL
        var eBirdURL = "https://cors-anywhere.herokuapp.com/api.ebird.org/v2/data/obs/key=kpre85dgbr8q";



        // WHEN I search for a city
        // so need a getElementById or in jQuery $("#id")[], this will get HTML DOM data as opposed to getting the HTML element {https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery}


        // THEN I am presented with my city name, facts, and images about local plants [Trefle]. Syntax: 

        var plant
        var plant = "Oak Tree";

        // // Trefle URL
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

        // THEN I am presented with facts about local bird life in my area [eBird]. Syntax:

        var bird = "bohwax";
        var eBirdURL = "https://cors-anywhere.herokuapp.com/https://api.ebird.org/v2/data/obs/PA/recent" + bird;

        $.ajax({
                url: eBirdURL,
                method: "GET"
        }).then(function (birds) {
                console.log(birds);

                var tRow = $("<tr>");

                var birdTd = $("<td>").text(response.Bird);

                tRow.append(birdTd);

                $("tbody").append(tRow);
        });


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