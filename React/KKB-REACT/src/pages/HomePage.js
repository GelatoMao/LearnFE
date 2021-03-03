import React, { Component } from "react";
import Layout from './Layout'

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="商城首页">
        {/* <div>
          <h3>homepage</h3>
        </div> */}
        {
          {
            content: (
              <h3>homepage</h3>
            ),
            txt: '文本',
            btnClick: () => { console.log('hahha') }
          }
        }
      </Layout>
    );
  }
}
