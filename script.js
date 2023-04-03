// DESAFIO ROCKETSEAT

alert("Vamos fazer a soma de 2 números")

let firstNumber = prompt("Qual é o primeiro número ?")
let secondNumber = prompt("Qual é o segundo número ?")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber      
const sub = firstNumber - secondNumber
const mul = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest= firstNumber % secondNumber

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é: ' + mul)
alert('A divisão dos dois números é: ' + div)
alert('O resto da divisão dos dois números é: ' + rest)


// 
let result = firstNumber + secondNumber 

if(result % 2 == 0) {
    alert("A soma dos 2 números é par: " + sum)
} else {
  alert("A soma dos 2 números é ímpar: " + sum)
}


let number = firstNumber == secondNumber

if(number) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes')
}


