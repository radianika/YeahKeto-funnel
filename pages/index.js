import React from 'react';
import Head from 'next/head';
import 'styles/home-desktop.scss';
import { Home } from 'react/components/home';
import { Products } from 'react/components/products';
import { Faq } from 'react/components/faq';
import { Cart } from 'react/components/cart';
import { Contact } from 'react/components/contact';
import { CommonHeader, CommonFooter } from 'react/components/common/desktop';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
    this.switchPages = this.switchPages.bind(this);
  }

  switchPages(page) {
    this.setState({
      currentPage: page,
    });
  }

  switcher() {
    switch (this.state.currentPage) {
      case 'products':
        return <Products switcher={this.switchPages} />;
      case 'faq':
        return <Faq />;
      case 'cart':
        return <Cart />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
        </Head>
        <CommonHeader
          currentPage={this.state.currentPage}
          switchPages={this.switchPages}
        />
        {this.switcher()}
        <CommonFooter />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Index);
