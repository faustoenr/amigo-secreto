let amigos = [];

function agregarAmigo() {
  let input = document.querySelector("#amigo");
  let nombre = input.value.trim();

  if (nombre.length > 0) {
    amigos.push(nombre); //alert(`Amigo ${nombre} agregado`);
    input.value = "";
    actualizarLista();
  } else {
    alert("Por favor, ingresa un nombre");
  } //console.log(amigos);
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos uno.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado"); // Corregido: cerramos strong y quitamos el <li> fuera de lugar
  resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
