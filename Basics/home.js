function cal_age(){
    var year = prompt("Enter your Birth Year: ");
    var age = (2023-year)*365;
    document.getElementById("id-age").innerHTML="Days are:"+" "+age+"days old.";

    console.log(age);

}

function reset() {
    document.getElementById("id-age").remove();
}


function generateCat() {
    var container = document.querySelector(".image-container");
    var newImage = document.createElement("img");
    newImage.src = "download.jpg";
    newImage.alt = "Cat Image";
    container.appendChild(newImage);
}


function resetCats() {
    var container = document.querySelector(".image-container");
    container.innerHTML = "";
}