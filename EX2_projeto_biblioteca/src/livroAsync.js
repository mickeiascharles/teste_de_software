function buscarLivroAsync(titulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (titulo === "A Batalha do Apocalipse") {
        resolve({ titulo, autor: "Eduardo Spohr" });
      } else {
        resolve(null);
      }
    }, 200); // simula uma pequena espera
  });
}

module.exports = { buscarLivroAsync };