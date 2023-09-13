function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
  <img
    className="d-block mx-auto mb-4"
    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    alt=""
    width={72}
    height={57}
  />
  <h2>Create Product</h2>
  <p className="lead col-lg-6 mx-auto">
    Below is an example form built entirely with Bootstrap’s form controls. Each
    required form group has a validation state that can be triggered by
    attempting to submit the form without completing it.
  </p>
</div>
  );
}

export default Hero;