// troca de tema

const chk = document.getElementById("chk");
const theme = document.querySelectorAll(".theme");

chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.forEach((each) => each.classList.toggle("dark"));
});

// funcionalidades 

const input = document.getElementById("to_do_input");
const tarefas = document.querySelectorAll(".item");
const lista = document.querySelector(".lista");

function adicionarTarefa() {
  let novoItem = document.createElement("li");
  let circulo = document.createElement("div");
  let texto = document.createElement("p");
  let deletar = document.createElement("div");
  let novaTarefa = document.createTextNode(input.value);

  novoItem.classList.add("item")
  novoItem.classList.add("theme")
  circulo.classList.add("circulo")
  texto.classList.add("item_texto")
  texto.classList.add("theme")
  deletar.classList.add("deletar_item")

  texto.appendChild(novaTarefa)
  novoItem.appendChild(circulo) // div circulo
  novoItem.appendChild(texto);
  novoItem.appendChild(deletar) // div deletar item

  lista.appendChild(novoItem);
  input.value = "";
}

/* ADICIONAR TAREFA AO PRESSIONAR 'ENTER' */
function addListaAfterKeypress() {
  if (event.which === 13) {
    adicionarTarefa();
  }
}

input.addEventListener("keypress", addListaAfterKeypress);