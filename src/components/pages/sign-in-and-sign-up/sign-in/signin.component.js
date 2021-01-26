import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signin.styles.scss'

// import SigninWithGoogle from firebase oauth
import { signInWithGoogle } from '../../../../firebase/firebase.utils'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  // on submit method that handles the submit
  handleSubmit = event => {
    // prevent the default event to control what to do with submission
    event.preventDefault();
  }

  // handleChange to event listen and get the value from event.target and setState
  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value})
  }
    
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>

        {/** Form here */}

        <form onSubmit={ this.handleSubmit}>
          <FormInput 
            name="email" 
            label="email"
            type="email" 
            value={ this.state.email } 
            handleChange={this.handleChange}
            required 
          />
          

          <FormInput 
            name="password" 
            label="password"
            type="password" 
            value= { this.state.password } 
            handleChange={this.handleChange}
            required 
          />
          
          <div className="buttons">
            <CustomButton 
            type="submit" 
            value="Submit"
            > 
              Sign In 
            </CustomButton>
            <CustomButton 
              onClick={ signInWithGoogle } 
              isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
 