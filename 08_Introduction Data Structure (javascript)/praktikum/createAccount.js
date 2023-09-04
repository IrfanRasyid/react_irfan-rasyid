document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen-elemen HTML
  const accountForm = document.getElementById("accountForm");
  const accountTableBody = document.getElementById("accountTableBody");
  const createAccountButton = document.getElementById("createAccountButton");

  // Daftar akun yang akan ditampilkan dalam tabel
  const accounts = [];

  // Menambahkan event listener ke tombol "Create Account"
  createAccountButton.addEventListener("click", function () {
    // Validasi dan tambahkan data akun jika valid
    if (validateAndAddAccount()) {
      alert("Data berhasil ditambahkan!");
      displayAccounts();
      accountForm.reset();
    }
  });

  // Menampilkan data akun dalam tabel
  function displayAccounts() {
    accountTableBody.innerHTML = "";

    accounts.forEach((account, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${account.firstName}</td>
        <td>${account.lastName}</td>
        <td>${account.username}</td>
        <td>${account.email}</td>
        <td>${account.gender}</td>
        <td>${account.address}</td>
        <td>${account.address2}</td>
        <td>${account.nationality}</td>
        <td>${account.languages.join(", ")}</td>
      `;
      accountTableBody.appendChild(row);
    });
  }

  // Validasi dan tambahkan data akun jika valid
  function validateAndAddAccount() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const address = document.getElementById("address").value.trim();
    const address2 = document.getElementById("address2").value.trim();
    const nationality = document.getElementById("nationality").value;
    const languages = Array.from(document.querySelectorAll("input[name='languages[]']:checked")).map(
      (checkbox) => checkbox.value
    );

    // Validasi input
    if (!validateInput(firstName, "firstName") || !validateInput(lastName, "lastName") || !validateInput(username, "username") ||
        !validateInput(email, "email") || !gender || !validateInput(address, "address") || !validateInput(nationality, "nationality") ||
        languages.length === '') {
      return false;
    }

    // Menambahkan data akun baru ke daftar
    const newAccount = {
      firstName,
      lastName,
      username,
      email,
      gender: gender.value,
      address,
      address2,
      nationality,
      languages,
    };
    accounts.push(newAccount);
    return true;
  }

  // Validasi input
  function validateInput(value, fieldName) {
    if (value === "") {
      alert(`The ${fieldName} field must be filled in.`);
      document.getElementById(fieldName).style.borderColor = "red";
      return false;
    }

    if (fieldName !== "email" && /[#@{}]/.test(value)) {
      alert(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must not contain symbols.`);
      document.getElementById(fieldName).style.borderColor = "red";
      return false;
    }

    // Reset border color if input is valid
    document.getElementById(fieldName).style.borderColor = "";

    return true;
  }

  // Menonaktifkan tombol "Create Account" jika salah satu input tidak valid
  accountForm.addEventListener("input", function () {
    createAccountButton.disabled = !validateAndAddAccount();
  });
});
