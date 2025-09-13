const createNoteBtn = document.querySelector(".createNoteBtn");
const noteContainer = document.querySelector(".notes");

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}
function updateNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
updateNotes();

createNoteBtn.addEventListener("click", function () {
  let note = document.createElement("div");
  let textArea = document.createElement("textarea");
  let deleteBtn = document.createElement("button");
  note.className = "note";
  deleteBtn.innerHTML = "Delete";
  noteContainer.appendChild(note);
  note.appendChild(textArea);
  note.appendChild(deleteBtn);
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    updateStorage();
  }
  if (e.target.tagName === "TEXTAREA") {
    const notes = document.querySelectorAll(".note");

    notes.forEach(function (note) {
      note.firstElementChild.addEventListener("keyup", function () {
        note.firstElementChild.innerHTML = note.firstElementChild.value;
        updateStorage();
      });
    });
  }
});
