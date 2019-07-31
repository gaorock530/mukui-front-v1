import React from 'react';

export default class S4 extends React.PureComponent {

  render () {
    return (
      <div className="s4-wrapper">
        <div className="s4-boxes">
          <div className="s4-box">
            <img src="/assets/section/4/index1.png" alt="" />
          </div>
          <div className="s4-box">
            <img src="/assets/section/4/index2.png" alt="" />
          </div>
          <div className="s4-box">
            <img src="/assets/section/4/index3.png" alt="" />
          </div>
          <div className="s4-box">
            <img src="/assets/section/4/index4.png" alt="" />
          </div>
          <div className="s4-box">
            <img src="/assets/section/4/index5.png" alt="" />
          </div>
        </div>
        <div className="s4-text">
          <p>没什么好谦虚的</p>
          <p>我们不但高级而且是多数人都可以享受的高级</p>
          <h3>The advanced feelings that the most people get</h3>
        </div>
        <img src="/assets/section/4/back.jpg" alt="" className="img"></img>
      </div>
    )
  }
  
}