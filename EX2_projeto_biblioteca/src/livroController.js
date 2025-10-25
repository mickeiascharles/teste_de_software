const { salvarLivro, consultarLivro } = require("./livroService");

function cadastrarLivroComServico(titulo, autor) {
  if (!titulo || !autor) {
    throw new Error("Título e autor são obrigatórios");
  }

  const livro = { titulo, autor };
  const sucesso = salvarLivro(livro);

  return sucesso ? "Livro salvo com sucesso!" : "Falha ao salvar livro.";
}

function buscarLivroComServico(titulo) {
  const livro = consultarLivro(titulo);
  if (!livro) {
    return "Livro não encontrado.";
  }
  return `Livro encontrado: ${livro.titulo} (${livro.autor})`;
}

module.exports = { cadastrarLivroComServico, buscarLivroComServico };