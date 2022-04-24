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

/* ADICIONANDO NOVAS TAREFAS */
/* function adicionarTarefa(tarefa) {
  const novaTarefa = `<li class="item theme"> 
                        <div class="circulo"></div> 
                        <p class="item_texto theme">${tarefa}</p> 
                        <div class="deletar_item"></div> 
                      </li>`;
  const posicao = "beforeend";

  lista.insertAdjacentHTML(posicao, novaTarefa);
}

let id = 6;

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const tarefa = input.value;
    if (tarefa) {
      adicionarTarefa(tarefa, id, false, false);
      listaTarefas.push({
        name: tarefa,
        id: id,
        done: false,
        delete: false,
      });
    }
    input.value = "";
    id++;
  }
});

let listaTarefas = [
  {
    tarefa: "Complete online JavaScript Course",
    id: 0,
    done: false,
    delete: false,
  },
  {
    tarefa: "Jog around the park",
    id: 1,
    done: false,
    delete: false,
  },
  {
    tarefa: "10 minutes meditation",
    id: 2,
    done: false,
    delete: false,
  },
  {
    tarefa: "Read for 1 hour",
    id: 3,
    done: false,
    delete: false,
  },
  {
    tarefa: "Pick up groceries",
    id: 4,
    done: false,
    delete: false,
  },
  {
    tarefa: "Complete Todo App on Frontend Mentor",
    id: 5,
    done: false,
    delete: false,
  },
];
 */
