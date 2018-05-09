import React from 'react';
import { Footer } from 'react/components/common';

class UpsellFooter extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="clearall" />
        <img
          src="/static/mobile/images/secure-logos.png"
          alt=""
          className="secure-logos"
        />
        <p className="ftrtxt">
          <Footer noLogo>
            <br />
          </Footer>
        </p>
      </React.Fragment>
    );
  }
}

export { UpsellFooter };
