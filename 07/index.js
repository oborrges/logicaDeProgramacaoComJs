/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patientList = [
  {
    name: "Luis",
    age: 29,
    weight: 90,
    height: 180,
  },

  {
    name: "Agatha",
    age: 24,
    weight: 65,
    height: 160,
  },

  { name: "Mallu",
    age: 2,
    weight: 10,
    height: 90,
  },
]

let patientNames = []

for(let patient of patientList) {
  patientNames.push(patient.name)
}

alert(patientNames)