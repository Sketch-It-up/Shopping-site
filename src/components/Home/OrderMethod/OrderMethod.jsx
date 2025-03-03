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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, culpa possimus pariatur eum voluptatem vel facere quod laudantium autem eos incidunt doloremque quia unde nemo soluta blanditiis non odit animi!</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="order_col1">
                        <img src={img2} alt="img-fluid" />
                        <h6 className="py-2">Free Shipping</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, culpa possimus pariatur eum voluptatem vel facere quod laudantium autem eos incidunt doloremque quia unde nemo soluta blanditiis non odit animi!</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="order_col1">
                        <img src={img3} alt="img-fluid" />
                        <h6 className="py-2">Free Shipping</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, culpa possimus pariatur eum voluptatem vel facere quod laudantium autem eos incidunt doloremque quia unde nemo soluta blanditiis non odit animi!</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderMethod
