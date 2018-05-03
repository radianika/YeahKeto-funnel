import React from 'react';
import { Header, Footer } from 'react/components/common';
import { Products } from 'react/components/products';

class ProductsContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Products />
        <Footer />
      </React.Fragment>
    );
  }
}

export { ProductsContainer };
