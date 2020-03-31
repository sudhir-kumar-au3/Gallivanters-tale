import React ,{Suspense} from 'react';
import './assets/App.scss';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Loading from './components/_Loading/Loading'
import ArticlesPage from './pages/ArticlesPage'
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage'
import CreatorSignup from './pages/CreatorSignup'
import CreatorLogin from './pages/CreatorLogin'
import CreatorBlog from './pages/CreateBlog'
import SinglePostPage from './pages/SinglePostPage';
const HomePage = React.lazy(() => import('./pages/HomePage')) ;

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Suspense fallback = {<Loading></Loading>}>
              <HomePage></HomePage>
            </Suspense>
          </Route>
          <Route exact path='/blogs'><ArticlesPage></ArticlesPage></Route>
          <Route path='/blogs/:blogId'><SinglePostPage></SinglePostPage></Route>
          <Route path='/team'><TeamPage></TeamPage></Route>
          <Route path='/contact'><ContactPage></ContactPage></Route>
          <Route path = '/signup'><CreatorSignup></CreatorSignup></Route>
          <Route path ='/login'><CreatorLogin></CreatorLogin></Route>
          <Route path ='/author'><CreatorBlog></CreatorBlog></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
