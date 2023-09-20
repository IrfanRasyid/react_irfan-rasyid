# React Form

Form adalah salah satu komponen yang sering digunakan pada aplikasi web. Form digunakan untuk mengumpulkan data dari pengguna. Pada React, form dapat dibuat dengan menggunakan tag HTML seperti `<input>`, `<select>`, dan `<textarea>`. Pada modul ini, kita akan belajar cara membuat form pada React.

## Membuat Form

Untuk membuat form pada React, kita dapat menggunakan tag HTML seperti `<input>`, `<select>`, dan `<textarea>`. Contoh:

```jsx
import React from "react";



const Form = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
```

Pada contoh di atas, kita membuat form dengan menggunakan tag `<form>`. Form tersebut memiliki dua input yaitu `<input type="text">` dan `<input type="submit">`.

## Menggunakan State pada Form

Pada contoh sebelumnya, kita membuat form dengan menggunakan tag HTML. Namun, form tersebut tidak dapat digunakan untuk mengumpulkan data dari pengguna. Untuk dapat mengumpulkan data dari pengguna, kita perlu menggunakan state. Contoh:

```jsx
import React, { useState } from "react";



const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
```

Pada contoh di atas, kita membuat state `name` dengan nilai awal `""`. State `name` akan digunakan untuk menyimpan data yang diinput oleh pengguna. Ketika pengguna menginput data pada form, fungsi `setName` akan dieksekusi untuk mengubah nilai dari state `name`. Ketika pengguna melakukan submit pada form, fungsi `handleSubmit` akan dieksekusi untuk menampilkan data yang diinput oleh pengguna.

## Controlled Component

Controlled component adalah komponen yang nilainya dikontrol oleh React. Pada contoh sebelumnya, kita membuat controlled component dengan menggunakan state. Controlled component dapat digunakan untuk mengontrol nilai dari form. Contoh:

```jsx
import React, { useState } from "react";



const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
```

Pada contoh di atas, kita membuat controlled component dengan menggunakan state. Controlled component tersebut akan mengontrol nilai dari form. Ketika pengguna menginput data pada form, nilai dari state `name` akan berubah. Ketika pengguna melakukan submit pada form, nilai dari state `name` akan ditampilkan.

## Menggunakan Ref pada Form

Ref adalah fitur yang digunakan untuk mengakses elemen HTML pada React. Pada contoh sebelumnya, kita membuat controlled component dengan menggunakan state. Namun, kita juga dapat membuat controlled component dengan menggunakan ref. Contoh:

```jsx
import React, { useRef } from "react";


export default function Form() {
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${nameRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
```

Pada contoh di atas, kita membuat ref `nameRef` dengan menggunakan `useRef()`. Ref `nameRef` akan digunakan untuk mengakses nilai dari elemen `<input>`. Ketika pengguna menginput data pada form, nilai dari elemen `<input>` akan disimpan pada ref `nameRef`. Ketika pengguna melakukan submit pada form, nilai dari ref `nameRef` akan ditampilkan.

## Uncontrolled Component

Uncontrolled component adalah komponen yang nilainya tidak dikontrol oleh React. Pada contoh sebelumnya, kita membuat controlled component dengan menggunakan state. Namun, kita juga dapat membuat uncontrolled component dengan menggunakan ref. Contoh:

```jsx
import React from "react";


export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${event.target.name.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
```

Pada contoh di atas, kita membuat uncontrolled component dengan menggunakan ref. Uncontrolled component tersebut tidak akan mengontrol nilai dari form. Ketika pengguna menginput data pada form, nilai dari elemen `<input>` akan disimpan pada event `event.target.name.value`. Ketika pengguna melakukan submit pada form, nilai dari event `event.target.name.value` akan ditampilkan.


