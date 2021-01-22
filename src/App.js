import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/homepage/homepage.component'

const HatsPage = () => {
  return(
    <div>
    <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
    <Switch>
    <Route  exact path='/' component={ HomePage } />
    <Route  path='/hats' component={ HatsPage } />
    </Switch>
    </div>
  );
}

export default App;
