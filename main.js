function addTask() {
  let input = document.getElementById("taskInput");
  let textTask = input.value.trim();

  if (!textTask) {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `<span onclick="toggleComplete(this)">${textTask}</span><button onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
  console.log("Tombol remove button di klik");
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}
