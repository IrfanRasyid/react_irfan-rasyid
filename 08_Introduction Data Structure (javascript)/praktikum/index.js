const submitBtn = document.getElementById('submitBtn');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productCategoryInput = document.getElementById('productCategory');
const productFreshnessInputs = document.querySelectorAll('input[name="productFreshness"]');
const productTableBody = document.getElementById('productTableBody');

// Validasi input karakter productname
productNameInput.addEventListener('input', function() {
  const productName = productNameInput.value;
  const productNameError = document.getElementById('productNameError');

  if (productName.length > 25) {
    productNameError.textContent = 'Product Name must not exceed 25 characters.';
  } else if (productName.includes('@') || productName.includes('#') || productName.includes('{') || productName.includes('}')) {
    productNameError.textContent = 'Name must not contain symbols (@, #, or {}).';
  } else {
    productNameError.textContent = '';
  }
});

// Validasi input harga
submitBtn.addEventListener('click', function(event) {
    if (productNameInput.value.trim() === '' || productPriceInput.value.trim() === '') {
      alert('Please enter a valid Product name and price.');
      event.preventDefault();
    }
  });

// Validasi productfreshness

productFreshnessInputs.forEach(function(input) {
  input.addEventListener('change', function() {
    const selectedValue = document.querySelector('input[name="productFreshness"]:checked');
    if (!selectedValue) {
      alert('Please select a Product Freshness.');
    }
  });
});

// Validasi Product Category
productCategoryInput.addEventListener('change', function() {
  if (productCategoryInput.value === '') {
    alert('Please select a Product Category.');
  }
});


// Nonaktivkan tombol submit jika input kosong
  productNameInput.addEventListener('input', validateForm);
  productPriceInput.addEventListener('input', validateForm);
  
  function validateForm() {
    const productName = productNameInput.value.trim();
    const productPrice = productPriceInput.value.trim();
  
    if (productName === '' || productPrice === '') {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  }

// Menampilkan tombol submit ketika ditekan
submitBtn.addEventListener('click', function() {
    const productName = productNameInput.value.trim();
    const productPrice = productPriceInput.value.trim();
    
  
    if (productName === '' || productPrice === '') {
      alert('The Product Name and Product Price must be filled in.');
    } else {
      alert(`Product Name: ${productName}\nProduct Price: ${productPrice}`);
    }
  });

// Menampilkan data yang diinput ke dalam tabel

document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productTableBody = document.getElementById('productTableBody');
    let rowCounter = 1; // Counter untuk nomor urut

    productForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir
        
        // Mengambil nilai dari formulir
        const productName = document.getElementById('productName').value.trim();
        const productCategory = document.getElementById('productCategory').value;
        const selectedFreshness = document.querySelector('input[name="productFreshness"]:checked');
        const productFreshness = selectedFreshness ? selectedFreshness.value : '';
        const productPrice = parseFloat(document.getElementById('productPrice').value.trim());

        // Validasi data
        if (productName === '' || productCategory === '' || productFreshness === '' || isNaN(productPrice) || productPrice <= 0) {
            alert('Please fill out all required fields correctly.');
            return; // Keluar dari fungsi jika validasi gagal
        }

        // Menambahkan data ke dalam tabel
        const newRow = productTableBody.insertRow();
        const cellNo = newRow.insertCell(0);
        const cellName = newRow.insertCell(1);
        const cellCategory = newRow.insertCell(2);
        const cellFreshness = newRow.insertCell(3);
        const cellImage = newRow.insertCell(4);
        const cellDescription = newRow.insertCell(5);
        const cellPrice = newRow.insertCell(6);

        cellNo.textContent = rowCounter++;
        cellName.textContent = productName;
        cellCategory.textContent = productCategory;
        cellFreshness.textContent = productFreshness;
        // Anda dapat mengisi sel-sel lainnya sesuai dengan kebutuhan Anda
        cellImage.textContent = ''; // Misalnya, tempatkan gambar di sini
        cellDescription.textContent = ''; // Misalnya, tempatkan deskripsi di sini
        cellPrice.textContent = productPrice.toFixed(2); // Format harga dengan dua angka desimal

        // Mengosongkan formulir setelah data ditambahkan
        productForm.reset();
    });
});

// Menghapus data dari tabel
const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', function() {
    const rowCount = productTableBody.rows.length;

    if (rowCount > 0) {
        productTableBody.deleteRow(rowCount - 1);
        rowCounter--; // Mengurangi nomor urut
    } else {
        alert('No data to delete.');
    }
});

// Tombol Search
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term.');
    } else {
        let found = false;
        for (let i = 0; i < productTableBody.rows.length; i++) {
            const productName = productTableBody.rows[i].cells[1].textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                alert(`Found matching product: ${productTableBody.rows[i].cells[1].textContent}`);
                found = true;
                break; // Hentikan pencarian setelah ditemukan pertama kali
            }
        }

        if (!found) {
            alert('No matching product found.');
        }
    }
});

