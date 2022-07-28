const input = document.getElementById("to_do_input");
let tarefas = Array.from(document.querySelectorAll(".item"));
const lista = document.querySelector(".lista");
let quantidadeTarefas = tarefas.length;
let circulos = Array.from(document.querySelectorAll('.circulo'));

const chk = document.getElementById("chk");
let theme = document.querySelectorAll(".theme");

// TROCA DE TEMA
chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.forEach((each) => each.classList.toggle("dark"));
});

// QUANTIDADE DE TAREFAS NA LISTA 
function atualizaQuantidade() {
  const span = document.querySelector(".quantidade_tarefas");

  span.innerText = quantidadeTarefas;
}

document.addEventListener('load', atualizaQuantidade());

// FUNCIONALIDADES 
function adicionarTarefa() {
  let novoItem = document.createElement("li");
  let circulo = document.createElement("div");
  let texto = document.createElement("p");
  let deletar = document.createElement("div");
  let novaTarefa = document.createTextNode(input.value);

  novoItem.classList.add("item");
  circulo.classList.add("circulo");
  texto.classList.add("item_texto");
  deletar.classList.add("deletar_item");

  if (document.body.classList.contains("dark")) {
    novoItem.classList.add("theme");
    novoItem.classList.add("dark");
    texto.classList.add("theme");
    texto.classList.add("dark");
  } else {
    novoItem.classList.add("theme");
    texto.classList.add("theme");
  }
  

  texto.appendChild(novaTarefa);
  novoItem.appendChild(circulo);
  novoItem.appendChild(texto);
  novoItem.appendChild(deletar); 

  lista.appendChild(novoItem);

  input.value = "";
  tarefas.push(novoItem);
  circulos.push(circulo);
  theme = document.querySelectorAll(".theme");
  quantidadeTarefas = tarefas.length;
  atualizaQuantidade();
}

  // ADICIONAR TAREFA AO PRESSIONAR 'ENTER'
function addListaAfterKeypress() {
  if (event.which === 13) {
    adicionarTarefa();
  }
}

input.addEventListener("keypress", addListaAfterKeypress);

  // MARCAR TAREFA COMO CONCLUÍDA
circulos.forEach((circulo) => {
  tarefas = Array.from(document.querySelectorAll(".item"));
  circulo.addEventListener('click', (event) => {
    let i = circulos.indexOf(event.target)
    tarefas[i].classList.toggle('done');
  })
})


/* if (event.target.tagName === 'DIV') {
    event.target.classList.toggle('done')
  } */