var plant = "evergreen oak";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[1].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[1].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[1].common_name);
    var scientific_nameTd = $("<td>").text(response.data[1].scientific_name);
    var familyTd = $("<td>").text(response.data[1].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});


var plant = "common yarrow";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[1].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[1].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[1].common_name);
    var scientific_nameTd = $("<td>").text(response.data[1].scientific_name);
    var familyTd = $("<td>").text(response.data[1].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "English oak";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "queen of the meadow";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "stinging nettle";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "orchardgrass";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "creeping buttercup";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});

var plant = "red clover";
var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.data[0].common_name);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var td = $("<td>");
    var saveButton = $("<button class='btn btn-success'>").text("Save");
    td.append(saveButton);
    var imagePlant = $("<img class='imagePlant'>").attr("src", response.data[0].image_url);
    var image_urlTd = $("<td>").append(imagePlant);
    var common_nameTd = $("<td>").text(response.data[0].common_name);
    var scientific_nameTd = $("<td>").text(response.data[0].scientific_name);
    var familyTd = $("<td>").text(response.data[0].family);
    tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
    tBody.append(tRow);
});