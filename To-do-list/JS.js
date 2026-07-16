const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const todoList = document.getElementById("todoList");
function createTodoItem(text) {
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-white p-3 rounded-lg shadow";
  // Case à cocher
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className =
    "w-5 h-5 mr-3 accent-purple-600 cursor-pointer";
  // Texte de la tâche
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "flex-1";
  // Bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Effacer";
  deleteBtn.className =
    "bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600";
  // Quand on coche la tâche
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add(
        "line-through",
        "text-gray-400"
      );
    } else {
      span.classList.remove(
        "line-through",
        "text-gray-400"
      );
    }
  });
  // Suppression
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}
addTodoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;
  const item = createTodoItem(text);
  todoList.appendChild(item);
  todoInput.value = "";
});
todoInput.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    addTodoBtn.click();
  }
});
clearAllBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});