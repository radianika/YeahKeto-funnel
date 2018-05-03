import React from 'react';
import Head from 'next/head';
import { HomeContainer } from 'react/containers';
import { Products } from 'react/components/products';
import { Faq } from 'react/components/faq';
import { Cart } from 'react/components/cart';
import { Contact } from 'react/components/contact';
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
      // case 'faq':
      //   return <Faq />;
      case 'cart':
        return <Cart />;
      case 'contact':
        return <Contact />;
      default:
        return <HomeContainer />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/fonts.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-open-sans.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-raleway.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/style.css"
          />
        </Head>
        {this.switcher()}
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Index);
