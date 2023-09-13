
function AdditionalDescriptionTextarea() {
  return (
    <div className="mb-3">
      <label htmlFor="additionalDescription" className="form-label">
        Additional Description
      </label>
      <textarea
        className="form-control"
        id="additionalDescription"
        name="additionalDescription"
        rows="3"
      ></textarea>
    </div>
  );
}

export default AdditionalDescriptionTextarea;
