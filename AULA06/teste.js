const filmes = ["Forrest Gump", "Interestelar", "Jumanji", "Mad Max"];

// A partir do índice 2, remove 1 elemento, portanto, apenas o item de índice 2
const filmesRemovidos = filmes.splice(2, 2, "Titanic", "O Senhor dos Anéis", "112");
console.log(filmesRemovidos); // ["Jumanji"]

console.log(filmes); 