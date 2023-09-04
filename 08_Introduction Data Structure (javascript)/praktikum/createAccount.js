document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan referensi ke elemen-elemen HTML
    const accountForm = document.getElementById("accountForm");
    const accountTableBody = document.getElementById("accountTableBody");

    // Daftar akun yang akan ditampilkan dalam tabel
    const accounts = [];

    // Mendengarkan pengiriman formulir
    accountForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Mendapatkan data dari formulir
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const gender = document.querySelector("input[name='gender']:checked").value;
      const address = document.getElementById("address").value;
      const address2 = document.getElementById("address2").value;
      const nationality = document.getElementById("nationality").value;
      const languages = Array.from(document.querySelectorAll("input[name='languages[]']:checked")).map(
        (checkbox) => checkbox.value
      );

      // Validasi data
      if (!firstName || !lastName || !username || !email || !gender || !address || !nationality || languages.length === 0) {
        alert("Harap isi semua field dengan benar.");
        return;
      }

      // Menambahkan data akun baru ke daftar
      const newAccount = {
        firstName,
        lastName,
        username,
        email,
        gender,
        address,
        address2,
        nationality,
        languages,
      };
      accounts.push(newAccount);

      // Menampilkan data akun dalam tabel
      displayAccounts();

      // Mengosongkan formulir
      accountForm.reset();
    });

    // Menampilkan data akun dalam tabel
    function displayAccounts() {
      // Mengosongkan tabel
      accountTableBody.innerHTML = "";

      // Mengisi tabel dengan data akun
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
  });