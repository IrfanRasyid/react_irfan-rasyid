import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    key: "1",
    productName: "Nasi",
    productCategory: "Makanan",
    imageProduct: "https://i.ibb.co/7bQQYkX/food.png",
    productFreshness: "Brand New",
    productPrice: 10000,
  },
  {
    key: "2",
    productName: "Beras",
    productCategory: "Makanan",
    imageProduct: "https://i.ibb.co/7bQQYkX/food.png",
    productFreshness: "Brand New",
    productPrice: 2000,
  },
  {
    key: "3",
    productName: "Gamis",
    productCategory: "Baju",
    imageProduct: "https://i.ibb.co/7bQQYkX/food.png",
    productFreshness: "Second Hand",
    productPrice: 5000,
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: initialValue,
  },
  reducers: {
    addProduct: (state, action) => {
      const newData = {
        key: (state.products.length + 1).toString(),
        ...action.payload,
      };
      state.products = [...state.products, newData];
    },
    editProduct: (state, action) => {
      const { key, ...updatedProductData } = action.payload;
      state.products = state.products.map((product) =>
        product.key === key ? { ...product, ...updatedProductData } : product
      );
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((item) => {
        return item.key !== action.payload;
      });
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
