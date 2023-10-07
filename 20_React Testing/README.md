# React Testing

Testing adalah proses untuk memastikan bahwa kode yang kita tulis berjalan sesuai dengan yang kita harapkan. Testing dapat dilakukan secara manual atau otomatis. Testing secara manual dilakukan dengan menjalankan aplikasi dan memastikan bahwa aplikasi berjalan sesuai dengan yang kita harapkan. Testing secara otomatis dilakukan dengan menulis kode yang akan menjalankan aplikasi dan memastikan bahwa aplikasi berjalan sesuai dengan yang kita harapkan.

Testing secara otomatis dapat dilakukan dengan menggunakan library atau framework testing. Pada modul ini, kita akan menggunakan Jest dan React Testing Library untuk melakukan testing pada aplikasi React.

## Jest

Jest adalah library yang digunakan untuk melakukan testing pada aplikasi JavaScript. Jest dapat digunakan untuk melakukan testing pada aplikasi React, Node.js, dan aplikasi JavaScript lainnya. Jest dapat digunakan untuk melakukan testing secara otomatis.

### Instalasi

Untuk menggunakan Jest, kita perlu menginstal library jest dan react-test-renderer. Kita dapat menginstalnya dengan perintah berikut:

```bash
npm install jest react-test-renderer
```

### Menjalankan Jest

Jest dapat dijalankan dengan menggunakan perintah berikut:

```bash
npx jest
```

Jest akan menjalankan semua file yang memiliki ekstensi .test.js atau .spec.js. Kita dapat menambahkan opsi --watch untuk menjalankan Jest secara terus menerus.

```bash
npx jest --watch
```

### Menjalankan Jest dengan yarn

Jest dapat dijalankan dengan menggunakan perintah berikut:

```bash
yarn jest
```

Jest akan menjalankan semua file yang memiliki ekstensi .test.js atau .spec.js. Kita dapat menambahkan opsi --watch untuk menjalankan Jest secara terus menerus.

```bash
yarn jest --watch
```

## React Testing Library

React Testing Library adalah library yang digunakan untuk melakukan testing pada aplikasi React. React Testing Library dapat digunakan untuk melakukan testing secara otomatis.