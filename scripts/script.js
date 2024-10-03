let pessoa = [];
pessoa.push({
  nome: prompt("Digite o nome da pessoa:"),
  idade: parseInt(prompt("Digite a idade da pessoa:")),
  cidade: prompt("Digite a cidade onde mora:")
});

console.log(pessoa[0]);

let opcao = prompt("1 para atualizar idade ou 2 para atualizar cidade:");
if (opcao === "1") {
  pessoa[0].idade = parseInt(prompt("Nova idade:"));
} else if (opcao === "2") {
  pessoa[0].cidade = prompt("Nova cidade:");
}

console.log(pessoa[0]);
