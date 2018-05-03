import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';

class PromoThankyouMobile extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Thank You Mobile</h1>
        <hr />
        {JSON.stringify(this.props.order)}
      </React.Fragment>
    );
  }
}

PromoThankyouMobile = withRouter(PromoThankyouMobile);

function mapStateToProps(state) {
  return {
    order: state.order.order,
  };
}

PromoThankyouMobile = connect(mapStateToProps, { ...OrderActions })(
  PromoThankyouMobile,
);

export { PromoThankyouMobile };
