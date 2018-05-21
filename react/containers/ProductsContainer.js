import React from 'react';
import { Header, Footer } from 'react/components/common';
import { Product } from 'react/components/products';

class ProductsContainer extends React.PureComponent {
  render() {
    const { product } = this.props.url.query;
    console.log(product);
    return (
      <React.Fragment>
        <Header />
        <Product product={product} />
        <Footer />
      </React.Fragment>
    );
  }
}

export { ProductsContainer };
