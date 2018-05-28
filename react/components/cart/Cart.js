import React, { PureComponent } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { Modal, Spinner } from 'react/components/common';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import { ChooseProductsForm } from './ChooseProductsForm';
import { CartFormContainer } from './CartForm';

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      showEmptyError: false,
    };
  }

  submit = values => {
    if (this.isProductsEmpty()) {
      this.setState({ showEmptyError: true });
      return;
    }
    const { products } = this.state;
    const orderPayload = {};
    Object.values(products).forEach(item => {
      orderPayload[`${item.label}id`] = item.product.id;
      orderPayload[`${item.label}qty`] = item.quantity;
    });
    values.order = { ...values.order, ...orderPayload };
    this.props.submitLeadsForm({
      values,
      nextUrl: '/thankyou',
      router: this.props.router,
    });
  };

  updateProducts = details => {
    const { index, product, quantity } = details;
    const products = { ...this.state.products };
    products[product.id] = {
      product,
      quantity,
      label: `product${index + 1}_`,
    };
    this.setState({ products, showEmptyError: false });
  };

  isProductsEmpty = () => {
    const { products } = this.state;
    const productSelected =
      Object.values(products).filter(product => product.quantity > 0).length >
      0;
    return !productSelected;
  };

  render() {
    const { showEmptyError } = this.state;
    return (
      <React.Fragment>
        <Head>
          <script type="text/javascript" src="/static/assets/js/geoSearch.js" />
        </Head>
        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>CART</span>
              <p className="comn-txt">
                Congratulations! You&#8217;re one step closer to better health.{' '}
                <br className="for-desk" />Use our secure checkout to complete
                your order.
              </p>
            </div>
            <img
              src="/static/assets/images/bnr-prd.png"
              alt=""
              className="inner-prd for-desk"
            />
          </div>
        </div>
        <div className="container">
          <div className="sec1-cartin">
            <table
              border="0"
              cellSpacing="0"
              cellPadding="0"
              width="100%"
              className="tbl1"
            >
              <tbody>
                <tr>
                  <td className="row1" style={{ paddingLeft: '8%' }}>
                    Product
                  </td>
                  <td className="row1 c2">QTY.</td>
                  <td className="row1 c3">Price</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <ChooseProductsForm
                      update={this.updateProducts}
                      cart={this.state.products}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {showEmptyError && (
              <Modal onClose={() => this.setState({ showEmptyError: false })}>
                No Product Error
                <div>Please select at least one product</div>
              </Modal>
            )}
            <div className="clearall">
              <div className="sec1crt-frm" id="select_cart_form">
                <div className="confidence">
                  <p className="txtconfi">Shop With Confidence</p>
                  <img
                    alt=""
                    src="/static/assets/images/confidence.jpg"
                    className="confi-img"
                  />
                </div>
                <CartFormContainer onSubmit={this.submit} />
              </div>
            </div>
          </div>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionId: state.auth.sessionId,
    submitStatus: state.order.submitLeadsFormStatus,
  };
}
const CartPage = connect(mapStateToProps, { ...OrderActions })(
  withRouter(Cart),
);

export { CartPage };
