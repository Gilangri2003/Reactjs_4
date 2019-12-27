import React, {Component, Fragment} from 'react';
import '../style/style.css'
import Home from './Home/Home'
import Form from './event/event'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
            </div>
              <div className="menu">
              <ul>
                <li><Link to="/" className="li"> Home</Link></li>
                <li><Link to="/" className="li"> Blogs</Link></li>
                <li><Link to="/" className="li"> Kontak</Link></li>
                <li><Link to="/form" className="li"> Event</Link></li>
              </ul>
              </div>
          </div>
        </div>
            <Fragment>
              {/* Home */}
              <Route path="/" exact component={Home}/>
              <Route path="/form" component={Form}/>
            </Fragment>
      </div>
      </Router>
    )
  }
}
export default App;