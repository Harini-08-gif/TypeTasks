let nextId = 1;
// 3. Add a new task (defaults to status "todo")
export function addTask(tasks, title, status) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. Mark a task as completed
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { status: "done" }) : task);
}
// 5. Filter tasks by status
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 6. Custom extra operation (Originality required)
// Example: Advance status (todo -> in-progress -> done)
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo")
            return Object.assign(Object.assign({}, task), { status: "in-progress" });
        if (task.status === "in-progress")
            return Object.assign(Object.assign({}, task), { status: "done" });
        return task;
    });
}
// Optional extra operation: Delete a task
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
//# sourceMappingURL=model.js.map