# React Routing

React Routing adalah teknik yang digunakan untuk menentukan tampilan yang akan ditampilkan berdasarkan URL yang diakses oleh pengguna. Pada React, routing dapat dilakukan dengan menggunakan package `react-router-dom`.

## Instalasi React Router

Untuk menggunakan React Router, kita perlu menginstall package `react-router-dom` terlebih dahulu.

```bash
npm install react-router-dom
```

## Membuat Routing

Untuk membuat routing, kita perlu membuat file `App.js` dan `Home.js` terlebih dahulu. File `App.js` akan berisi kode untuk routing, sedangkan file `Home.js` akan berisi kode untuk tampilan halaman utama.

```jsx
// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
```

```jsx
// Home.js
import React from "react";

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
```