import React, {useState,useEffect } from "react";
// import Data from './data'
import {useNavigate} from 'react-router-dom'


import axios from "axios"
 

const UserCompJs = () => {
    const navigate=useNavigate()

  const [posts, setPost]   = useState([]);

  // useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //         setPost(res.data)
  //         console.log(res.data)
  //         console.log(posts)
  //     });
  // },[]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`, {

    }).then((res) => {
      console.log("axios", res);
      setPost(res.data)
      // console.log("image",res.data.image)
    })
  }, []);
  const gotoAlbum=()=>{
      navigate('/AlbumPage')
  }
  
  
    return (
      <div>
      <h1>Users</h1>
        {
        posts.map(person => {
          return (
            
            <div className="site-container" >
              
              <div className='card' onClick={gotoAlbum}>
                  <div className='head'>
                  <div className='info'>  
                  <div className='name'><b>Name :- {person.name}</b></div>
                  <div className='location'>UserName :-{person.username}</div>
                  <div className='mail'>Email :-{person.email}</div>
                  <div className='mail'>City :-{person.address.city}</div>
                  
                  </div>
                  </div>
                  <div className="btn-al"><button>Album</button></div>
                </div>
               
            </div>
          )
        })
        
        }
        </div>
    )
  
}

export default UserCompJs