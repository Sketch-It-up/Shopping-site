import React from 'react'
import {useContext} from "react"
import {Context} from './Context.js'


const CartItems = () => {
    const {cartItems, handleRemoveFromCart,handleCartQuantity} = useContext(Context);

    return (
        <>
            <div className="container">
                {cartItems.map((item)=>(
                    <div key={item.id} className="row gx-0">
                        <div className="col-md-3">
                            <img src={item.image} alt={item.title} className="img-fluid" />
                            
                        </div>
                    </div>
                ))}

            </div>  
        </>
  )
}

export default CartItems