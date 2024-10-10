let carros = [];
let adicionarMais = true;
while (adicionarMais) {
  let carros={
    modelo: prompt(" Digite o modelo do carro:"),
    marca: prompt("Digite a marca do carro:"),
    ano: parseInt(prompt("Digite o ano do carro:")),
    valor: parseFloat(prompt("Digite o valor do carro:"))
  };
  carros.push(carro);
    let resposta =prompt("Deseja adicionar mais carros?(sim/não)");
   if(resposta!= "sim"){
   adicionarMais = false;
}
}
     let carroMaisCaro = carros[0];
     for (let i=1; i< carros.length; i++){
     if(carros[i].valor> carroMaisCaro.valor){

     carroMaisCaro = carros[i];
  }

}

console.log("O carro mais caro é:", carroMaisCaro);
