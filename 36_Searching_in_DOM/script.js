// Change the card title to red

// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red";

let ctitle = document.getElementById("firstcard") // only returns one element
ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title") // returnss all the elements
ctitles[0].style.color = "blue"
ctitles[1].style.color = "green"
ctitles[2].style.color = "red"
console.log(ctitles)

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))
