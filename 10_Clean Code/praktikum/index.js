// Seleksi elemen-elemen yang akan digunakan
const submitBtn = document.getElementById("submitBtn");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productFreshnessInputs = document.querySelectorAll(
  'input[name="productFreshness"]'
);
const productTableBody = document.getElementById("productTableBody");
const productNameError = document.getElementById("productNameError");
const deleteButton = document.getElementById("deleteButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// Validasi input karakter productName
productNameInput.addEventListener("input", validateProductName);

function validateProductName() {
  const productName = productNameInput.value;

  if (productName.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
  } else if (/[@#{}]/.test(productName)) {
    productNameError.textContent =
      "Name must not contain symbols (@, #, or {}).";
  } else {
    productNameError.textContent = "";
  }
}

// Validasi input harga
submitBtn.addEventListener("click", validateForm);

function validateForm(event) {
  if (
    productNameInput.value.trim() === "" ||
    productPriceInput.value.trim() === ""
  ) {
    alert("Please enter a valid Product name and price.");
    event.preventDefault();
  }
}

// Validasi productFreshness
productFreshnessInputs.forEach(function (input) {
  input.addEventListener("change", validateFreshness);
});

function validateFreshness() {
  const selectedValue = document.querySelector(
    'input[name="productFreshness"]:checked'
  );
  if (!selectedValue) {
    alert("Please select a Product Freshness.");
  }
}

// Validasi Product Category
productCategoryInput.addEventListener("change", validateCategory);

function validateCategory() {
  if (productCategoryInput.value === "") {
    alert("Please select a Product Category.");
  }
}

// Nonaktifkan tombol submit jika input kosong
productNameInput.addEventListener("input", validateSubmitButton);
productPriceInput.addEventListener("input", validateSubmitButton);

function validateSubmitButton() {
  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();
  submitBtn.disabled = productName === "" || productPrice === "";
}

// Menampilkan data yang diinput ke dalam tabel
document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.getElementById("productForm");
  let rowCounter = 1; // Counter untuk nomor urut

  productForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai dari formulir
    const productName = productNameInput.value.trim();
    const productCategory = productCategoryInput.value;
    const selectedFreshness = document.querySelector(
      'input[name="productFreshness"]:checked'
    );
    const productFreshness = selectedFreshness ? selectedFreshness.value : "";
    const productPrice = parseFloat(productPriceInput.value.trim());

    // Validasi data
    if (
      productName === "" ||
      productCategory === "" ||
      productFreshness === "" ||
      isNaN(productPrice) ||
      productPrice <= 0
    ) {
      alert("Please fill out all required fields correctly.");
      return; // Keluar dari fungsi jika validasi gagal
    }

    // Menambahkan data ke dalam tabel
    const newRow = productTableBody.insertRow();
    newRow.insertCell(0).textContent = rowCounter++;
    newRow.insertCell(1).textContent = productName;
    newRow.insertCell(2).textContent = productCategory;
    newRow.insertCell(3).textContent = productFreshness;
    newRow.insertCell(4).textContent = ""; // Misalnya, tempatkan gambar di sini
    newRow.insertCell(5).textContent = ""; // Misalnya, tempatkan deskripsi di sini
    newRow.insertCell(6).textContent = productPrice.toFixed(2); // Format harga dengan dua angka desimal

    // Mengosongkan formulir setelah data ditambahkan
    productForm.reset();
  });
});

// Menghapus data dari tabel
deleteButton.addEventListener("click", deleteTableRow);

function deleteTableRow() {
  const rowCount = productTableBody.rows.length;

  if (rowCount > 0) {
    productTableBody.deleteRow(rowCount - 1);
    rowCounter--; // Mengurangi nomor urut
  } else {
    alert("No data to delete.");
  }
}

// Tombol Search
searchButton.addEventListener("click", searchProduct);

function searchProduct() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    alert("Please enter a search term.");
  } else {
    let found = false;
    for (let i = 0; i < productTableBody.rows.length; i++) {
      const productName =
        productTableBody.rows[i].cells[1].textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        alert(`Found matching product: ${productName}`);
        found = true;
        break; // Hentikan pencarian setelah ditemukan pertama kali
      }
    }

    if (!found) {
      alert("No matching product found.");
    }
  }
}
