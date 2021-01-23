import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/homepage/homepage.component'
import Shop from './components/shop/shop.component'

function App() {
  return (
    <div>
    <Switch>
    <Route  exact path='/' component={ HomePage } />
    <Route  path='/shop' component={ Shop } />
    
    </Switch>
    </div>
  );
}

export default App;
