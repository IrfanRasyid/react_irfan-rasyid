import ProductNameInput from "./ProductNameInput";
import ProductCategorySelect from "./ProductCategorySelect";
import ProductFreshnessRadio from "./ProductFreshnessRadio";
import ProductImageInput from "./ProductImageInput";
import AdditionalDescriptionTextarea from "./AdditionalDescriptionTextarea";
import ProductPriceInput from "./ProductPriceInput";

function ProductForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form id="productForm">
            <h2>Detail Product</h2>
            <ProductNameInput />
            <ProductCategorySelect />
            <ProductFreshnessRadio />
            <ProductImageInput />
            <AdditionalDescriptionTextarea />
            <ProductPriceInput />
            <button type="submit" className="btn btn-primary" id="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
