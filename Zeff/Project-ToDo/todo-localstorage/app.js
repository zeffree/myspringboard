//Select Form component where user key in task
const todoForm = document.getElementById("newTodoForm");

//Select To-do list UL
const todoList = document.getElementById("todoList");

//create empty array to keep data of list item in local storage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

//loop through the objects in localstorage
for(let i =0; i < savedTodos.length; i++){
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if(newTodo.isCompleted){
        newTodo.classList.add("completed");
    }
    else{
        newTodo.classList.remove("completed");
    }
    todoList.appendChild(newTodo);
}


//Add new Item to To-Do List
todoForm.addEventListener("submit",function(event){
    //prevent default action so that page wont reload
    event.preventDefault();
    
    //Create New Todo list item when user click submit 
    let newTodo = document.createElement("li");

    //Retrieve the task detail from the input box and assign to a new variable
    let taskValue = document.getElementById("task").value;

    //Update the value of the todo list item with the value taken from the input box
    newTodo.innerText = taskValue;

    //Set value of the completion status to false upon declaration
    newTodo.isCompleted = false;

    //clear the input box
    todoForm.reset();

    //Add the new todo list item to the todo list
    todoList.appendChild(newTodo);
    
    //push new object into the storage array
    savedTodos.push({task:newTodo.innerText, isCompleted: false});
    
    //update the localstorage with the updated array with
    localStorage.setItem("todos", JSON.stringify(savedTodos));

})

//Add listener to detect click on To Do List
todoList.addEventListener("click", function(event) {
    
    //Assign variable to the clicked item (list items)
    let clickedListItem = event.target;

    //Check if the existing list item's completed = false
    if (!clickedListItem.isCompleted) {
        //if false, add class completed to the list item
        clickedListItem.classList.add('completed');
        //change the id? of isCompleted to true
        clickedListItem.isCompleted = true;
      } else {
        clickedListItem.classList.remove('completed');
        clickedListItem.isCompleted = false;
      }

    //this block of code updates the object in storage
    for (let i = 0; i < savedTodos.length; i++) {
      
        //find the equivalent task in the array
        if (savedTodos[i].task === clickedListItem.innerText) {
        //update matching state of completion in array
        savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
        //push array to update the localstorage
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
    }

}
);

