var tarefa = [];
function adicionarTarefa(){
//entrada de dados
var entradaTarefa = document.getElementById("entradaTarefa");
var saidaTarefa = document.getElementById("saidaTarefa");

var nome = entradaTarefa.value; //nome da tarefa

if (nome == "") {
    alert("Informe a Tarefa");
    return;
    }
tarefa.push(nome);

var lista = "";

for (i=0; i< tarefa.length; i++) {
    lista += tarefa[i];

}
console.log(saidaTarefa);
saidaTarefa.textContent;
}

var noBotao = document.getElementById("noBotao");
noBotao.addEventListener("click", adicionarTarefa);

console.log();
console.log(saidaTarefa);
console.log(entradaTarefa)


/* 
function novaTarefa(){
    let tarefa=["Estudar Algoritmo", " Estudar JavaScript", "Entregar desafio JavaScript"];
    var li = document.createElement("li");
    var entradaTarefa = document.getElementById("entradaTarefa").value;
    var t = document.createTextNode(entradaTarefa);
    
    li.appendChild(t);

    if (entradaTarefa == "") {
        alert("Digite uma Tarefa!");
      } else {
        document.getElementById("todo-list").appendChild(li);
      }
      document.getElementById("todo-input").value = "";

      tarefa.push(todo_item)
      console.log(tarefa)
}

///////////////////////////////////////////////////////////
let tarefa=["Estudar Algoritmo", " Estudar JavaScript", "Entregar desafio JavaScript"];
let todo_item = document.getElementById("todo_item");
 
var formulario = document.querySelector("#form");
var tabela = document.querySelector(".todo_item");

formulario.addEventListener("submit", function(evento){

evento.preventDefault();

    let todo_item = add.querySelector("#form");

    if (todo_item == ""){
        alert (" Digite a tarefa no campo.");
    }
});
    tarefa.push(todo_item)
     console.log(tarefa)

let conteudo_da_lista = document.getElementById("Digite a Tarefa");

*/