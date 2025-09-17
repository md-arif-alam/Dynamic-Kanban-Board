import { uid } from "./utils.js";

// Rendering responsibilities only
export function renderAll(
  tasks,
  { root = document.getElementById("board"), templateId = "task-template" } = {}
) {
  // Clear lists
  const lists = {
    todo: document.getElementById("todo-list"),
    inprogress: document.getElementById("inprogress-list"),
    done: document.getElementById("done-list"),
  };
  Object.values(lists).forEach((l) => (l.innerHTML = ""));

  tasks.forEach((task) => renderTask(task, lists[task.status]));
}

export function renderTask(task, container) {
  if (!container) return;
  const tpl = document.getElementById("task-template");
  const clone = tpl.content.firstElementChild.cloneNode(true);
  clone.dataset.id = task.id;
  clone.querySelector(".task-title").textContent = task.title;
  clone.querySelector(".task-desc").textContent = task.description || "";
  // attach id to buttons
  clone.querySelector(".btn-delete").dataset.id = task.id;
  clone.querySelector(".btn-edit").dataset.id = task.id;
  container.appendChild(clone);
}
