let livros = [];

for (let i = 0; i < 2; i++) {
  livros.push({
    nome: prompt("Nome do livro:"),
    autor: prompt("Autor do livro:"),
    ano: parseInt(prompt("Ano de publicação:"))
  });
}

console.log(livros[livros[0].ano < livros[1].ano ? 0 : 1]);

console.log(livros.some(l => l.nome.toLowerCase() === "estudando programação") ? "SIM" : "NÃO");

console.log(livros[0].autor === livros[1].autor ? "Mesmo autor" :' Autores: ${livros[0].autor}, ${livros[1].autor}');
