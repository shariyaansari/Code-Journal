const API_URL = "http://localhost:4000/api/notes";

// Fetching and displaying notes
  async function fetchNotes() {
      const res = await fetch(API_URL);
      const notes = await res.json();

      const container = document.getElementById("notesContainer");
      container.innerHTML = "";

      notes.forEach(note => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${note.title}</h3>
          <p>${note.content}</p>
          <button onclick="deleteNote('${note._id}')">Delete</button>
          <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
        `;
        container.appendChild(div);
      });
    }

// Add new Note
document.getElementById("noteForm").addEventListener("submit", async (e) => {
	e.preventDefault();
	const title = document.getElementById("title").value;
	const content = document.getElementById("content").value;
	await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ title, content }),
	});
    e.target.reset();
    fetchNotes();
});

// Delete note 
async function deleteNote(id){
    await fetch(`${API_URL}/${id}`, { method: "DELETE" })
    fetchNotes();
}

// Edit note
async function editNote(id, oldTitle, oldContent) {
  const title = prompt("Edit title:", oldTitle);
  const content = prompt("Edit content:", oldContent);
  if (title && content) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    fetchNotes();
  }
}
fetchNotes()