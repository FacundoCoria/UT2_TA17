const btn = document.getElementById("incremento");
const increment = document.getElementById("contador");

let contador = 0;

btn.addEventListener("click", () => {
    contador++;
    increment.innerHTML = contador;
});
