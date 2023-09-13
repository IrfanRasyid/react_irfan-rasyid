import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import ProductForm from "./assets/Form/ProductForm";
import ProductList from "./assets/List/ProductList";

function CreateProduct() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default CreateProduct;