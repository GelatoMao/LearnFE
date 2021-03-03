import React, { Component } from 'react'

export default class FormDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      mail: '',
      remark: '',
      province: 1
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      mail: e.target.value
    })
  }

  handleRemarkChange = (e) => {
    this.setState({
      remark: e.target.value
    })
  }

  handleSelectChange = (e) => {
    this.setState({
      province: e.target.value
    })
  }

  handleFootballChange = (e) => {
    // 选中为true 不选中为false
    console.log(e.target.checked);
  }
  render() {
    return (
      <div>
        <p>用户名是:{this.state.name}</p>
        <p>邮箱是:{this.state.mail}</p>
        {/* 在p中设置点击事件，实现双向绑定 */}
        <p onClick={() => {
          this.setState(preState => {
            return {
              remark: preState.remark + 1
            }
          })
        }}>备注是:{this.state.remark}</p>
        <p>省份是:{this.state.province}</p>
        <form>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="txtName">用户名：</label></td>
                <td><input type="text" id="txtName" name="Name" onChange={this.handleNameChange} /></td>
              </tr>
              <tr>
                <td><label htmlFor="txtMail">邮箱：</label></td>
                <td><input type="text" id="txtMail" name="Mail" onChange={this.handleEmailChange} /></td>
              </tr>
              <tr>
                <td><label htmlFor="txtRemark">备注：</label></td>
                <td>
                  <textarea id="txtRemark" name="Remark" value={this.state.remark} onChange={this.handleRemarkChange}>
                  </textarea>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="Province">省：</label></td>
                <td>
                  <select name="Province" id="Province" onChange={this.handleSelectChange} value={this.state.province}>
                    <option value="1">北京</option>
                    <option value="2">上海</option>
                    <option value="3">江苏</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="hobby">爱好：</label></td>
                <td>
                  <label>
                    篮球：<input type="checkbox" name="basketball" id="basketball" />
                  </label>
                  <br />
                  <label>
                    足球：<input type="checkbox" name="football" id="football" onChange={this.handleFootballChange} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}
