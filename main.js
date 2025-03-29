document.addEventListener("DOMContentLoaded", loadTask);

function addTask() {
  let input = document.getElementById("taskInput");
  let textTask = input.value.trim();

  if (!textTask) {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `<span onclick="toggleComplete(this)">${textTask}</span><button onclick="removeTask(this, '${textTask}')">X</button>`;
  document.getElementById("taskList").appendChild(li);
  saveTask(textTask);
  input.value = "";
}

function removeTask(button, taskText) {
  let tasks = getTaskFromStorage();
  tasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  button.parentElement.remove();
}

function toggleComplete(task) {
  task.classList.toggle("completed");
  updateTask(task);
}

function saveTask(tasksText) {
  let tasks = getTaskFromStorage();
  tasks.push({ text: tasksText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

function getTaskFromStorage() {
  let tasks = localStorage.getItem("tasks");
  try {
    tasks = JSON.parse(tasks) || [];
  } catch (error) {
    tasks = [];
    console.error(error);
  }
  return tasks;
}

function loadTask() {
  let tasks = getTaskFromStorage();
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `<span class="${
      task.completed ? "completed" : ""
    }" onclick="toggleComplete(this)">${
      task.text
    }</span><button onclick="removeTask(this, '${task.text}')">X</button>`;
    document.getElementById("taskList").appendChild(li);
  });
}

function updateTask(taskText) {
  let tasks = getTaskFromStorage();
  tasks.forEach((task) => {
    if (task.text === taskText.innerHTML) {
      task.completed = !task.completed;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}
