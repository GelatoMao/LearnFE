import React from "react";
import { Route, Link } from "react-router-dom";

import ReactPages from "./Video/ReactPages";
import GetUp from "./work/GetUp";
import Money from "./work/Money";

const Work = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/work/getup">GETUP</Link>
          </li>
          <li>
            <Link to="/work/money">money</Link>
          </li>
        </ul>
      </div>

      <div className="videoContent">
        <div>
          <h3>职场技能</h3>
        </div>
        <Route path="/work/getup" component={GetUp} />
        <Route path="/work/money" component={Money} />
      </div>
    </div>
  );
};

export default Work;
