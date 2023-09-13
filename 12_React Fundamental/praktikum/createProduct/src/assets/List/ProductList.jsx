import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductSearch from './ProductSearch';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productImage: '',
    additionalDescription: '',
    productPrice: '',
  });

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({
      productName: '',
      productCategory: '',
      productFreshness: '',
      productImage: '',
      additionalDescription: '',
      productPrice: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      <ProductTable products={products} />
      <ProductSearch />
    </div>
  );
}

export default ProductList;
