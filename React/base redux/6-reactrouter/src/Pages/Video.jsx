import React from "react";
import { Route, Link } from "react-router-dom";

import ReactPages from "./Video/ReactPages";
import Vue from "./Video/Vue";
import Flutter from "./Video/Flutter";

const Video=()=>{
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/Video/reactpage">React教程</Link></li>
          <li><Link to="/Video/flutter">Flutter教程</Link></li>
          <li><Link to="/Video/vue/">Vue教程</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/Video/reactpage/" component={ReactPages}/>
        <Route path="/Video/flutter/" component={Flutter}/>
        <Route path="/Video/vue/" component={Vue}/>
      </div>
    </div>
  )
}

export default Video