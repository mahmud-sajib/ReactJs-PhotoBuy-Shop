import React, {useContext} from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"


function Photos() {
    // Getting the array of all photos from context
    const {allPhotos} = useContext(Context)
    
    // Creating Image component and mapping over all photos
    const imageElement = allPhotos.map((img, i) => (
        // Passing entiner image object(id, url,isfavorited) through `img` prop
        <Image key={img.id} img={img} className={getClass(i)} /> //getClass(i) is a JS function that assigns 'big' class to every 5th image element and 'wide' class to every 6th image element  
    ))
    
    return (
        <main className="photos">
            {imageElement}
        </main>
    )
}

export default Photos