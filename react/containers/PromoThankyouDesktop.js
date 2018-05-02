import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';

class PromoThankyouDesktop extends React.PureComponent {
  render() {
    return <h1>Thank You</h1>;
  }
}

PromoThankyouDesktop = withRouter(PromoThankyouDesktop);

function mapStateToProps() {
  return {};
}

PromoThankyouDesktop = connect(mapStateToProps, { ...OrderActions })(
  PromoThankyouDesktop,
);

export { PromoThankyouDesktop };
