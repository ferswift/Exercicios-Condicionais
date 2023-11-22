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

const valorDaParcelaEmReais = valorDoProduto / quantidadeDoParcelamento / 100; // Valor da parcela em Reais
const parcelasPagas = valorPago / valorDaParcelaEmReais;

console.log(
  `Restam ${
    quantidadeDoParcelamento - parcelasPagas
  } parcelas de R$${valorDaParcelaEmReais.toFixed(2)}`
);
