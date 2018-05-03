import React from 'react';
import { Header, Footer } from 'react/components/common';
import { Product } from 'react/components/products';

class ProductsContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Product />
        <Footer />
      </React.Fragment>
    );
  }
}

export { ProductsContainer };
