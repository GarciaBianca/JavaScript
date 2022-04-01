const btnAdditem = document.querySelector('.todo-button');
let todo_item = document.getElementById("todo_item");
let item = document.querySelector('.todo-input'); 

let item_lista= [] // vetor da lista 
let container_lista = document.querySelector('#itens_lista');
let select = document.querySelector('.filter-todo');

btnAdditem.addEventListener('click',()=>{

    let item_id = {
        id:item_id.length + 1,
        item:item.value,
        completed:false
    }
    
    if (item.value == ''){ // valida se o input esta vazio
        alert("Campo vazio. É necessario preencher uma tarefa")
    }
        
        else { // caso o input esteja preenchido, faça o seguinte:
            
           item_id.push(item_id); // captura o texto digitado e coloca a informacao no vetor

            let div = document.createElement('div');
            div.classList.add('todo')
            div.id = 'div'+item_lista.length
            
            let li = document.createElement('li');
            li.classList.add('todo-item') 
            li.id = 'li'+item_lista.length 
            li.innerHTML = item_id.task
    
            let btn1 = document.createElement('button');
            btn1.classList.add('check-btn');
            btn1.id = item_lista.length 
            btn1.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>'
            
            let btn2 = document.createElement('button');
            btn2.classList.add('trash-btn')
            btn2.id = item_lista.length 
            btn2.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'
        }
        
        
       item.value = ""

/*formulario.addEventListener("submit", function(evento){

    evento.preventDefault();

    let todo_item = document.querySelector(".todo-input").value;

    tarefa.push(todo_item);

    adicionarTarefa(todo_item)
    
    console.log(todo_item); // ou console.log(tarefa); a fim de listar todas tarefas existentes
    
});
    
    

let conteudo_da_lista = document.getElementById("Digite a Tarefa") /*/