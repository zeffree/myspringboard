const form = document.querySelector("form");
const tdList = document.querySelector("#todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTask = document.querySelector("#task");
  const newLi = document.createElement("li");
  const newButtonDone = document.createElement("button");
  const newButtonRemove = document.createElement("button");
  newLi.innerText = newTask.value;
  newButtonDone.innerText = "Done";
  newButtonRemove.innerText = "Delete";

  newButtonDone.addEventListener("click", function(event) {
    event.target.parentElement.classList.toggle('completed');
  });
  newButtonRemove.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });

  newLi.append(newButtonDone);
  newLi.append(newButtonRemove);
  tdList.append(newLi);
  form.reset();
});