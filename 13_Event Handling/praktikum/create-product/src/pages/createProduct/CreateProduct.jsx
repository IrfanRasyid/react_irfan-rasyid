import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import FormProduct from './components/FormProduct'
import Header from './components/Header'

const CreateProduct = () => {
    return (
        <>
            <NavigationBar />
            <div className="container">
                <Header />
                <FormProduct />
            </div>
        </>
    )
}

export default CreateProduct