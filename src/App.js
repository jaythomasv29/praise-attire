import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/homepage/homepage.component'
import Shop from './components/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // Method from library auth
    // Listen to authentication state changes
    // open subscription to firebase auth connection (must be closed/unsubscribed)
    // to avoid memory leads
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    // close subscription
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
      
      <Header currentUser={this.state.currentUser}/> {/* Pass current user state as prop*/}
      <Switch>
      <Route  exact path='/' component={ HomePage } />
      <Route  path='/shop' component={ Shop } />
      <Route  path='/signin' component={ SignInAndSignUpPage } />
      </Switch>
      </div>
    );
  }
}

export default App;
