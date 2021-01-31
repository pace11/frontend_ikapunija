import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

/**
 *
 * @param {string, <any>} props.children
 */
export default function Layout(props) {
  return (
    <div className="body-inner">
      <Navbar {...props} />
      {props.children}
      <Footer />
    </div>
  )
}
