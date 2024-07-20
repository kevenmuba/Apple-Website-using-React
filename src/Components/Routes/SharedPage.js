import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
function SharedPage() {
  return (
    <>
      <Nav/> 
      <Outlet/>
      <Footer/>
    </>
  )
}

export default SharedPage
