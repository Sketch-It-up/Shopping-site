import React from 'react'
import img from "../../../assets/Images/Airoter_Product_1.jpg"
import "../NewArrivals.css"

const Arrivals = () => {
  return (
    <div>
      <div className="container gx-0 Arrivals">
        <div className="row gx-0 align-items-center Arrivals_main">
          <div className="col-4">
            <div className="Arrivals_col1 text-center">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-8">
            <div className="Arrivals_col2 px-4">
              <p className="Product_name">Airoter Premium</p>
              <div className="icons ">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4 className="Product_price">₹ 40</h4>
            </div>
          </div>
          {/* /************************ */}
          {/* /************************ */}
        </div>
      </div>
    </div>
  )
}

export default Arrivals
