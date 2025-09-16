const numero = document.querySelector(".numero-principal");
const botaMenos = document.querySelector(".botao.decremento");
const botaoMais = document.querySelector(".botao.incremento");
const botaoReset = document.querySelector(".botao.reset");

botaoMais.addEventListener("click", () => numero.innerHTML = +numero.innerHTML + 1);
botaMenos.addEventListener("click", () =>  numero.innerHTML = +numero.innerHTML - 1);
botaoReset.addEventListener("click", () => numero.innerHTML = 0);