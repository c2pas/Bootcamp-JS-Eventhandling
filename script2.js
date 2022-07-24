function createNotes() {
    const notes = document.getElementById("notes");
    const content = document.getElementById("contentnote").value;
    const note = document.createElement("div");
    note.classList.add("note");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    note.style.background = "#" + randomColor;
    note.innerHTML = `
        <div class="note-content">
            ${content}
        </div>
        `;
    notes.appendChild(note);
    return note;
}