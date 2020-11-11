import React, {useState, useEffect} from "react"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id){
        // Loop through photo array to see if the `id` matches with the given images' `id`
        const updateArr = allPhotos.map(photo => {
            if(photo.id === id){
                return{
                    ...photo, // grab all properties of `photo` object
                    isFavorite: !photo.isFavorite // alter `isFavorite` property 
                }
            }
            return photo // simply return the photo if `id` doesn't match 
        })
        
        setAllPhotos(updateArr)
    }
    
    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id){
        // Return a new array consisting all the images except the images with matched `id`
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))    
    }
    
    function emptyCart(){
        setCartItems([])
    }

    function successMsg(){
        Swal.fire(
            'Congrats!',
            'You successfully placed an order!',
            'success'
        )
    }
    
    // console.log(cartItems)
    
    return(
        // Anything (State/Method) comes from Context needs to be passed via `value` prop to be used in other Components of our App.
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            addToCart, 
            removeFromCart, 
            emptyCart,
            successMsg, 
            cartItems}}
        > 
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}