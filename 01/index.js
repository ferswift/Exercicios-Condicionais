const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui

if (jogada1 === jogada2) {
  console.log("Empate");
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
  console.log("Pedra Vence !");
} else if (jogada1 === "pedra" && jogada2 === "papel") {
  console.log("Papel vence !");
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
  console.log("Pedra vence !");
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
  console.log("Tesoura Vence !");
} else if (jogada1 === "papel" && jogada2 === "pedra") {
  console.log("Papel vence !");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
  console.log("Tesoura vence !");
} else {
  console.log(
    "Jogada invalida! digite o valor correto: pedra, papel ou tesoura."
  );
}
