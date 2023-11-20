const nota = 8.5;

/*
Num colégio está sendo feita uma migração de notas (que variam de 0 a 10) para conceitos (que variam de A até E).

Para não perder o histórico de alunos antigos e mantê-lo condizente com a nova forma conceitual de avaliar, você deve fazer um programa que transforma uma nota em conceito, de acordo com a seguinte tabela:

| Nota        | Conceito |
| ----------- | -------- |
| 9 a 10      | A        |
| 8 a 8,9     | B        |
| 6 a 7,9     | C        |
| 4 a 5,9     | D        |
| menos que 4 | E        |
*/

if (nota < 4) {
  console.log("Conceito E");
} else if (nota <= 5.9) {
  console.log("Conceito D");
} else if (nota <= 7.9) {
  console.log("Conceito C");
} else if (nota <= 8.9) {
  console.log("Conceito B");
} else {
  console.log("Conceito A");
}
