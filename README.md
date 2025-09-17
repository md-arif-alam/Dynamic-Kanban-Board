# 📝 Dynamic Kanban Board

A simple **Kanban Board application** built with vanilla JavaScript, HTML, and CSS.  
Users can create tasks, move them between columns via drag-and-drop, and keep data persistent with **localStorage**.

---

## 🚀 Features
- **Create Tasks**
  - Add a task with a title and description.
  - New tasks appear in the **To Do** column.

- **Three Columns**
  - **To Do** → Default column for new tasks  
  - **In Progress** → For ongoing tasks  
  - **Done** → For completed tasks  

- **Drag & Drop**
  - Move tasks between columns using drag and drop.

- **Persistence**
  - Tasks are stored in **localStorage**.
  - On page reload, all tasks remain intact.

- **Modular Code**
  - Code is separated into different modules for better readability and scalability.

---

## 📂 Project Structure

/kanban-app
│── index.html → Main HTML file
│── styles.css → Styling for board, columns, and tasks
│── js/
│ ├── main.js → App entry point (initializes app)
│ ├── render.js → Rendering functions for tasks & columns
│ ├── storage.js → LocalStorage handling (save/load)
│ ├── dragdrop.js → Drag & drop functionality
│ ├── event.js → Event listeners for form & UI
│ └── utils.js → Utility helper functions

## Open the App

Simply open index.html in your browser.
No build tools required 🚀

(Optional: If you want a local server, you can run with live-server or vite)

## 🛠️ Technologies Used

**HTML5**
**CSS3**
**Vanilla JavaScript (ES Modules)**
**LocalStorage**

## 🧩 How It Works

**Task Creation**: Form input creates a task object, saves to localStorage, renders in "To Do".

**Columns**: Tasks can be dragged and dropped between columns.

**Persistence**: localStorage ensures tasks remain after reload.

**Modularity**:

render.js → UI handling

storage.js → LocalStorage logic

event.js → Event handling

dragdrop.js → Drag/drop logic

utils.js → Helpers
