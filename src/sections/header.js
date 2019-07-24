import React from 'react';

export default class Header extends React.PureComponent {

  toggleBar = () => {
    if (this.bar.classList.contains('openned')) {
      this.bar.classList.remove('openned');
      this.bar.classList.add('closed');
      this.nav.classList.remove('openned');
    } else if (this.bar.classList.contains('closed')) {
      this.bar.classList.remove('closed');
      this.bar.classList.add('openned');
      this.nav.classList.add('openned');
    }
  }

  render () {
    return (
      <header>
        <div className="constain header_wrapper">
          <div className="header_logo"></div>
          <div ref={el => this.bar = el} className="header_minibar closed" onClick={this.toggleBar}></div>
          <div ref={el => this.nav = el} className="header_nav">
            <ul className="mini_nav">
              <li className="active">产品展示</li>
              <li>食参建议</li>
              <li>关于牧葵</li>
              <li>淘宝店铺</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
  
}