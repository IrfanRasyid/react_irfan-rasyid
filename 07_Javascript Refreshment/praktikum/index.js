const productNameInput = document.getElementById('productName');
        const productPriceInput = document.getElementById('productPrice');
        const submitBtn = document.getElementById('submitBtn');

        submitBtn.addEventListener('click', function() {
            const productName = productNameInput.value;
            const productPrice = productPriceInput.value;

            if (productName.length > 25) {
                productNameInput.classList.add('is-invalid');
                return;
            } else {
                productNameInput.classList.remove('is-invalid');
            }

            if (productName.includes('@') || productName.includes('#') || productName.includes('{') || productName.includes('}')) {
              productNameInput.classList.add('is-invalid');
              return;
          } else {
              productNameInput.classList.remove('is-invalid');
          }

            if (productName.length > 10) {
                productNameInput.classList.add('is-invalid');
                productNameInput.nextElementSibling.textContent = 'Product Name must not exceed 10 characters.';
                return;
            } else {
                productNameInput.nextElementSibling.textContent = 'Product Name must not exceed 25 characters.';
            }

            if (productName === '') {
                productNameInput.classList.add('is-invalid');
                return;
            } else {
                productNameInput.classList.remove('is-invalid');
            }

            if (productPrice === '') {
                productPriceInput.classList.add('is-invalid');
                return;
            } else {
                productPriceInput.classList.remove('is-invalid');
            };
        });