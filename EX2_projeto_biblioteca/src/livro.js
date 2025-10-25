const livros = [];

function cadastrarLivro(titulo, autor) {
  if (!titulo || !autor) {
    throw new Error("Título e autor são obrigatórios");
  }

  const livro = {
    titulo,
    autor,
    criadoEm: new Date().toISOString()
  };

  livros.push(livro);
  return livro;
}

function buscarLivroPorTitulo(titulo) {
  return livros.find(l => l.titulo === titulo) || null;
}

module.exports = { cadastrarLivro, buscarLivroPorTitulo };

