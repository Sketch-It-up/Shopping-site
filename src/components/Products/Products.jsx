// filepath: /d:/College_VIT/09_sketchitup/Dental-Ecommerce/Doctor-portfolio/E-commerce2/FrontEnd/src/components/Products/Products.jsx
import React from 'react';
import Product from './Product/Product';
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div>
      <div className="container gx-0 py-5">
        <h2 className='Products_h2 pb-5 main_h2'>Popular Products</h2>
        <div className="row gx-0">
          <div className="col-md-12">
            <div className="Products_main">
              {products?.data?.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  img={item.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;