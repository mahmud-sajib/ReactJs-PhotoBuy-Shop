import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}){
    // const [hovered, setHovered] = useState(false)
    
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    const delIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line" 
    return(
        <div className="cart-item">
            <i 
                onClick={() => removeFromCart(item.id)} 
                className={delIcon}
                ref={ref}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem