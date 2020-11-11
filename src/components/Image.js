import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

// Passing `className`, `img` props from Photos component
function Image({className, img}){
    // const [hovered, setHovered] = useState(false)
    
    const [hovered, ref] = useHover()
    // Passing Context Provider value props
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)
    
    function heartIcon(){
        if(img.isFavorite){
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i> 
        } else if(hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i> 
        }
    }
   
    function cartIcon(){
        // Holds an array of boolean `true` & `false` value. `true` means - item is already in cart 
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        
        if(alreadyInCart){
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        }else if(hovered){
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }
    
    return(
       
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            { heartIcon() }
            { cartIcon() }
            
            
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}



export default Image