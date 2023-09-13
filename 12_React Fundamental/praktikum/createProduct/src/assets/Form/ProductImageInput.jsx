// import React from 'react';

function ProductImageInput() {
  return (
    <div className="mb-3">
      <label htmlFor="productImage" className="form-label">
        Image of Product
      </label>
      <input
        type="file"
        className="form-control"
        id="productImage"
        name="productImage"
      />
    </div>
  );
}

export default ProductImageInput;
