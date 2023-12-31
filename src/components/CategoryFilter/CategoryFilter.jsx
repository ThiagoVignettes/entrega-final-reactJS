import React from 'react'
import './CategoryFilter.css'
import {Link} from 'react-router-dom'
export const CategoryFilter = () => {
  
  return (
    <section className='container'>

      <h2 className='title'></h2>
      <ul className='category-container'>
        <Link to="/category/laptops"><li className='category'>Notebooks</li></Link>
        <Link to="/category/smartphones"> <li className='category'>Phones</li></Link>
        <Link to="/category/fragrances"> <li className='category'>Perfumes</li></Link>
        <Link to="/category/home-decoration"> <li className='category'>House</li></Link>
        <Link to="/category/skincare"> <li className='category'>Skincare</li></Link>
      </ul>

    </section>
  )
}
