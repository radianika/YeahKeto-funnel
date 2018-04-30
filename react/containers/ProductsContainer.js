import React from 'react';
import { Header, Footer } from 'react/components/common';

class ProductsContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export { ProductsContainer };
