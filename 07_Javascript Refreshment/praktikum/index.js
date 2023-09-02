const submitBtn = document.getElementById('submitBtn');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productCategoryInput = document.getElementById('productCategory');
const productFreshnessInputs = document.querySelectorAll('input[name="productFreshness"]');

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