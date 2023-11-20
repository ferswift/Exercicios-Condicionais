//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

/*
Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.

Para o exemplo acima, o programa deve imprimir a mensagem:

```
Restam 7 parcelas de R$100
```

Teste seu programa para outras entradas.

*/

const valorDaParcela = valorDoProduto / 100 / quantidadeDoParcelamento; // cada parcela custa 100 reais

const parcelasPagas = valorPago / valorDaParcela; // 300 / 100 = 3

const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas; // Restam 7 parcelas.

const resultado = parcelasRestantes * valorDaParcela; // 7 * 100

console.log(`Restam ${parcelasRestantes} parcelas de R$${resultado}`);
