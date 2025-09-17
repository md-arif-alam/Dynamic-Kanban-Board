import LocalStore from "./storage.js";
import { enableDragAndDrop } from "./dragdrop.js";
import { renderAll } from "./render.js";
import { attachEvents } from "./events.js";

// Bootstrapping and composition - wires modules together
const store = new LocalStore();

function onStateChange(tasks) {
  renderAll(tasks);
}

// initialize UI from storage
document.addEventListener("DOMContentLoaded", () => {
  const tasks = store.getAll();
  // simple validation: ensure tasks have expected status
  const validStatuses = new Set(["todo", "inprogress", "done"]);
  const normalized = tasks.map((t) => ({
    ...t,
    status: validStatuses.has(t.status) ? t.status : "todo",
  }));
  store.saveAll(normalized);
  renderAll(normalized);

  attachEvents({
    store,
    onStateChange,
  });

  enableDragAndDrop({
    onDrop: (id, status) => {
      store.updateTask(id, {
        status,
      });
      onStateChange(store.getAll());
    },
  });
});
