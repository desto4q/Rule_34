import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from '../components/Nav'
import Home from '../pages/Home'
import PostID from '../pages/PostID'
function Router() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='post/:id' element={<PostID/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router