import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import Video from './Pages/Video'
import Work from './Pages/Work'
import './index.css'


const AppRouter = () => {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/Video">视频</Link>
            </li>
            <li>
              <Link to="/Work">职场</Link>
            </li>
          </ul>
        </div>

        <div className="rightMain">
          <Route path="/" exact component={Index} />
          <Route path="/Video" component={Video} />
          <Route path="/Work" component={Work} />
        </div>
      </div>
    </Router>
  );
};

export default AppRouter
