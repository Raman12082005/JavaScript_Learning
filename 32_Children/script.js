console.log(document.firstChild)
console.log(document.lastChild)
// console.log(document.body.childNodes)

console.log(document.childNodes[0])
console.log(document.childNodes[document.childNodes.length-1])

console.log(document.body.hasChildNodes())


let arr = Array.from(document.body.childNodes)
console.log(arr)

console.log(typeof document.body.childNodes)
console.log(typeof arr)