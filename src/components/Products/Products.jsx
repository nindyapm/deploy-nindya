import React from "react"
import Button from "../Button/Button";

const Products = ({DataProduct, setTable}) => {
    //fungsi menghapus data product dengan filter id
    const deleteProduct = (id) => {
        if (window.confirm("Apakah ingin menghapus data?")) {
            const filter = DataProduct.filter(data => data.productId != id)
            setTable([...filter])
        }
    }

    return (
        <div className="product">
            <div className="judul">List Product</div>
            <div className="listproduct">
                <table className="table table-striped" id="datatabel">
                    <thead>
                        <tr>
                            <th>No</th>    
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Image of Product</th>
                            <th>Product Freshness</th>
                            <th>Additional Description</th>
                            <th>Product Price</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataProduct.map((data) => {
                            return(
                                <tr key={data.productId}>
                                    <td>{data.productId}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.productCategory}</td>
                                    <td>
                                        <img src={data.imageOfProduct} alt="Gambar" />
                                    </td>
                                    <td>{data.productFreshness}</td>
                                    <td>{data.additionalDescription}</td>
                                    <td>{data.productPrice}</td>
                                    <td>
                                        <Button
                                        onClick={() => deleteProduct(data.productId)}
                                        className="btn btn-danger"
                                        label="Delete"
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            className="btn btn-success"
                                            label="Edit"
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <input id="search" type="text" placeholder="Search by Product Name" />
            </div>
            <div className="btn-group b" role="group" aria-label="buttondeletion">
                <button type="button" className="btn btn-primary" id="search-button">
                    Search
                </button>
            </div>      
        </div>

    )
}

export default Products