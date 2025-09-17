// Event handling (form, edit, delete) separated
import { uid } from "./utils.js";

export function attachEvents({ store, onStateChange }) {
  const form = document.getElementById("task-form");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    if (!title) return;
    const newTask = {
      id: uid(),
      title,
      description: descInput.value.trim(),
      status: "todo",
    };
    store.addTask(newTask);
    onStateChange(store.getAll());
    form.reset();
    titleInput.focus();
  });

  // Delegate delete/edit buttons
  document.addEventListener("click", (e) => {
    const del = e.target.closest(".btn-delete");
    if (del) {
      const id = del.dataset.id;
      store.deleteTask(id);
      onStateChange(store.getAll());
    }

    const edt = e.target.closest(".btn-edit");
    if (edt) {
      const id = edt.dataset.id;
      const tasks = store.getAll();
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      // simple inline edit using prompt for brevity (keeps code focused and modular)
      const newTitle = prompt("Edit title", task.title);
      if (newTitle === null) return; // cancelled
      const newDesc = prompt("Edit description", task.description || "");
      store.updateTask(id, {
        title: newTitle.trim() || task.title,
        description: newDesc.trim(),
      });
      onStateChange(store.getAll());
    }
  });
}
