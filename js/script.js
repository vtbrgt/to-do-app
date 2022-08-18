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
  theme.forEach((theme) => theme.classList.toggle('dark'));
});

// QUANTIDADE DE TAREFAS NA LISTA
function atualizaQuantidade(tarefas) {
  tarefas = Array.from(document.querySelectorAll('.item'));
  const span = document.querySelector('.quantidade_tarefas');
  let quantidadeTarefas = tarefas.length;

  span.innerText = quantidadeTarefas;
}
setTimeout(atualizaQuantidade, 1);

// FUNCIONALIDADES

//CRIAR ELEMENTOS
function criarElementos(input) {
  const novoItem = document.createElement('li');
  const circulo = document.createElement('div');
  const texto = document.createElement('p');
  const deletar = document.createElement('div');
  const novaTarefa = document.createTextNode(input);

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

  tarefas.push(novoItem);
}

//ADICIONAR TAREFA
function adicionarTarefa() {
  criarElementos(input.value);

  input.value = '';
  theme = document.querySelectorAll('.theme');
  quantidadeTarefas = tarefas.length;
  atualizaQuantidade(tarefas);
}

// ADICIONAR TAREFA AO PRESSIONAR 'ENTER'
function addTaskAfterKeypress(tecla) {
  if (tecla.key === 'Enter' && input.value != '') {
    adicionarTarefa();
    localStorage.setItem('lista', JSON.stringify(lista.innerHTML));
  }
}

input.addEventListener('keypress', addTaskAfterKeypress);

// MARCAR TAREFA COMO CONCLUÍDA
function tarefaConcluida(e) {
  if (e.target.className === 'circulo') {
    e.target.classList.add('done');
    e.target.parentElement.classList.add('done');
  } else if (e.target.className === 'circulo done') {
    e.target.classList.remove('done');
    e.target.parentElement.classList.remove('done');
  }
  localStorage.setItem('lista', JSON.stringify(lista.innerHTML));
}
lista.addEventListener('click', tarefaConcluida);

// DELETAR TAREFA
function deletarTarefa(e) {
  if (e.target.className === 'deletar_item') {
    e.target.parentElement.remove();
    tarefas = Array.from(document.querySelectorAll('.item'));
    atualizaQuantidade(tarefas);
    localStorage.setItem('lista', JSON.stringify(lista.innerHTML));
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
    localStorage.setItem('lista', JSON.stringify(lista.innerHTML));
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
      }
      if (event.target == filtros[1]) {
        filtros[0].classList.remove('active');
        filtros[2].classList.remove('active');
        event.target.classList.add('active');
        Array.from(taskDone, (task) => (task.style.display = 'none'));
        Array.from(taskActive, (task) => (task.style.display = 'flex'));
      }
      if (event.target == filtros[2]) {
        filtros[0].classList.remove('active');
        filtros[1].classList.remove('active');
        event.target.classList.add('active');
        Array.from(taskActive, (task) => (task.style.display = 'none'));
        Array.from(taskDone, (task) => (task.style.display = 'flex'));
      }
    });
  });
}
filtrarElementos();

//retornando lista usada anteriormente
function mostraListaUsuario() {
  const listaUsuario = JSON.parse(localStorage.getItem('lista'));

  if (listaUsuario) {
    lista.innerHTML = listaUsuario;
  }
}
mostraListaUsuario();

//atualizando arrays
setTimeout(() => {
  tarefas = Array.from(document.querySelectorAll('.item'));
  theme = document.querySelectorAll('.theme');
}, 2);
