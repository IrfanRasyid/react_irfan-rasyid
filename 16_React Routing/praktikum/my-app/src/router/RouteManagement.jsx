import { React, useEffect, Suspense } from "react";
import LayoutComponent from "../components/layout/LayoutComponent";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./../pages/landingPage/LandingPage";
import CreateProduct from "./../pages/createProduct/CreateProduct";
import LoginPage from "./../pages/loginPage/LoginPage";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <Suspense>
        {!token ? (
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        ) : (
          <LayoutComponent>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/create-product/:id" element={<CreateProduct />} />
            </Routes>
          </LayoutComponent>
        )}
      </Suspense>
    </>
  );
};

export default RouteManagement;
