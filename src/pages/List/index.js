import React, { Component, Fragment } from 'react';
class index extends Component {

  
  aaaa () {
    console.log(123);
    window.location.replace('/')
  }

  render() {
    return (
      <Fragment>
        2222
        <div onClick={this.aaaa}>尝试跳转主页</div>
      </Fragment>
    );
  }
}
export default index;