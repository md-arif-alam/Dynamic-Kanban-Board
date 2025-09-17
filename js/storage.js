// Storage wrapper - isolates localStorage usage and serialization
const KEY = "kanban_tasks_v1";

export default class LocalStore {
  constructor(key = KEY) {
    this.key = key;
  }

  _load() {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to parse storage", e);
      return [];
    }
  }

  _save(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  getAll() {
    return this._load();
  }

  saveAll(items) {
    this._save(items);
  }

  addTask(task) {
    const items = this._load();
    items.push(task);
    this._save(items);
  }

  updateTask(id, patch) {
    const items = this._load().map((t) =>
      t.id === id
        ? {
            ...t,
            ...patch,
          }
        : t
    );
    this._save(items);
  }

  deleteTask(id) {
    const items = this._load().filter((t) => t.id !== id);
    this._save(items);
  }
}
