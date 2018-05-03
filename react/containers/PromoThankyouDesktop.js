import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';

class PromoThankyouDesktop extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Thank You Desktop</h1>
        <hr />
        {JSON.stringify(this.props.order)}
      </React.Fragment>
    );
  }
}

PromoThankyouDesktop = withRouter(PromoThankyouDesktop);

function mapStateToProps(state) {
  return {
    order: state.order.order,
  };
}

PromoThankyouDesktop = connect(mapStateToProps, { ...OrderActions })(
  PromoThankyouDesktop,
);

export { PromoThankyouDesktop };
