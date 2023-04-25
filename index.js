/*
soicitar o nome do aluno, e as 3  notas do bimestre.
calcular a média do aluno.

a média positiva deverá ser maior que 6.

se o aluno passou no bimestre, dar os parabéns.

se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

em ambos os casos mostre o nome do aluno e a nota:
*/


let student = prompt("Qual o nome do(a) aluno(a) ?")

let note01 = prompt("Qual foi a nota da primeira prova?")
let note02 = prompt("Qual foi a nota da segunda prova?")
let note03 = prompt("Qual foi a nota da terceira prova?")

let result = (Number(note01) + Number(note02) + Number(note03)) / 3

if (result >= 6) {
  alert('Parabéns')
} else {
  alert('Reprovado')
}