// Drag & drop concerns (keeps logic separate)
export function enableDragAndDrop({ boardSelector = "#board", onDrop }) {
  let draggedEl = null;
  let draggedId = null;

  function handleDragStart(e) {
    const target = e.target.closest(".task-card");
    if (!target) return;
    draggedEl = target;
    draggedId = target.dataset.id;
    target.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedId);
  }

  function handleDragEnd() {
    if (draggedEl) draggedEl.classList.remove("dragging");
    draggedEl = null;
    draggedId = null;
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const list = e.currentTarget.querySelector(".task-list");
    list.classList.add("highlight-drop");
  }

  function handleDragLeave(e) {
    const list = e.currentTarget.querySelector(".task-list");
    list.classList.remove("highlight-drop");
  }

  function handleDrop(e) {
    e.preventDefault();
    const status = e.currentTarget.dataset.status;
    const id = e.dataTransfer.getData("text/plain");
    const list = e.currentTarget.querySelector(".task-list");
    list.classList.remove("highlight-drop");
    if (id && onDrop) onDrop(id, status);
  }

  const cols = document.querySelectorAll(".column");
  cols.forEach((col) => {
    col.addEventListener("dragover", handleDragOver);
    col.addEventListener("dragleave", handleDragLeave);
    col.addEventListener("drop", handleDrop);
  });

  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("dragend", handleDragEnd);
}
