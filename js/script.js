const input = document.getElementById('to_do_input');
let tarefas = Array.from(document.querySelectorAll('.item'));
let lista = document.querySelector('.lista');
const clear = document.querySelector('.clear');
const filtros = Array.from(document.querySelectorAll('.filtrar_itens button'));

const chk = document.getElementById('chk');
let theme = document.querySelectorAll('.theme');

// TROCA DE TEMA
chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  theme.forEach((each) => each.classList.toggle('dark'));
});

// QUANTIDADE DE TAREFAS NA LISTA
function atualizaQuantidade(referencia) {
  tarefas = Array.from(document.querySelectorAll('.item'));
  const span = document.querySelector('.quantidade_tarefas');
  let quantidadeTarefas = referencia.length;

  span.innerText = quantidadeTarefas;
}

document.addEventListener('load', atualizaQuantidade(tarefas));

// FUNCIONALIDADES

  //ADICIONAR TAREFA
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
  theme = document.querySelectorAll('.theme');
  quantidadeTarefas = tarefas.length;
  atualizaQuantidade(tarefas);
}

  // ADICIONAR TAREFA AO PRESSIONAR 'ENTER'
function addListaAfterKeypress(tecla) {
  if (tecla.key === 'Enter' && input.value != '') {
    adicionarTarefa();
  }
}

input.addEventListener('keypress', addListaAfterKeypress);

  // MARCAR TAREFA COMO CONCLUÍDA
function tarefaConcluida(e) {
  if (e.target.className === 'circulo') {
    e.target.classList.add('done');
    e.target.parentElement.classList.add('done');
  } else if (e.target.className === 'circulo done') {
    e.target.classList.remove('done');
    e.target.parentElement.classList.remove('done');
  }
}
lista.addEventListener('click', tarefaConcluida)

  // DELETAR TAREFA
function deletarTarefa(e) {
  if (e.target.className === 'deletar_item') {
    e.target.parentElement.remove();
    tarefas = Array.from(document.querySelectorAll('.item'));
    atualizaQuantidade(tarefas);
  }
}
lista.addEventListener('click', deletarTarefa);

  // LIMPAR TAREFAS CONCLUÍDAS
function limparConcluidos() {
  tarefas.filter((tarefa) => {
    if (tarefa.classList.contains('done')) {
      tarefa.remove();
    }
    atualizaQuantidade(tarefas);
  });
}
clear.addEventListener('click', limparConcluidos);

  // FILTRAR ITENS DA TAREFA
function filtrarElementos() {
  filtros.forEach((filtro) => {
    filtro.addEventListener('click', (event) => {
      const taskActive = tarefas.filter((tarefa) => {
        return tarefa.className != 'item theme done';
      });
      const taskDone = tarefas.filter((tarefa) => {
        return tarefa.className === 'item theme done';
      });

      if (event.target == filtros[0]) {
        filtros[1].classList.remove('active');
        filtros[2].classList.remove('active');
        event.target.classList.add('active');
        Array.from(taskDone, (task) => (task.style.display = 'flex'));
        Array.from(taskActive, (task) => (task.style.display = 'flex'));
        atualizaQuantidade(tarefas);
      }
      if (event.target == filtros[1]) {
        filtros[0].classList.remove('active');
        filtros[2].classList.remove('active');
        event.target.classList.add('active');
        Array.from(taskDone, (task) => (task.style.display = 'none'));
        Array.from(taskActive, (task) => (task.style.display = 'flex'));
        atualizaQuantidade(taskActive);
      }
      if (event.target == filtros[2]) {
        filtros[0].classList.remove('active');
        filtros[1].classList.remove('active');
        event.target.classList.add('active');
        Array.from(taskActive, (task) => (task.style.display = 'none'));
        Array.from(taskDone, (task) => (task.style.display = 'flex'));
        atualizaQuantidade(taskDone);
      }
    });
  });
}
filtrarElementos();
