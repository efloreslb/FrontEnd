import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import CreatePostsPageForm from './components/CreatePostsPageForm';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg mt-4">
          <div className="container d-flex justify-content-between p-2">
            <h1><NavLink exact to='/'>Wedding Planner</NavLink></h1>
            <ul className="navbar-nav float-right">
              <li><a href="/#aboutus" className="p-3">About Us</a></li>
              <li><NavLink exact to='/postpage' className="p-3">Explore Ideas</NavLink></li>
              <li><NavLink exact to='/login' className="p-3">Login</NavLink></li>
              <li><NavLink to='/register' className="p-3">Register</NavLink></li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={LandingPage} />
        <Route path="/postpage" component={PostPage}  />
        <Route exact path="/register" component={Register}  />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path="/protected" component={CreatePostsPageForm} />
      </div>
    </Router>
  );
}

export default App;
