const { cadastrarLivro, buscarLivroPorTitulo } = require("../src/livro");

describe("Cadastro e consulta de livros", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("deve cadastrar um livro com sucesso", () => {
    const livro = cadastrarLivro("O Senhor das Chamas", "Eduardo Spohr");
    expect(livro.titulo).toBe("O Senhor das Chamas");
    expect(livro.autor).toBe("Eduardo Spohr");
  });

  test("deve permitir buscar um livro cadastrado", () => {
    cadastrarLivro("Filhos do Éden", "Eduardo Spohr");
    const livro = buscarLivroPorTitulo("Filhos do Éden");
    expect(livro).not.toBeNull();
    expect(livro.autor).toBe("Eduardo Spohr");
  });

  test("deve retornar null se o livro não existir", () => {
    const livro = buscarLivroPorTitulo("Livro Inexistente");
    expect(livro).toBeNull();
  });

  test("deve lançar erro se faltar título ou autor", () => {
    expect(() => cadastrarLivro("", "Autor")).toThrow("Título e autor são obrigatórios");
  });
});