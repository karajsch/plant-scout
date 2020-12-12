var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});