const input = document.getElementById("nom");
const list = document.getElementById("list");
const btn = document.getElementById("btn");
if (btn) {
  btn.addEventListener("click", function () {
    btn.classList.add("active");
  });
}

// Supprime un <li>
if (list) {
  list.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (li && list.contains(li)) {
      li.remove();
    }
  });
}
if (input) {
  input.addEventListener("focus", function () {
    input.style.backgroundColor = "lightblue";
  });
  input.addEventListener("blur", function () {
    input.style.backgroundColor = "white";
  });
}

function alerts() {
  alert("reussi");
}
function ajouter() {
  let liste = document.getElementById("list");
  let newliste = document.createElement("li");
  newliste.textContent = "nouvel element";
  liste.appendChild(newliste);
}
