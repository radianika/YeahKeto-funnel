import React, { PureComponent } from 'react';

const Logo = () => {
    return (
        <a href="index.html">
            <img className="logo" src="../static/assets/images/logo.png" alt="Logo"/>
        </a>
    )
};
const Menu = (props) => {
    return (
        <ul className="menu-list for-desk">
            <li><a href="home" className={props.currentPage === 'home' ? 'active' : ''}>HOME</a></li>
            <li><a href="products" className={props.currentPage === 'products' ? 'active' : ''}>PRODUCTS</a></li>
            <li><a href="faq" className={props.currentPage === 'faq' ? 'active' : ''}>FAQ'S</a></li>
            <li><a href="cart" className={props.currentPage === 'cart' ? 'active' : ''}>CART</a></li>
            <li><a href="contact" className={props.currentPage === 'contact' ? 'active' : ''}>CONTACT</a></li>
        </ul>
    )
}

class CommonHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.currentPage = props.currentPage;
    }

    render() {  
        return(
            <div className="top-sec">
                <div className="container">
                    <Logo />
                    <Menu home="HOME" currentPage={this.state.currentPage}/>
               </div>
            </div>
        )
    }    
}

export { CommonHeader };