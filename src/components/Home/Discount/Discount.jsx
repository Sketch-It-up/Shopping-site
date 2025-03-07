import React from 'react'
import img from "../../../assets/Images/lab-micro-motor-set.png"
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
                Lab Micro Motor Set
              </h2>
              <p className="py-3">
              Power & Precision at Your Fingertips. Our Lab Micro Motor Set delivers high-speed performance, smooth control, and durability for all your dental and laboratory needs. Achieve precision in polishing, grinding, and cutting with ease. Shop now for seamless workflow!
              </p>
              <div className="banner_btns">
                <button className="main_btn">Shop Now</button>
              </div>
            </div>

          </div>
          <div className="col-md-6 pt-3 Discount_img">
            <img src={img} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
