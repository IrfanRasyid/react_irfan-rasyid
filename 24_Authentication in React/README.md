# Authentication in React

Authentication adalah proses untuk memastikan bahwa user yang mengakses sebuah aplikasi adalah user yang sebenarnya. Authentication biasanya dilakukan dengan menggunakan username dan password. 

## Authentication in React

Authentication di React dapat dilakukan dengan menggunakan localStorage. localStorage adalah sebuah fitur pada browser yang dapat digunakan untuk menyimpan data secara lokal. localStorage dapat digunakan untuk menyimpan data user yang sedang login.

## Login

Untuk membuat fitur login, kita perlu membuat sebuah form untuk menginputkan username dan password. Kita juga perlu membuat sebuah fungsi untuk menyimpan data user yang sedang login ke localStorage.

```jsx
import React, { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      username: username,
      password: password,
    };

    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

## Logout

Untuk membuat fitur logout, kita perlu membuat sebuah fungsi untuk menghapus data user yang sedang login dari localStorage.

```jsx

import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("data");
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
```

## Private Route

Private Route adalah sebuah fitur yang digunakan untuk membatasi user yang dapat mengakses sebuah halaman. Private Route biasanya digunakan untuk halaman yang hanya dapat diakses oleh user yang sudah login. Untuk membuat Private Route, kita perlu membuat sebuah fungsi yang akan mengecek apakah user sudah login atau belum. Jika user sudah login, maka user dapat mengakses halaman tersebut. Jika user belum login, maka user akan diarahkan ke halaman login.

```jsx
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const data = localStorage.getItem("data");

  return (
    <Route
      {...rest}
      render={(props) =>
        data ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
```

