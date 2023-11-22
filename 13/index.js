//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

/*
A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.

| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |

**a)** Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado. O valor final do produto após o desconto pode ser encontrado com a fórmula:

$$ valorFinal = valorDoProduto - (valorDoProduto \* desconto)$$

Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.
*/

const valorDoProdutoEmReais = valorDoProduto / 100;
let desconto, valorFinal;

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  desconto = 0.1;
  valorFinal = (
    valorDoProdutoEmReais -
    valorDoProdutoEmReais * desconto
  ).toFixed(2);
  console.log(`O valor em ${tipoDePagamento} é de R$ ${valorFinal}`);
} else if (tipoDePagamento === "credito") {
  desconto = 0.05;
  valorFinal = (
    valorDoProdutoEmReais -
    valorDoProdutoEmReais * desconto
  ).toFixed(2);
  console.log(`O valor em ${tipoDePagamento} é de R$ ${valorFinal}`);
} else if (tipoDePagamento === "cheque") {
  desconto = 0.03;
  valorFinal = (
    valorDoProdutoEmReais -
    valorDoProdutoEmReais * desconto
  ).toFixed(2);
  console.log(`O valor em ${tipoDePagamento} é de R$ ${valorFinal}`);
} else {
  console.log("Valor inválido. Aceitamos Cheque, Crédito, Débito ou Dinheiro.");
}
