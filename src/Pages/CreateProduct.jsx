import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import "../assets/css/createProduct.css";

const CreateProduct = () => {
    //state untuk menyimpan perubahan data pada form dan tabel product
    const [tableProduct, setTableProduct] = useState([])

    //useEffect menampilkan alert Welcome ketika pertama kali website diload
    useEffect(() => {
        alert("Welcome!")
    }, [])

    return (
        <>
            <Navbar />
            <Header />
            <Form setTable={setTableProduct}/>
            <Products DataProduct = {tableProduct} setTable={setTableProduct}/>
        </>
    )
} 

export default CreateProduct