// // Problem - 01, 02, 03
// let drive = true;
// while(drive){
//     let age = prompt("Enter your age : ", "-1")
//     age = Number.parseInt(age)
//     if(age < 0){
//         console.error("Enter correct age")
//         break;
//     }

//     if(age >= 18){
//         alert("You can drive")
//     }
//     else{
//         alert("You can't drive")
//     }
//     drive = confirm("Do you want to enter age again")
//     if(drive) continue;
//     else break
// }


// problem - 04
// let num = prompt("Enter a number : ")
// if(num > 4) location.href = "https://www.google.com/?zx=1780121352177"



// problen - 05
let colour = prompt("Enter color name : ");
let textcolor = prompt("Enter the color of text : ")

document.body.style.background = colour
document.body.style.color = textcolor
document.write("Hello World")