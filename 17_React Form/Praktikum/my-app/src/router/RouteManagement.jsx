import { React, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layout/LayoutComponent";
import FormLogin from "../pages/formLogin/FormLogin";
import FormRegistrasi from "../pages/formRegistrasi/FormRegistrasi";
import HomePage from "../pages/homePage/HomePage";
import CreateProduct from "./../pages/createProduct/CreateProduct";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  useEffect(() => {
    if (!token) {
      navigation("/");
    }
  }, [token]);

  return (
    <>
      <Suspense>
        {!token ? (
          <Routes>
            <Route path="/" element={<FormLogin />} />
            <Route path="/form-registrasi" element={<FormRegistrasi />} />
          </Routes>
        ) : (
          <LayoutComponent>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/create-product/:id" element={<CreateProduct />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </LayoutComponent>
        )}
      </Suspense>
    </>
  );
};

export default RouteManagement;
