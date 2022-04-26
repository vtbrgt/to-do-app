const chk = document.getElementById("chk");
const theme = document.querySelectorAll(".theme");
const clear = document.querySelector(".clear");
const input = document.getElementById("to_do_input");
/* const lista = document.getElementsByClassName("lista"); */

var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function adicionarTarefa() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function tarefaConcluida() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", tarefaConcluida);

  let botaoDeletar = document.createElement("button");
  botaoDeletar.appendChild(document.createTextNode("X"));
  li.appendChild(botaoDeletar);
  botaoDeletar.addEventListener("click", deletarItem);

  function deletarItem() {
    li.classList.add("item");
    li.classList.add("theme");
    li.classList.add("delete");
  }
}

input.addEventListener("keypress", addListaAfterKeypress);

function addListaAfterKeypress() {
  if (inputLength() > 0 && event.which === 13) {
    adicionarTarefa();
  }
}

/* FUNÇÃO PARA MUDAR O TEMA */
chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.forEach((each) => each.classList.toggle("dark"));
});
