import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'

// import CreatorSignup from './pages/CreatorSignup';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage'
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><HomePage></HomePage></Route>
          <Route path='/articles'><ArticlesPage></ArticlesPage></Route>
          <Route path='/team'><TeamPage></TeamPage></Route>
          <Route path='/contact'><ContactPage></ContactPage></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
