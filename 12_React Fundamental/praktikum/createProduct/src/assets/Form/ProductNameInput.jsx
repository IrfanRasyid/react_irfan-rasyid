
function ProductNameInput() {
  return (
    <div className="mb-3">
      <label htmlFor="productName" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="productName"
        name="productName"
        required
      />
      <div className="invalid-feedback">
        Product Name must not exceed 25 characters and must not contain symbols.
      </div>
    </div>
  );
}

export default ProductNameInput;
