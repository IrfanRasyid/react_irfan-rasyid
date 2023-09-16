// import React from 'react';

function ProductFreshnessRadio() {
  return (
    <div className="mb-3">
      <label className="form-label">Product Freshness</label>
      <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="productFreshness"
      id="freshnessNew"
      defaultValue="brandNew"
      required=""
    />
    <label className="form-check-label" htmlFor="freshnessNew">
      Brand New
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="productFreshness"
      id="freshnessSecond"
      defaultValue="second"
      required=""
    />
    <label className="form-check-label" htmlFor="freshnessSecond">
      Second
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="productFreshness"
      id="freshnessRefurbished"
      defaultValue="refurbished"
      required=""
    />
    <label className="form-check-label" htmlFor="freshnessRefurbished">
      Refurbished
    </label>
  </div>
</>

    </div>
  );
}

export default ProductFreshnessRadio;
