//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

/*
Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou estar acompanhado de um responsável. Sendo assim:

**a)** Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, só será possível acompanhado de um responsável.
*/

if (idadeDoAluno >= 18 || possuiResponsavel) {
  console.log(
    "Pode realizar a matricula, pois é maior de idade ou está acompanhado dos pais."
  );
} else {
  console.log(
    "Não pode realizar a matricula por ser de menor ou não estar acompanhado."
  );
}
