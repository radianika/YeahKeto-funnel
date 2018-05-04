import React from 'react';
import idx from 'idx';
import { connect } from 'react-redux';
import { post, setAuthHeaders } from 'helpers';

function setCookie(cname, cvalue) {
  document.cookie = `${cname}=${cvalue};expires=36000;path=/`;
}

function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

class PromoSession extends React.PureComponent {
  async componentDidMount() {
    const existingCookie = getCookie('ascbd_promo_session');
    setAuthHeaders(this.props.sessionId);
    if (!existingCookie) {
      setAuthHeaders(this.props.sessionId);
      const apiResponse = await post('/v1/konnektive/session', {
        pageType: this.props.pageType,
        requestUri: window.location.href,
      });
      const ascbd_promo_session = idx(
        apiResponse,
        _ => _.response.data.data.sessionId,
      );
      setCookie('ascbd_promo_session', ascbd_promo_session);
    } else {
      setAuthHeaders(this.props.sessionId);
      post('/v1/konnektive/session', {
        pageType: this.props.pageType,
        sessionId: existingCookie,
      });
    }
  }
  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    sessionId: state.auth.sessionId,
  };
}

PromoSession = connect(mapStateToProps, {})(PromoSession);

export { PromoSession };
