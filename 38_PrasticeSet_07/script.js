let cg0 = document.querySelectorAll(".navbar")[0].firstElementChild
cg0.style.color = "red"

document.querySelectorAll(".navbar")[0].children[0].style.color = "green"
document.querySelectorAll(".navbar")[0].children[2].style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((Elem)=>{
    Elem.style.background = "cyan";
})