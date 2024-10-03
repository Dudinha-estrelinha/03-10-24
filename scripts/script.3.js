let carros = [];
let adicionarMais = true;
while (adicionarMais) {
  carros.push({
    modelo: prompt("Modelo do carro:"),
    marca: prompt("Marca do carro:"),
    ano: parseInt(prompt("Ano do carro:")),
    valor: parseFloat(prompt("Valor do carro:"))
  });
  adicionarMais = confirm("Adicionar outro carro?");
}

let carroMaisCaro = carros.reduce((maisCaro, carro) => carro.valor > maisCaro.valor ? carro : maisCaro);
console.log(carroMaisCaro);