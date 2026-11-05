// 1. Literal union type for TaskStatus
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Interface defining the shape of a Task
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. Add a new task (defaults to status "todo")
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. Mark a task as completed
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. Filter tasks by status
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Custom extra operation (Originality required)
// Example: Advance status (todo -> in-progress -> done)
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;
    if (task.status === "todo") return { ...task, status: "in-progress" };
    if (task.status === "in-progress") return { ...task, status: "done" };
    return task;
  });
}

// Optional extra operation: Delete a task
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}