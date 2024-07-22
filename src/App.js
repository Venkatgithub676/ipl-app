import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
// import TeamCard from './components/TeamCard'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="" component={TeamMatches} /> */}
    </Switch>
  </div>
)

export default App
