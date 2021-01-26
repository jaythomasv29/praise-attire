import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  /* conditionally render css style to display different button styling using 
   CSS class */
   console.log(children)
 return (  
  <button 
  className={ `${isGoogleSignIn ? 'google-sign-in': '' } custom-button ` } 
  { ...otherProps }
  >
    { children }
  </button>

 )
}

export default CustomButton
