import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from '../components/Nav'
import Home from '../pages/Home'
function Router() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router