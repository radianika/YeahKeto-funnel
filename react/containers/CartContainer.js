import React from 'react';
import { Header, Footer } from 'react/components/common';
import { Cart } from 'react/components/cart';

class CartContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Cart />
        <Footer />
      </React.Fragment>
    );
  }
}

export { CartContainer };
