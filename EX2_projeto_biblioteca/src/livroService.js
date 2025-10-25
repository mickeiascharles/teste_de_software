function salvarLivro(livro) {
  console.log("Salvando no banco de dados:", livro);
  return true;
}

function consultarLivro(titulo) {
  console.log("Consultando livro no banco:", titulo);
  return { titulo, autor: "Autor Genérico" };
}

module.exports = { salvarLivro, consultarLivro };