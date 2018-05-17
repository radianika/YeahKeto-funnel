import React from 'react';
import Link from 'next/link';
import { Footer } from 'react/components/common';

class UpsellFooter extends React.PureComponent {
  render() {
    const { orderId } = this.props;
    return (
      <React.Fragment>
        <div className="clearall" />
        <Link href={`/promo/desktop/upsell-2?orderId=${orderId}`}>
          <a className="nothank">
            No thanks. I understand that this is my only opportunity to get
            access to this special offer, and I’m okay with missing out.
            Instead, if I’m blown away by the results I get using CBD HEMP OIL,
            like so many thousands of folks before me, I’ll just re-order at
            $149 per bottle in the future. I’ll pass on this chance forever.
          </a>
        </Link>
        <div className="clearall" />
        {/* <img
          src="/static/mobile/images/secure-logos.png"
          alt=""
          className="secure-logos"
        /> */}
        <div className="secure-logo-container" style={{ textAlign: 'center' }}>
          <img
            src="/static/assets/images/badges/ext.jpeg"
            alt=""
            className="secure-logos trusty"
            width="100px"
            height="50px"
          />
          <img
            src="/static/assets/images/badges/imgnortonsiteseal.png"
            alt=""
            className="secure-logos nortan"
            width="100px"
            height="50px"
          />
          <img
            src="/static/assets/images/badges/mcafee.png"
            alt=""
            className="secure-logos mcafee"
            width="125px"
            height="45px"
          />
        </div>
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
