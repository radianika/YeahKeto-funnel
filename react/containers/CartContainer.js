import React from 'react';
import { Header, Footer } from 'react/components/common';
import { CartPage } from 'react/components/cart/Cart';

class CartContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CartPage />
        <Footer />
      </React.Fragment>
    );
  }
}

export { CartContainer };
