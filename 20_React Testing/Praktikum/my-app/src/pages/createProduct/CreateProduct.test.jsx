import { test, expect, mount } from '@vitest/jest';

// Import komponen CreateProduct yang akan diuji
import CreateProduct from './CreateProduct';

test('Form input Product Name dapat menerima input teks dan menampilkannya di halaman', async () => {
  const wrapper = mount(CreateProduct);

  const productNameInput = wrapper.getByLabelText('Product Name');
  const inputValue = 'Contoh Produk';

  await wrapper.type(productNameInput, inputValue);

  expect(productNameInput.value).toBe(inputValue);
  expect(wrapper.queryByText(inputValue)).not.toBeNull();
});

test('Pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar', async () => {
  const wrapper = mount(CreateProduct);

  const categoryInput = wrapper.getByLabelText('Category');
  const quantityInput = wrapper.getByLabelText('Quantity');
  const descriptionInput = wrapper.getByLabelText('Description');

  const categoryValue = 'Contoh Kategori';
  const quantityValue = '10';
  const descriptionValue = 'Deskripsi produk contoh';

  await wrapper.type(categoryInput, categoryValue);
  await wrapper.type(quantityInput, quantityValue);
  await wrapper.type(descriptionInput, descriptionValue);

  expect(wrapper.queryByText(categoryValue)).not.toBeNull();
  expect(wrapper.queryByText(quantityValue)).not.toBeNull();
  expect(wrapper.queryByText(descriptionValue)).not.toBeNull();
});

test('Validasi Product Name tidak boleh kosong dan tidak mengandung karakter khusus', async () => {
    const wrapper = mount(CreateProduct);
  
    const productNameInput = wrapper.getByLabelText('Product Name');
  
    // Inputkan karakter khusus
    await wrapper.type(productNameInput, '@#{}');
  
    // Pastikan pesan kesalahan muncul
    expect(wrapper.queryByText('Product Name tidak boleh mengandung karakter khusus @/#{}')).not.toBeNull();
  
    // Hapus karakter khusus
    await wrapper.clear(productNameInput);
  
    // Pastikan pesan kesalahan hilang
    expect(wrapper.queryByText('Product Name tidak boleh mengandung karakter khusus @/#{}')).toBeNull();
  });

  test('Validasi Product Name tidak boleh melebihi 25 karakter', async () => {
    const wrapper = mount(CreateProduct);
  
    const productNameInput = wrapper.getByLabelText('Product Name');
  
    // Inputkan lebih dari 25 karakter
    await wrapper.type(productNameInput, 'Nama Produk yang Panjang Lebih dari 25 Karakter');
  
    // Pastikan pesan kesalahan muncul
    expect(wrapper.queryByText('Product Name tidak boleh lebih dari 25 karakter')).not.toBeNull();
  
    // Hapus karakter yang melebihi 25 karakter
    await wrapper.clear(productNameInput);
  
    // Pastikan pesan kesalahan hilang
    expect(wrapper.queryByText('Product Name tidak boleh lebih dari 25 karakter')).toBeNull();
  });

  test('Validasi semua form field tidak boleh kosong', async () => {
    const wrapper = mount(CreateProduct);
  
    const categoryInput = wrapper.getByLabelText('Category');
    const quantityInput = wrapper.getByLabelText('Quantity');
    const descriptionInput = wrapper.getByLabelText('Description');
  
    // Kosongkan semua form field
    await wrapper.type(categoryInput, '');
    await wrapper.type(quantityInput, '');
    await wrapper.type(descriptionInput, '');
  
    // Pastikan pesan kesalahan muncul untuk semua form field
    expect(wrapper.queryByText('Category tidak boleh kosong')).not.toBeNull();
    expect(wrapper.queryByText('Quantity tidak boleh kosong')).not.toBeNull();
    expect(wrapper.queryByText('Description tidak boleh kosong')).not.toBeNull();
  
    // Isi kembali semua form field
    await wrapper.type(categoryInput, 'Contoh Kategori');
    await wrapper.type(quantityInput, '10');
    await wrapper.type(descriptionInput, 'Deskripsi produk contoh');
  
    // Pastikan pesan kesalahan hilang untuk semua form field
    expect(wrapper.queryByText('Category tidak boleh kosong')).toBeNull();
    expect(wrapper.queryByText('Quantity tidak boleh kosong')).toBeNull();
    expect(wrapper.queryByText('Description tidak boleh kosong')).toBeNull();
  });
  