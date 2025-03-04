import React from 'react'
import Product from './Product/Product'
import "./Products.css"

const Products = () => {
  return (
    <div>
        <div className="container gx-0 py-5">
            <h2 className='Products_h2 pb-5 main_h2'>Popular Products</h2>
            <div className="row gx-0">
                <div className="col-md-12">
                    <div className="Products_main">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
