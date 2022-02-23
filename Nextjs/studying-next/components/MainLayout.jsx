import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function MainLayout({children}) {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}
