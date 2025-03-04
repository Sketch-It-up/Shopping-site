import React from 'react'
import img from "../../../assets/mid_headphone.png"
import "./Discount.css"

const Discount = () => {
  return (
    <div>
      <div className="container Discount px-5 py-3 my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="Discount_col1 pt-4">
              <h6 className="Main_Label pb-3">
                <i className="fa-solid fa-star"></i> Top Products Of The Month</h6>
              <h2>
                Micropack MHP Headphone Black
              </h2>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus minima illo ipsum, itaque voluptate praesentium dolore quaerat! Cum, excepturi perspiciatis iure laudantium cumque illo assumenda magni beatae saepe numquam!
              </p>
              <div className="banner_btns">
                <button className="main_btn">Shop Now</button>
              </div>
            </div>

          </div>
          <div className="col-md-6 pt-3">
            <img src={img} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
