import React from 'react';
import { Header, Footer } from 'react/components/common';
import { CartPageContainer } from 'react/components/cart/Cart';

class CartContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CartPageContainer />
        <Footer />
      </React.Fragment>
    );
  }
}

export { CartContainer };
