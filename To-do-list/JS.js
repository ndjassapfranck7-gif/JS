//to-do-list
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const todoList = document.getElementById("todoList");

function createTodoItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  // Le bouton 'fait' a été supprimé (demande de l'utilisateur)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "effacer";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  return li;
}

addTodoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  const item = createTodoItem(text);
  todoList.appendChild(item);
  todoInput.value = "";
});

clearAllBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});

//mode sombre

const themeToggle = document.getElementById("themeToggle");

function updateThemeButton(isDark) {
  themeToggle.textContent = isDark ? "Désactiver le mode sombre" : "Activer le mode sombre";
}

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark ? "1" : "0");
  updateThemeButton(isDark);
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  setTheme(isDark);
});

const savedMode = localStorage.getItem("darkMode");
if (savedMode === "1") {
  setTheme(true);
} else {
  setTheme(false);
}

//Quiz

const questions = [
  {
    question: "Quel manga est l'œuvre d'Eiichiro Oda ?",
    answers: ["Naruto", "One Piece", "Bleach", "Dragon Ball"],
    correct: 1,
  },
  {
    question: "Dans 'Dragon Ball', quel est le nom du fils aîné de Goku ?",
    answers: ["Gohan", "Vegeta Jr", "Trunks", "Goten"],
    correct: 0,
  },
  {
    question: "Quel personnage de 'Naruto' portait un masque et était connu comme Tobi ?",
    answers: ["Itachi Uchiha", "Kakashi Hatake", "Tobi (Obito)", "Sasuke Uchiha"],
    correct: 2,
  },
];

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const quizResult = document.getElementById("quizResult");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.question;
  answersContainer.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quizAnswer";
    radio.value = index;

    label.appendChild(radio);
    label.append(` ${answer}`);
    answersContainer.appendChild(label);
    answersContainer.appendChild(document.createElement("br"));
  });
}

function getSelectedAnswer() {
  const checked = document.querySelector('input[name="quizAnswer"]:checked');
  return checked ? Number(checked.value) : null;
}

submitAnswerBtn.addEventListener("click", () => {
  const selected = getSelectedAnswer();
  if (selected === null) {
    quizResult.textContent = "Veuillez choisir une réponse.";
    return;
  }

  if (selected === questions[currentQuestionIndex].correct) {
    score += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    quizResult.textContent = "";
  } else {
    questionText.textContent = `Quiz terminé ! Votre score : ${score}/${questions.length}`;
    answersContainer.innerHTML = "";
    submitAnswerBtn.disabled = true;
  }
});

showQuestion();