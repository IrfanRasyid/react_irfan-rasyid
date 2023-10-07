# Global State Management and Data fetching

## React Redux

Redux adalah sebuah library yang digunakan untuk mengelola state secara global. Redux dapat digunakan bersamaan dengan React, Angular, Vue, maupun framework JavaScript lainnya. Redux dapat digunakan untuk mengelola state yang bersifat global, seperti state yang digunakan untuk autentikasi pengguna, data yang diambil dari server, dan lain sebagainya.

### Instalasi

Untuk menggunakan Redux, kita perlu menginstal library redux dan react-redux. Kita dapat menginstalnya dengan perintah berikut:

```bash
npm install redux react-redux
```

### Store

Store adalah tempat penyimpanan state secara global. State yang disimpan di dalam store dapat diakses oleh semua komponen yang ada di dalam aplikasi. Untuk membuat store, kita perlu membuat sebuah file baru bernama store.js di dalam folder src. Kemudian, kita dapat membuat store dengan menggunakan kode berikut:

```javascript
import { createStore } from "redux";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "SET_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === "SET_DATA") {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
```


### Provider

Provider adalah komponen yang digunakan untuk menyediakan store ke dalam aplikasi. Provider akan membungkus semua komponen yang ada di dalam aplikasi. Untuk menggunakan Provider, kita perlu mengimpor Provider dari react-redux. Kemudian, kita dapat menggunakan Provider dengan kode berikut:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
