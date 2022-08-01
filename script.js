const input = document.getElementById('to_do_input');
let tarefas = Array.from(document.querySelectorAll('.item'));
const lista = document.querySelector('.lista');
let circulos = Array.from(document.querySelectorAll('.circulo'));
let deletes = Array.from(document.querySelectorAll('.deletar_item'));

const chk = document.getElementById('chk');
let theme = document.querySelectorAll('.theme');

// TROCA DE TEMA
chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  theme.forEach((each) => each.classList.toggle('dark'));
});

// QUANTIDADE DE TAREFAS NA LISTA
function atualizaQuantidade() {
  const span = document.querySelector('.quantidade_tarefas');
  let quantidadeTarefas = tarefas.length;

  span.innerText = quantidadeTarefas;
  console.log(quantidadeTarefas);
}

document.addEventListener('load', atualizaQuantidade());

// FUNCIONALIDADES
function adicionarTarefa() {
  let novoItem = document.createElement('li');
  let circulo = document.createElement('div');
  let texto = document.createElement('p');
  let deletar = document.createElement('div');
  let novaTarefa = document.createTextNode(input.value);

  novoItem.classList.add('item');
  circulo.classList.add('circulo');
  texto.classList.add('item_texto');
  deletar.classList.add('deletar_item');

  if (document.body.classList.contains('dark')) {
    novoItem.classList.add('theme');
    novoItem.classList.add('dark');
    texto.classList.add('theme');
    texto.classList.add('dark');
  } else {
    novoItem.classList.add('theme');
    texto.classList.add('theme');
  }

  texto.appendChild(novaTarefa);
  novoItem.appendChild(circulo);
  novoItem.appendChild(texto);
  novoItem.appendChild(deletar);

  lista.appendChild(novoItem);

  input.value = '';
  tarefas.push(novoItem);
  circulos.push(circulo);
  deletes.push(deletar);
  theme = document.querySelectorAll('.theme');
  quantidadeTarefas = tarefas.length;
  atualizaQuantidade();
  tarefaConcluida();
  deletarTarefa();
}

// ADICIONAR TAREFA AO PRESSIONAR 'ENTER'
function addListaAfterKeypress(tecla) {
  if (tecla.key === 'Enter' && input.value != '') {
    adicionarTarefa();
  }
}

input.addEventListener('keypress', addListaAfterKeypress);

// MARCAR TAREFA COMO CONCLUÍDA
function tarefaConcluida() {
  circulos.forEach((circulo) => {
    circulo.addEventListener('click', (event) => {
      const i = circulos.indexOf(event.target);
      circulos[i].classList.toggle('done');
      tarefas[i].classList.toggle('done');
    });
  });
}
tarefaConcluida();

function deletarTarefa() {
  deletes.forEach((item) => {
    item.addEventListener('click', (event) => {
      const i = deletes.indexOf(event.target);
      event.target.parentElement.remove();
      tarefas.splice(i, 1);
      atualizaQuantidade();
    });
  });
}
deletarTarefa();

// DELETAR TAREFA
/* function deletarTarefa(e) {
  if (e.target.className === 'deletar_item') {
    e.target.parentElement.remove();
  }
  atualizaQuantidade();
}

lista.addEventListener('click', deletarTarefa); */
