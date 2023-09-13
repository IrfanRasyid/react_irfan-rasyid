
function ProductCategorySelect() {
  return (
    <div className="mb-3">
      <label htmlFor="productCategory" className="form-label">
        Product Category
      </label>
      <select
        className="form-select"
        id="productCategory"
        name="productCategory"
        required
      >
        <option value="">Select a category...</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
    </div>
  );
}

export default ProductCategorySelect;
