let taskInput = document.querySelector(".add-task input"),
addIcon = document.querySelector(".add-icon"),
tasksContainer = document.querySelector(".tasks-container"),
tasksCount = document.querySelector(".tasks-btn span"),
comopleted = document.querySelector(".comopleted span"),
deleteAll = document.querySelector(".delet-all");

window.onload = function () {
taskInput.focus();
};

addIcon.onclick = function () {
if (taskInput.value === "") {
  alert("ples enter atask");
} else {
  //Remove No Tasks to Showe Element
  let noTask = document.querySelector(".no-task");
  if (document.body.contains(document.querySelector(".no-task"))) {
    noTask.remove();
  }

  //Create Elements and add it to the bode
  let task = document.createElement("div");
  task.className = "tasks";

  let span = document.createElement("span");
  span.className = "task";

  let text = document.createTextNode(taskInput.value);
  span.appendChild(text);

  let deletIcon = document.createElement("div");
  deletIcon.className = "delete";
  let deletText = document.createTextNode("delete");
  deletIcon.appendChild(deletText);

  task.appendChild(span);
  task.appendChild(deletIcon);
  tasksContainer.appendChild(task);
}

taskInput.value = "";
taskInput.focus();
calcTasks();
};

tasksContainer.addEventListener("click", function (e) {
//Delete Task Button
if (e.target.className == "delete") {
  e.target.parentElement.remove();
  if (tasksContainer.childElementCount == 0) {
    noTasksToShow();
  }
}

//Done or Comopleted Tasks
if (e.target.classList.contains("task")) {
  e.target.classList.toggle("done");
}
calcTasks();
});

//Create no Tasks to Show Element
function noTasksToShow() {
let div = document.createElement("div");
let text = document.createTextNode("no tasks to show");
div.className = "no-task";
div.appendChild(text);
tasksContainer.appendChild(div);
}

//Done and Comopleted Tasks Counter function
function calcTasks() {
tasksCount.innerHTML = document.querySelectorAll(
  ".tasks-container .tasks"
).length;
comopleted.innerHTML = document.querySelectorAll(
  ".tasks-container .done"
).length;
}