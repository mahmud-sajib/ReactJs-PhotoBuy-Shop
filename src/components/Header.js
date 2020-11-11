import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    
    function headerCartIcon(){
        if(cartItems.length>0){
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> 
        }else{
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i> 
        }    
    }
    
    return (
        <div>
            <header>
                <h2><Link to="/">Pic Some</Link></h2>
                <Link to="/cart">{headerCartIcon()}</Link>
            </header>
            
            
        </div>
        
        
    )
}

export default Header
