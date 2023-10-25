import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Impor PersistGate
import LayoutComponent from "../components/layout/LayoutComponent";
import FormLogin from "../pages/formLogin/FormLogin";
import FormRegistrasi from "../pages/formRegistrasi/FormRegistrasi";
import HomePage from "../pages/homePage/HomePage";
import CreateProduct from "../pages/createProduct/CreateProduct";
import { store, persistor } from "../redux/store";
import OpenAI from "../pages/ChatAI";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  useEffect(() => {
    if (!token) {
      navigation("/");
    }
  }, [token]);

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
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
                <Route path="/open-ai" element={<OpenAI />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </LayoutComponent>
          )}
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default RouteManagement;
