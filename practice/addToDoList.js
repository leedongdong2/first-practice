const sendTodo = document.querySelector(".sendtodo");
const wirteTodo = sendTodo.querySelector("input");
const toDoLits = document.querySelector(".markList");


const Todos = "todos";

let toDos = [];

function saveList(){
    localStorage.setItem(Todos,JSON.stringify(toDos));
}



function deletebt(event){
const btn = event.target;
const li = btn.parentNode;
toDoLits.removeChild(li);
const Clean = toDos.filter(function(toDO){
    return toDO.id !== parseInt(li.id);
});
toDos = Clean
saveList();
}

function showValue(text) {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "x";
    delbtn.addEventListener("click",deletebt);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText =text;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoLits.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    }
    toDos.push(toDoObj);
    saveList();

}



function sendtodo (event){
    event.preventDefault();
    const listValue = wirteTodo.value;
    showValue(listValue);
    wirteTodo.value = "";   

}

function LoadTodos(){
const todos = localStorage.getItem(Todos);
if(todos !== null){
const parslist = JSON.parse(todos);
parslist.forEach(function(toDo){
    showValue(toDo.text);
});

}
}




function printlist(){
LoadTodos();
sendTodo.addEventListener("submit",sendtodo);
}


printlist();