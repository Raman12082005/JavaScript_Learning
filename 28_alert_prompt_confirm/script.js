document.write("value of a is : ")
alert("Enter the value of a : ")
let a = prompt("Enter the value of a : ", "Enter here")
a = Number.parseInt(a)
let write = confirm("Do you want to write it on the webpage")
// alert("YOU entered a of type " + (typeof a))
if(write){
    document.write(a)
}
else{
    document.write("PLease allow me")
}