let num1 = document.querySelector('.text1')
let num2 = document.querySelector('.text2')
let res = document.querySelector('.res')

let add = document.querySelector('.addition')
let sub = document.querySelector('.subtraction')
let mul = document.querySelector('.multiply')
let divis = document.querySelector('.division')

add.onclick = function() {
    let sum = +num1.value + +num2.value
    res.innerHTML=sum
    
}
sub.onclick = function() {
    let sum = +num1.value - +num2.value
    res.innerHTML=sum
    
}
mul.onclick = function() {
    let sum = +num1.value * +num2.value
    res.innerHTML=sum
    
}
divis.onclick = function() {
    let sum = +num1.value / +num2.value
    res.innerHTML=sum
}