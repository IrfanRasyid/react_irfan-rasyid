# Event Handling

Event handling adalah teknik yang digunakan untuk menangani interaksi pengguna dengan aplikasi, seperti klik, input, dan sebagainya. Pada React, event handling dilakukan dengan cara yang sama seperti pada DOM, yaitu dengan menambahkan atribut event pada elemen HTML.

## Event Handling pada React

Pada React, event handling dilakukan dengan cara yang sama seperti pada DOM, yaitu dengan menambahkan atribut event pada elemen HTML. Contoh:

```jsx
<button onClick={handleClick}>Click Me!</button>
```

Pada contoh di atas, kita menambahkan atribut `onClick` pada elemen `<button>`. Nilai dari atribut `onClick` adalah fungsi `handleClick`. Fungsi `handleClick` akan dieksekusi ketika pengguna melakukan klik pada elemen `<button>`.

## Mengirim Argumen ke Event Handler

Kita dapat mengirim argumen ke event handler dengan cara menambahkan tanda kurung setelah nama fungsi. Contoh:

```jsx
<button onClick={() => handleClick("Hello")}>Click Me!</button>
```

Pada contoh di atas, kita menambahkan tanda kurung setelah nama fungsi `handleClick`. Kita juga dapat mengirim argumen ke fungsi `handleClick` dengan menuliskan argumen tersebut di dalam tanda kurung.

## Menggunakan Event Handler pada Class Component

Pada class component, kita dapat menggunakan event handler dengan cara yang sama seperti pada functional component. Contoh:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
```

Pada contoh di atas, kita menambahkan event handler `handleClick` pada elemen `<button>`. Ketika pengguna melakukan klik pada elemen `<button>`, fungsi `handleClick` akan dieksekusi.