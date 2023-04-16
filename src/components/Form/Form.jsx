import React, { useState } from "react"
import uuid from 'react-uuid';

const Form = ({setTable}) => {

    const formProduct = {
        productId: uuid(),
        productName: "",
        productCategory: "",
        imageOfProduct: "",
        productFreshness: "",
        additionalDescription: "",
        productPrice: ""
    }
    
    const [product, setProduct] = useState(formProduct)
    const [errorName, seterrorName] = useState('');
    const [errorCategory, seterrorCategory] = useState('');
    const [errorImage, seterrorImage] = useState('');
    const [errorFreshness, seterrorFreshness] = useState('');
    const [errorDescription, seterrorDescription] = useState('');
    const [errorPrice, seterrorPrice] = useState('');

    const regexnotempty = /([^\s])/
    const regex10char = /^.{11,}$/

    const validateData = e => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name)
      console.log(value)
      console.log(product)

      //pengecekan regex validation product name
      if (!regexnotempty.test(product.productName)) {
          seterrorName("The product name field must be filled in")
      }
      else if (regex10char.test(product.productName)) {
          seterrorName("Product name cannot exceed 10 characters")
      }
      else {
          seterrorName("")
      }
      //pengecekan regex validation product category
      if (!regexnotempty.test(product.productCategory)) {
          seterrorCategory("The product category field must be filled in")
      }
      else {
          seterrorCategory("")
      }
      //pengecekan regex validation product image
      if (!regexnotempty.test(product.imageOfProduct)) {
          seterrorImage("The product Image field must be filled in")
      }
      else {
          seterrorImage("")
      }
      //pengecekan regex validation product freshness
      if (!regexnotempty.test(product.productFreshness)) {
          seterrorFreshness("The product freshness field must be filled in")
      }
      else {
          seterrorFreshness("")
      }
      //pengecekan regex validation product description
      if (!regexnotempty.test(product.additionalDescription)) {
          seterrorDescription("The additional description field must be filled in")
      }
      else {
          seterrorDescription("")
      }
      //pengecekan regex validation product price
      if (!regexnotempty.test(product.productPrice)) {
          seterrorPrice("The product price field must be filled in")
      }
      else {
          seterrorPrice("")
      }
    }

    const handleInputData = e => {
      const name = e.target.name;
      let value = e.target.value;
      //menangkap file gambar
      if(name === "imageOfProduct") {
          const files = e.target.files[0];
          const reader = new FileReader()
          reader.addEventListener("load", () => {        
              
              setProduct((prev) => ({
                  ...prev,
                  [name] : reader.result
              }))
          });
          reader.readAsDataURL(files);
          console.log(reader.result)
      }
      
      setProduct((prev) => ({
        ...prev,
        [name] : value
      }))
      validateData(e);
    }
  
    const handleSubmitData = e => {
      e.preventDefault();
      validateData(e);
      if (regexnotempty.test(product.productName) && 
          regexnotempty.test(product.productCategory) && 
          regexnotempty.test(product.imageOfProduct) && 
          regexnotempty.test(product.productFreshness) && 
          regexnotempty.test(product.additionalDescription) && 
          regexnotempty.test(product.productPrice)) 
      {
          setTable((prev) => ([...prev, product]))
          setProduct(prev => ({...prev, productId: uuid()}))
      }
      console.log(regexnotempty.test(product.productName))
    }
  
    const validName = !errorName ? null : 'is-invalid';
    const validCategory = !errorCategory ? null : 'is-invalid';
    const validImage = !errorImage ? null : 'is-invalid';
    const validFreshness = !errorFreshness ? null : 'is-invalid';
    const validDescription = !errorDescription ? null : 'is-invalid';
    const validPrice = !errorPrice ? null : 'is-invalid';

    return (
        <div className="main">
            <div className="main-content">
                <div className="form">
                    <form
                        onSubmit={handleSubmitData}
                        name="data"
                        className="row container mx-auto w-75"
                        id="formProduct"
                        action="#"
                    >
                        <h3>Detail Product</h3>
                        <div className="col-12 mb-4">
                            <label htmlFor="product-name" className="form-label">
                                Product Name
                            </label>
                            <br />
                            <input
                                type="text"
                                className={`form-control ${validName}`}
                                value={product.productName}
                                id="product-name"
                                name= "productName"
                                onChange={handleInputData}
                            />
                            <small id="error-productname" className="text-danger">
                                {errorName}
                            </small>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="product-category">Product Category</label> <br />
                            <select
                                className={`form-select ${validCategory}`}
                                name="productCategory"
                                id="product-category"
                                aria-label="ProductCategory"
                                value={product.productCategory}
                                onChange={handleInputData}
                            >
                                <option selected="" disabled="" value="">
                                Choose...
                                </option>
                                <option value="Makeup">Makeup</option>
                                <option value="Skincare">Skincare</option>
                                <option value="Bodycare">Bodycare</option>
                            </select>
                            <small id="error-productcategory" className="text-danger">
                                {errorCategory}
                            </small>
                        </div>
                        <div className="col-12 mb-4 custom-file-button">
                            <label htmlFor="product-image">Image of Product</label>
                            <input
                                className={`form-control ${validImage}`}
                                name="imageOfProduct"
                                id="product-image"
                                type="file"
                                onChange={handleInputData}
                            />
                            <small id="error-productimage" className="text-danger"> 
                                {errorImage}
                            </small>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="product-freshness">Product Freshness</label> <br />
                            <div className={`form-check ${validFreshness}`}>
                                <input
                                    type="radio"
                                    id="brandnew"
                                    name="productFreshness"
                                    defaultValue="Brand New"
                                    onChange={handleInputData}
                                />
                                <label htmlFor="brandnew">Brand New</label> <br />
                            </div>
                            <div className={`form-check ${validFreshness}`}>
                                <input
                                    type="radio"
                                    id="secondhank"
                                    name="productFreshness"
                                    defaultValue="Second Hank"
                                    onChange={handleInputData}
                                />
                                <label htmlFor="secondhank">Second Hank</label> <br />
                            </div>
                            <div className={`form-check ${validFreshness}`}>
                                <input
                                    type="radio"
                                    id="refurbished"
                                    name="productFreshness"
                                    defaultValue="Refurbished"
                                    onChange={handleInputData}
                                />
                                <label htmlFor="refurbished">Refurbished</label>
                            </div>
                            <small id="error-freshness" className="text-danger">
                                {errorFreshness}
                            </small>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="additional-description">Additional Description</label>{" "}
                            <br />
                            <textarea
                                className={`form-control ${validDescription}`}
                                name="additionalDescription"
                                id="additional-description"
                                rows={4}
                                value={product.additionalDescription}
                                onChange={handleInputData}
                            />
                            <small id="error-description" className="text-danger">
                                {errorDescription}
                            </small>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="product-price">Product Price</label> <br />
                            <input
                                type="number"
                                className={`form-control ${validPrice}`}
                                name="productPrice"
                                id="product-price"
                                placeholder="Rp."
                                value={product.productPrice}
                                onChange={handleInputData}
                            />
                            <small id="error-productprice" className="text-danger">
                                {errorPrice}
                            </small>
                        </div>
                        <div className="col-12 mb-4 mt-3 d-grid gap-2">
                            <button 
                                className="btn btn-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Form