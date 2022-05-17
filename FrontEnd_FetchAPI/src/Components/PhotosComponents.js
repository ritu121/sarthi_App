import React, {useState,useEffect } from "react";
// import Data from './data'
import {useNavigate} from 'react-router-dom'


import axios from "axios"
function PhotosComponents() {
    const navigate=useNavigate()

    const [photos, setphotos]   = useState([]);
  
    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products')
    //     .then(res => {
    //         setphotos(res.data)
    //         console.log(res.data)
    //         console.log(photos)
    //     });
    //     console.log("phot",photos)
    // },[photos]);
    useEffect(() => {
      axios.get(`https://api.unsplash.com/photos/?client_id=Y34fpxUOr0-6RgYWtWmgbacEroch8ol0hWJTWVKN2bA`, {
  
      }).then((res) => {
        console.log("axios", res);
        setphotos(res.data)
        // console.log("image",res.data.image)
      })
    }, []);
   
    return (

        
        <div>
         
            <h1>Photos</h1>
         <button className="backbtn" onClick={()=>navigate("/AlbumPage")}> Back </button>
          
     
    {
        photos.map(photo => {
             return (
              
               <div className="site-container" >
                
                 <div className='card'>
                     <div className='head'>
                     <div className='info'>  
                     <div className='name'><b>ID :- {photo.id}</b></div>
                      <div ><img src={photo.urls.small} alt='img' /></div>
                     
                     </div>
                     </div>
                 
                   </div>
                 
               </div>
             )
           })
      } 
        </div>
    
      
    
  )

}

export default PhotosComponents