const { buscarLivroAsync } = require("../src/livroAsync");

describe("Testes assíncronos de busca de livros", () => {
  test("deve retornar o livro correto", async () => {
    const livro = await buscarLivroAsync("A Batalha do Apocalipse");
    expect(livro).toEqual({
      titulo: "A Batalha do Apocalipse",
      autor: "Eduardo Spohr",
    });
  });

  test("deve retornar null para livro inexistente", async () => {
    const livro = await buscarLivroAsync("Livro Inexistente");
    expect(livro).toBeNull();
  });
});