import { type Task, type TaskStatus, addTask, filterByStatus } from "./model.js";

let tasks: Task[] = [];
let filter: "all" | TaskStatus = "all";

// Type assertions using 'as' tell TypeScript the exact element type
const titleInput = document.getElementById("title") as HTMLInputElement;
const statusSelect = document.getElementById("status") as HTMLSelectElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;
const chipsEl = document.getElementById("chips") as HTMLDivElement;

// Handle adding a task
addBtn.onclick = () => {
  const title = titleInput.value.trim();
  const status = statusSelect.value as TaskStatus;

  if (!title) return;

  // addTask requires (tasks, title, status) based on your model
  tasks = addTask(tasks,title, status);
  titleInput.value = "";
  render();
};

// Render function
function render() {
  listEl.innerHTML = "";
  const filteredTasks = filter === "all" ? tasks : filterByStatus(tasks, filter);

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <span>${task.title} (<strong>${task.status}</strong>)</span>
    `;
    listEl.appendChild(li);
  });
}

render();