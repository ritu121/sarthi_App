import React, {useState,useEffect } from "react";
// import Data from './data'
import {useNavigate} from 'react-router-dom'


import axios from "axios"


function AlbumComponent() {
    const navigate=useNavigate()

    const [albums, setalbums]   = useState([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            setalbums(res.data)
            console.log(res.data)
            console.log(albums)
        });
    },[]);
    const gotoPhotos=()=>{
        navigate("Photo")
    }
   
    
    
      return (

        
            <div>
            <h1>Albums</h1>
             <button className="backbtn" onClick={()=>navigate("/UserPage")}> Back </button>
              
         
        {
             albums.map(album => {
                 return (
                  
                   <div className="site-container" >
                    
                     <div className='card' onClick={gotoPhotos} >
                         <div className='head'>
                         <div className='info'>  
                         <div className='name'><b>ID :- {album.id}</b></div>
                         <div className='location'><b>Album Title :- </b>{album.title}</div>
                         </div>
                         </div>
                         <button className="btn-al">Photos</button>
                       </div>
                     
                   </div>
                 )
               })
          } 
            </div>
        
          
        
      )
    
  }
export default AlbumComponent