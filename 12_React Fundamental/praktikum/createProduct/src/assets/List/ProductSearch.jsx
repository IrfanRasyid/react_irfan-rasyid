

function ProductSearch() {
  return (
    <div className="row mt-3">
      <div className="col-md-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Search by Product Name"
          />
        </div>
        <div className="input-group-append">
          <button className="btn btn-primary" id="searchButton">
            Search
          </button>
          <button className="btn btn-danger" id="deleteButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
