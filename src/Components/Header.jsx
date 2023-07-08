import React from 'react'
import '../Styles/Header.scss';
import { Link } from 'react-router-dom';
import letsGrowMore_logo from '../Assets/logo 2.png';



const Header = () => {
  return (
    <div className='navBar'>
      <div className='image-container'>
        <img src={letsGrowMore_logo} alt="" />
      </div>
      <div className='navBar_2'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>

    </div>
  )
}

export default Header