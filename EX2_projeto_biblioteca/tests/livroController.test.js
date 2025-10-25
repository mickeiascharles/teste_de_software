const { cadastrarLivroComServico, buscarLivroComServico } = require("../src/livroController");
const livroService = require("../src/livroService");

jest.mock("../src/livroService");

describe("Cadastro e consulta de livros (com mock)", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ---------- TESTES DE CADASTRO ----------

  test("deve retornar mensagem de sucesso quando salvarLivro retornar true", () => {
    livroService.salvarLivro.mockReturnValue(true);
    const resultado = cadastrarLivroComServico("A Batalha do Apocalipse", "Eduardo Spohr");
    expect(resultado).toBe("Livro salvo com sucesso!");
  });

  test("deve chamar salvarLivro ao cadastrar livro", () => {
    livroService.salvarLivro.mockReturnValue(true);
    cadastrarLivroComServico("A Batalha do Apocalipse", "Eduardo Spohr");
    expect(livroService.salvarLivro).toHaveBeenCalled();
  });

  test("deve chamar salvarLivro com os parâmetros corretos", () => {
    livroService.salvarLivro.mockReturnValue(true);
    cadastrarLivroComServico("A Batalha do Apocalipse", "Eduardo Spohr");
    expect(livroService.salvarLivro).toHaveBeenCalledWith({
      titulo: "A Batalha do Apocalipse",
      autor: "Eduardo Spohr"
    });
  });

  test("deve retornar falha quando salvarLivro retornar false", () => {
    livroService.salvarLivro.mockReturnValue(false);
    const resultado = cadastrarLivroComServico("Filhos do Éden", "Eduardo Spohr");
    expect(resultado).toBe("Falha ao salvar livro.");
  });

  test("deve chamar salvarLivro apenas uma vez", () => {
    livroService.salvarLivro.mockReturnValue(false);
    cadastrarLivroComServico("Filhos do Éden", "Eduardo Spohr");
    expect(livroService.salvarLivro).toHaveBeenCalledTimes(1);
  });

  // ---------- TESTES DE CONSULTA ----------

  test("deve retornar mensagem de sucesso ao encontrar livro", () => {
    livroService.consultarLivro.mockReturnValue({
      titulo: "O Senhor das Chamas",
      autor: "Eduardo Spohr"
    });
    const resultado = buscarLivroComServico("O Senhor das Chamas");
    expect(resultado).toBe("Livro encontrado: O Senhor das Chamas (Eduardo Spohr)");
  });

  test("deve chamar consultarLivro ao buscar livro", () => {
    livroService.consultarLivro.mockReturnValue({
      titulo: "O Senhor das Chamas",
      autor: "Eduardo Spohr"
    });
    buscarLivroComServico("O Senhor das Chamas");
    expect(livroService.consultarLivro).toHaveBeenCalled();
  });

  test("deve chamar consultarLivro com o título correto", () => {
    livroService.consultarLivro.mockReturnValue({
      titulo: "O Senhor das Chamas",
      autor: "Eduardo Spohr"
    });
    buscarLivroComServico("O Senhor das Chamas");
    expect(livroService.consultarLivro).toHaveBeenCalledWith("O Senhor das Chamas");
  });

  test("deve retornar mensagem de não encontrado quando serviço retornar null", () => {
    livroService.consultarLivro.mockReturnValue(null);
    const resultado = buscarLivroComServico("Inexistente");
    expect(resultado).toBe("Livro não encontrado.");
  });
});