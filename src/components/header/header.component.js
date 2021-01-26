import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg' 
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
export default function Header({ currentUser }) {
  //navbar (header) with various links  
  return (
    <div className='header'>
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {/** Ternary operator to load either signin or signout based on
      currentUser */}
      {
        currentUser ?   
        <div 
          className="option" 
          to="/signin"
          onClick={ () => auth.signOut() }
        >
          SIGNOUT
        </div> 
        : 
        <Link className="option" to="/signin">
          SIGNIN / REGISTER
        </Link> 

      }
      </div>
    </div>
  )
}
