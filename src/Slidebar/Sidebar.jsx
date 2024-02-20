import React from 'react'
import '../Slidebar/Sidebar.css'
import { SlBasket } from "react-icons/sl";
import Category from '../Slidebar/Category/Category'
import Colors from '../Slidebar/Colors/Colors'
import Price from '../Slidebar/Price/Price'

const Sidebar = ({handleChange}) => {
  
  return (
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><SlBasket /></h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
  )
}

export default Sidebar