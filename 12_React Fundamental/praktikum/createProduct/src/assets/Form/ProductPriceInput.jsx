
function ProductPriceInput() {
  return (
    <div className="mb-3">
      <label htmlFor="productPrice" className="form-label">
        Product Price
      </label>
      <input
        type="number"
        className="form-control"
        id="productPrice"
        name="productPrice"
        required
      />
      <div className="invalid-feedback">
        Please enter a valid Product price.
      </div>
    </div>
  );
}

export default ProductPriceInput;
