const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const todoList = document.getElementById("todoList");

function createTodoItem(text) {

    const li = document.createElement("li");
    li.className =
        "flex justify-between items-center bg-white rounded-lg shadow p-3";

    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Effacer";

    deleteBtn.className =
        "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);

    return li;
}

addTodoBtn.addEventListener("click", () => {

    const text = todoInput.value.trim();

    if (text === "") return;

    todoList.appendChild(createTodoItem(text));

    todoInput.value = "";
    todoInput.focus();

});

todoInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        addTodoBtn.click();

    }

});

clearAllBtn.addEventListener("click", () => {

    todoList.innerHTML = "";

});