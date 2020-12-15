function retrieve_plant(plant) {
    $("tbody").empty()
    var queryURL = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk&filter[common_name]=" + plant;
    var searchUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=${plant}&token=k-sJ91dZASAK9fMJxEhTacaKeN9cBPDY5nOmcWJsusk`

    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response) {
        if (response.data.length > 0) {
            response.data.forEach(plant => {
                var tBody = $("tbody");
                var tRow = $("<tr>");
                var td = $("<td>");
                var saveButton = $("<button class='btn btn-success save-btn'>").text("Save");
                td.append(saveButton);
                var imagePlant = $("<img class='imagePlant'>").attr("src", plant.image_url ? plant.image_url : "https://marvel-b1-cdn.bc0a.com/f00000000202027/www.wellnesspetfood.com/sites/default/files/styles/blog_feature/public/media/images/happy-cat-blog-cover.jpg?itok=kJhdXlkP");
                var image_urlTd = $("<td>").append(imagePlant);
                var common_nameTd = $("<td class='common_name'>").text(plant.common_name);
                var scientific_nameTd = $("<td>").text(plant.scientific_name);
                var familyTd = $("<td>").text(plant.family);
                tRow.append(td, common_nameTd, image_urlTd, scientific_nameTd, familyTd);
                tBody.append(tRow);

            })
        } else {
            alert("No data found")
        }
    });

}

$("#plant-search-button").on("click", function (event) {
    event.preventDefault();
    console.log("You Clicked me");
    let searched = $("#plant-search").val()
    retrieve_plant(searched)
    document.getElementById("plant-search").value = "";
})
//WHEN I push the save plant button
//THEN the name of the plant appears in My Saved Plants

function get_from_local_storage() {
    $("#savedPlants").empty()
    let saved = JSON.parse(localStorage.getItem("saved"))
    console.log(saved)
    // conditional to make sure it is not null
    if (saved) {
        saved.forEach(plant => {
            console.log(plant)
            $("#savedPlants").append(`<li><a href="#">&nbsp;&nbsp${plant}</a></li>`)
        })
    }
    //WHEN I receive my plant results

    $("table").on("click", ".save-btn", function () {
        let selected = $(this).parent().siblings("td.common_name")[0].innerText
        console.log(selected);
        var savedChoices = [];

        savedChoices.push(selected)
        localStorage.setItem("saved", JSON.stringify(savedChoices))
        get_from_local_storage()
    })
    get_from_local_storage()

    //THEN I can click on the "save" button for the ones I want to keep
    //THEN they appear in the "My Saved Plants" div
    //retrieve_plant("rose")



}