# React Hook

React Hook adalah fitur baru yang diperkenalkan oleh React versi 16.8. Fitur ini memungkinkan kita untuk menggunakan state dan lifecycle pada functional component. Sebelumnya, kita hanya bisa menggunakan state dan lifecycle pada class component.

## Penggunaan React Hook

Untuk menggunakan React Hook, kita perlu mengimport `useState` dan `useEffect` dari package `react`.

```jsx
import React, { useState, useEffect } from "react";
```

## useState

`useState` digunakan untuk membuat state pada functional component. `useState` menerima satu parameter yaitu nilai awal dari state. `useState` akan mengembalikan array yang berisi state dan fungsi untuk mengubah state.

```jsx
const [count, setCount] = useState(0);
```

Pada contoh di atas, kita membuat state `count` dengan nilai awal `0`. `useState` akan mengembalikan array yang berisi state `count` dan fungsi `setCount` untuk mengubah state `count`.

## useEffect

`useEffect` digunakan untuk mengeksekusi kode tertentu ketika terjadi perubahan pada state tertentu. `useEffect` menerima dua parameter yaitu fungsi yang akan dieksekusi dan array yang berisi state yang akan dipantau perubahannya.

```jsx
useEffect(() => {
  console.log("useEffect");
}, [count]);
```

Pada contoh di atas, kita membuat `useEffect` yang akan mengeksekusi fungsi `console.log("useEffect")` ketika terjadi perubahan pada state `count`.
