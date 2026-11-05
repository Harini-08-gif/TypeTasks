import { addTask, filterByStatus } from "./model.js";
let tasks = [];
let filter = "all";
// Type assertions using 'as' tell TypeScript the exact element type
const titleInput = document.getElementById("title");
const statusSelect = document.getElementById("status");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const chipsEl = document.getElementById("chips");
// Handle adding a task
addBtn.onclick = () => {
    const title = titleInput.value.trim();
    const status = statusSelect.value;
    if (!title)
        return;
    // addTask requires (tasks, title, status) based on your model
    tasks = addTask(tasks, title, status);
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
//# sourceMappingURL=app.js.map