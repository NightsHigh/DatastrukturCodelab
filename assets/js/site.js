// write cool JS hwere!!
 const userSelect = document.getElementById("userSelect");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const colorInput = document.getElementById("colorInput");
    const saveButton = document.getElementById("saveButton");

    // Event listener: vis data for valgt bruger
  function userSelectChange() {
      const selectedUser = userSelect.value;
       console.log('change user to: '+selectedUser);
      // TODO: Hent data fra localStorage og vis i formularen
      const userData = JSON.parse(localStorage.getItem(selectedUser)) || {name: '', age: '', color: ''};
      document.body.style.backgroundColor = userData.color || "";
      nameInput.value = userData.name || "";
      ageInput.value = userData.age || "";
    }

    // Event listener: gem data fra formularen
  saveButton.addEventListener("click", () => {
    const selectedUser = userSelect.value;
    const userData = {
      name: nameInput.value,
      age: ageInput.value,
      color: colorInput.value
    };
      localStorage.setItem(selectedUser, JSON.stringify(userData));
      document.body.style.backgroundColor = userData.color || "";
    });

    userSelect.addEventListener("change", userSelectChange);
    // Vis data for første bruger ved load
    window.onload = userSelectChange;