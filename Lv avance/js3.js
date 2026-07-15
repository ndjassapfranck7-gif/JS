const formulaire = document.getElementById("nform");
const email = document.getElementById("email");
const message = document.getElementById("message");
const themeToggle = document.getElementById("theme-toggle");
const bouton = document.getElementById("btn");
const affichage = document.getElementById("compteur");
const galerie = document.getElementById("galerie");
const todoInput = document.getElementById("todo-input");
const todoAdd = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");
const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];
let index = 0;
let compteur = 0;
let todos = [];
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    if (themeToggle) {
        const darkMode = document.body.classList.contains("dark-theme");
        themeToggle.textContent = darkMode ? "Mode clair" : "Mode sombre";
    }
}
if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}
function afficherImage() {
    if (galerie) {
        galerie.src = images[index];
    }
}
function changerImage(direction) {
    index = (index + direction + images.length) % images.length;
    afficherImage();
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        changerImage(1);
    } else if (event.key === "ArrowLeft") {
        changerImage(-1);
    }
});
afficherImage();
bouton.addEventListener("click", function () {
    compteur++;
    affichage.textContent = compteur;
});
function renderTodos() {
    if (!todoList) return;
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" data-index="${index}" ${todo.completed ? "checked" : ""}>
            <span class="todo-text">${todo.text}</span>
            <button class="todo-delete" data-index="${index}" type="button">Supprimer</button>
        `;
        todoList.appendChild(li);
    });
}
function addTodo() {
    if (!todoInput) return;

    const text = todoInput.value.trim();
    if (!text) return;
    todos.push({ text, completed: false });
    todoInput.value = "";
    renderTodos();
}
if (todoAdd) {
    todoAdd.addEventListener("click", addTodo);
}
if (todoInput) {
    todoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTodo();
        }
    });
}
if (todoList) {
    todoList.addEventListener("change", function (event) {
        if (event.target.classList.contains("todo-checkbox")) {
            const index = Number(event.target.dataset.index);
            todos[index].completed = event.target.checked;
            renderTodos();
        }
    });
    todoList.addEventListener("click", function (event) {
        if (event.target.classList.contains("todo-delete")) {
            const index = Number(event.target.dataset.index);
            todos.splice(index, 1);
            renderTodos();
        }
    });
}
renderTodos();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
formulaire.addEventListener("submit", function (e) {
    if (!emailRegex.test(email.value.trim())) {
        e.preventDefault();
        message.textContent = "veuillez entre un email valide";
        message.style.color = "red";
    } else {
        message.textContent = "Email valide";
        message.style.color = "green";
    }
});
const question={
    texte:"A quel pays correspond le mot manhwa?",
    choix:[
        "chine",
        "japon",
        "coree",
        "france"
    ],
    bonneReponse:"coree"
};

function renderQuiz() {
    const qEl = document.getElementById("question");
    const chix = document.getElementById("chix");
    if (!qEl || !chix || !question) return;
    qEl.textContent = question.texte;
    chix.innerHTML = "";
    question.choix.forEach((c, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quiz";
        input.value = c;
        input.id = `quiz-${i}`;
        label.htmlFor = input.id;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + c));
        chix.appendChild(label);
        chix.appendChild(document.createElement("br"));
    });
}

function verifier() {
    const resultatEl = document.getElementById("resultat");
    if (!resultatEl) return;
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) {
        resultatEl.textContent = "Veuillez choisir une réponse";
        resultatEl.style.color = "red";
        return;
    }
    const correct = selected.value === question.bonneReponse;
    resultatEl.textContent = correct ? "Bonne réponse !" : "Mauvaise réponse.";
    resultatEl.style.color = correct ? "green" : "red";
}

renderQuiz();
