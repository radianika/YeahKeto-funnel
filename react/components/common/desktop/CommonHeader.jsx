import React, { PureComponent } from 'react';

const Menu = props => (
  <React.Fragment>
    <li>
      <a href="home" className={props.currentPage === 'home' ? 'active' : ''}>
        Home
      </a>
    </li>
    <li>
      <a
        href="products"
        className={props.currentPage === 'products' ? 'active' : ''}
      >
        Products
      </a>
    </li>
    <li>
      <a href="faq" className={props.currentPage === 'faq' ? 'active' : ''}>
        FAQ'S
      </a>
    </li>
    <li>
      <a href="cart" className={props.currentPage === 'cart' ? 'active' : ''}>
        Cart
      </a>
    </li>
    <li>
      <a
        href="contact"
        className={props.currentPage === 'contact' ? 'active' : ''}
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
      currentPage: props.currentPage,
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
              <Menu home="HOME" currentPage={this.state.currentPage} />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { CommonHeader };
