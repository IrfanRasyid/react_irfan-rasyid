import React from 'react'
import { useState } from 'react'

function FormProduct() {
    const dataKosong = {
        productName: "",
        productCategory: "",
        imageProduct: "",
        additionalDescription: "",
        price: "",
    }
    const [data, setData] = useState(dataKosong)
    const [errMsg, setErrMsg] = useState("")

    const handleInput = (e) => {
        const { name, value } = e.target
        if (name === "productName") {
            if (value.length > 10) {
                setErrMsg("Product name tidak boleh lebih dari 10 karakter")
            } else {
                setErrMsg("")
            }
        }
        setData({ ...data, [name]: value })
        console.log(data)
    }

    const handleSubmit = (e) => {
        if (errMsg !== "") {
            alert("Terdapat Data yang tidak sesuai")
        } else {
            alert(`Data Product ${data.productName} berhasil ditambah`)
            setData(dataKosong)
        }
        e.preventDefault()
    }

    const randomNumber = () => {
        const random = Math.floor(Math.random() * 100)
        console.log(random)
        return random
    }

    return (
        <div className="detail-product container-md w-50 mt-5">
            <h3>Detail Product</h3>
            <form className="row flex-column" onSubmit={handleSubmit}>
                <div className="mt-2 w-50">
                    <label htmlFor="productName" className="form-label">Product name</label>
                    <input type="text"
                        className="form-control"
                        id='productName'
                        name="productName"
                        value={data.productName}
                        onChange={handleInput}
                        style={{ border: errMsg !== "" ? "1px solid red" : "" }}
                        required
                    />
                </div>
                <span className='text-danger fw-bold'>{errMsg}</span>
                <div className="mt-4 w-50">
                    <label htmlFor="productCategory" className="form-label">Product Category</label>
                    <select className="form-select"
                        id="productCategory"
                        name='productCategory'
                        value={data.productCategory}
                        onChange={handleInput}
                        required>
                        <option>Choose...</option>
                        <option value="pakaian">pakaian</option>
                        <option value="makanan">makanan</option>
                    </select>
                </div>
                <div className="mt-4 w-50">
                    <label htmlFor="imageProduct" className="form-label">Image of Product</label>
                    <input type="file"
                        className="form-control"
                        id="imageProduct"
                        name="imageProduct"
                        value={data.imageProduct}
                        onChange={handleInput}
                        required />
                </div>
                <div className="mt-4 w-50">
                    <label htmlFor="freshness" className="form-label">Product Freshness</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="freshness" id="brandNew" required />
                        <label className="form-check-label" htmlFor="brandNew"> Brand New </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="freshness" id="secondHand"
                            required />
                        <label className="form-check-label" htmlFor="secondHand"> Second Hand </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="freshness" id="refufbished"
                            required />
                        <label className="form-check-label" htmlFor="refufbished"> Refufbished </label>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="additionalDescription" className="form-label">Additional Description</label>
                    <textarea className="form-control"
                        id="additionalDescription"
                        name="additionalDescription"
                        placeholder="Required example textarea"
                        value={data.additionalDescription}
                        onChange={handleInput}
                        required>
                    </textarea>
                </div>
                <div className="mt-4">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number"
                        className="form-control"
                        name="price"
                        id="price"
                        placeholder="$1"
                        value={data.price}
                        onChange={handleInput}
                        required />
                </div>
                <div className="my-5">
                    <button type="submit" className='btn btn-primary w-100 mt-2' onClick={randomNumber}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormProduct