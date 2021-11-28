//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton =  document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterToDo = document.querySelector("#filter-toDos");

//event listeners
todoButton.addEventListener('click' , addToDo);
todoList.addEventListener('click' , deleteCheck);
filterToDo.addEventListener('click' , FilterToDo);


//functions
function addToDo(){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create LI
    const newToDo =  document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
   
    //mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerText = 'Done';
    completedbutton.classList.add('complete-btn');
    completedbutton.setAttribute('id' ,'doneButton');
    todoDiv.appendChild(completedbutton);

    //trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerText = 'Delete';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
     todoList.appendChild(todoDiv);
   
     //clear input value 
     todoInput.value = '';
}
function deleteCheck(e){
         console.log(e.target);
         if(e.target.classList[0]==='trash-btn'){
           const todo = e.target.parentElement;
           todo.classList.add('fall');
           todo.addEventListener('transitionend' , function(){
             todo.remove();
           });
          
         }
         if(e.target.classList[0]==='complete-btn'){
          const todo = e.target.parentElement;
          todo.classList.toggle("completed"); 
            
        }
     }
function FilterToDo(event){
   console.log(event.target.value);
   const toDos = todoList.childNodes;
   console.log(toDos);
   
   toDos.forEach(function(todo){
    console.log("Hiii"+ todo);
    console.log("End");
    switch(event.target.value){
      case "all" : 
       todo.style.display="flex";
       break;
      case "Completed" : 
      if(todo.classList.contains('completed')){
        todo.style.display="flex";
      }
      else{
        todo.style.display="none";
      }
      break;
      case "Incomplete" :
        if(!todo.classList.contains('completed')){
          todo.style.display="flex";
        }
        else{
          todo.style.display="none";
        }
        break;
    }
  });
}