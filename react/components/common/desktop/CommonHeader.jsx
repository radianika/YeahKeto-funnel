import React, { PureComponent } from 'react';

const Menu = props => (
  <React.Fragment>
    <li>
      <a
        className={props.currentPage === 'home' ? 'active' : ''}
        onClick={() => {
          props.switchPages('home');
        }}
      >
        Home
      </a>
    </li>
    <li>
      <a
        className={props.currentPage === 'products' ? 'active' : ''}
        onClick={() => {
          props.switchPages('products');
        }}
      >
        Products
      </a>
    </li>
    <li>
      <a
        className={props.currentPage === 'faq' ? 'active' : ''}
        onClick={() => {
          props.switchPages('faq');
        }}
      >
        FAQ'S
      </a>
    </li>
    <li>
      <a
        className={props.currentPage === 'cart' ? 'active' : ''}
        onClick={() => {
          props.switchPages('cart');
        }}
      >
        Cart
      </a>
    </li>
    <li>
      <a
        className={props.currentPage === 'contact' ? 'active' : ''}
        onClick={() => {
          props.switchPages('contact');
        }}
      >
        Contact
      </a>
    </li>
  </React.Fragment>
);

class CommonHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      activeMobileMenu: false,
    };
  }

  toggleClass() {
    this.setState({ activeMobileMenu: !this.state.activeMobileMenu });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.activeMobileMenu ? 'overally ovrActv' : 'overally'
          }
          onClick={this.toggleClass}
        />
        <div className="top-sec">
          <div className="container">
            <a href="index.html">
              <img
                className="logo"
                src="../static/assets/images/logo.png"
                alt="Logo"
              />
            </a>
            <div className="light-menu for-mob for-tab">
              <div className="navwrp">
                <a
                  href="javascript:void(0)"
                  className="smobitrigger mob-mnu inrwrpr"
                  onClick={this.toggleClass}
                >
                  <img src="../static/assets/images/mob-menu-btn.png" alt="" />
                </a>
                <ul
                  className={
                    this.state.activeMobileMenu
                      ? 'mobimenu inrwrp mnuopn'
                      : 'mobimenu inrwrp'
                  }
                >
                  <a
                    href="javascript:void(0)"
                    className="mnuclose"
                    onClick={this.toggleClass}
                  >
                    X
                  </a>
                  <Menu />
                </ul>
              </div>
            </div>
            <ul className="menu-list for-desk">
              <Menu
                home="HOME"
                currentPage={this.props.currentPage}
                switchPages={this.props.switchPages}
              />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { CommonHeader };
