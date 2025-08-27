// write cool JS hwere!!
const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveButton");

// Initialize empty users if not in localStorage
if (!localStorage.getItem("users")) {
  const users = {
    bruger1: { name: "", age: "", color: "" },
    bruger2: { name: "", age: "", color: "" },
    bruger3: { name: "", age: "", color: "" },
    bruger4: { name: "", age: "", color: "" }
  };
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to save all users
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Event listener: vis data for valgt bruger
function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log('change user to: ' + selectedUser);

  // TODO: Hent data fra localStorage og vis i formularen
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const userData = users[selectedUser] || { name: "", age: "", color: "" };

  nameInput.value = userData.name || "";
  ageInput.value = userData.age || "";
  colorInput.value = userData.color || "";
  document.body.style.backgroundColor = userData.color || "";
}

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
  const selectedUser = userSelect.value;
  const users = getUsers();

  // TODO: Gem data i localStorage for den valgte bruger
  users[selectedUser] = {
    name: nameInput.value,
    age: ageInput.value,
    color: colorInput.value
  };

  saveUsers(users);
  document.body.style.backgroundColor = colorInput.value || "";
});

// Event listener for dropdown
userSelect.addEventListener("change", userSelectChange);

// Vis data for første bruger ved load
window.onload = userSelectChange;
