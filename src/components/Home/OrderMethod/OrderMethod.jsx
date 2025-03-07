import React from 'react'
import "./OrderMethod.css"
import img1 from "../../../assets/ship.png"
import img2 from "../../../assets/secure.png"
import img3 from "../../../assets/online-support.png"

const OrderMethod = () => {
  return (
    <div>
      <div className="Order">
        <div className="container gx-0 py-5">
            <div className="row gx-0 align-items-center">
                <div className="col-md-4">
                    <div className="order_col1">
                        <img src={img1} alt="img-fluid" />
                        <h6 className="py-2">Free Shipping</h6>
                        <p>Free Shipping on All Orders! Enjoy hassle-free shopping with zero shipping costs on your favorite dental products. Get the best quality delivered to your doorstep—fast, secure, and absolutely free!</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="order_col1">
                        <img src={img2} alt="img-fluid" />
                        <h6 className="py-2">Flexible Payments</h6>
                        <p>Flexible Payment Options! Shop with ease using our secure and convenient payment plans. Choose from multiple payment methods and enjoy a hassle-free checkout experience. Get the best dental products</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="order_col1">
                        <img src={img3} alt="img-fluid" />
                        <h6 className="py-2">Customer Support</h6>
                        <p>24/7 Customer Support! We're here for you! Whether you have questions, need assistance, or require expert guidance, our dedicated support team is just a call or message away. Your satisfaction is our priority</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderMethod
