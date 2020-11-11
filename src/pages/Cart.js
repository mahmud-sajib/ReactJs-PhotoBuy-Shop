import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


function Cart() {
    const [cartText, setCartText] = useState("Place Order") 
    const {cartItems, emptyCart, successMsg} = useContext(Context)
    
    const totalCost = cartItems.length * 5.99
    const displayCost = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function handleOrder(){
        setCartText("Ordering...")
        setTimeout(()=>{
            console.log("Order Placed!")
            setCartText("Place Order")
            successMsg()
            emptyCart()
        }, 3000)   
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {displayCost}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                <button onClick = {handleOrder}>{cartText}</button>
                </div> :
                <p>You have no item in the cart!</p> 
            }
           
        </main>
    )
}

export default Cart