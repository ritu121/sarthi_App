import React from 'react'

import UserCompJs from './Components/UserComponents'
import AlbumComponent from './Components/AlbumComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import PhotoComp from './Components/PhotoComp'
import PhotosComponents from './Components/PhotosComponents'

function App() {
  return (
    <div>
    
        
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <UserCompJs/>}/>
        <Route exact path="/UserPage" element={ <UserCompJs/>}/>
        <Route exact path="/AlbumPage" element={<AlbumComponent/> }/>
        <Route exact path="/AlbumPage/Photo" element={<PhotosComponents/> }/>
        <Route exact path="/myphoto" element={<PhotoComp/> }/>
        
      </Routes>   
      </BrowserRouter>
      
    
    </div>
  )
}

export default App