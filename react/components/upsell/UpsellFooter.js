import React from 'react';
import { Footer } from 'react/components/common';

class UpsellFooter extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="clearall" />
        <a href="#" className="nothank">
          No thank you. I’ll pass on this huge savings now and realize I will
          never have this opportunity again.
        </a>
        <img
          src="/static/mobile/v2/images/secure-logos.png"
          alt=""
          className="secure-logos"
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export { UpsellFooter };
