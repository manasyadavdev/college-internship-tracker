function addEntry() {
  const title = document.getElementById("titleInput").value.trim();
  const type = document.getElementById("typeInput").value;
  const status = document.getElementById("statusInput").value;
  const note = document.getElementById("noteInput").value.trim();
  const entryList = document.getElementById("entryList");

  if (title === "") {
    alert("Please enter a college or internship name.");
    return;
  }

  const li = document.createElement("li");
  li.className = "entry-card";
  li.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Type:</strong> ${type}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Notes:</strong> ${note || "No notes added"}</p>
    <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
  `;

  entryList.appendChild(li);

  document.getElementById("titleInput").value = "";
  document.getElementById("noteInput").value = "";
  document.getElementById("typeInput").value = "College";
  document.getElementById("statusInput").value = "Applied";
}

function deleteEntry(button) {
  button.parentElement.remove();
}
