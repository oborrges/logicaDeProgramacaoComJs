/*
Capiturar 2 número
e fazer as operações matemáticas
de soma, subtração, multiplicação, divisão
e resto da divisão.

E para cada operação mostras um alerta com o resulado.
*/

alert('Vamos fazer operações matemáticas?')

let firstNumber = prompt('Digite o primeiro número:')
let secoundNumber = prompt('Digite o segundo número:')

const sum = firstNumber + secoundNumber
const sub = firstNumber - secoundNumber
const multi = firstNumber * secoundNumber
const div = firstNumber / secoundNumber
const resDiv = firstNumber % secoundNumber

alert('A soma é: ' + sum) 
alert('A subtração é: ' + sub) 
alert('A multiplicação é: ' + multi) 
alert('A divisão é: ' + div) 
alert('O resto da divisão é: ' + resDiv) 