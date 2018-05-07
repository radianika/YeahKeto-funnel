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
          <Footer promo>
            <br /> * These statements have not been evaluated by the FDA. If you
            are pregnant, nursing, taking medications, or have a medical
            condition, consult your physician before using this product.
            Representations regarding the efficacy and safety of American
            Science CBD have not been evaluated by the Food and Drug
            Administration. The FDA only evaluates foods and drugs, not
            supplements like these products. These products are not intended to
            diagnose, prevent, treat, or cure any disease.
            <a
              href="https://www.ncbi.nlm.nih.gov/pubmed/18728714"
              target="_blank"
              rel="noopener noreferrer"
              className="legal-wiki-click"
            >
              CLICK HERE
            </a>
            to find evidence of a test, analysis, research, or study describing
            the benefits, performance or efficacy of American Science CBD based
            on the expertise of relevant professionals.
          </Footer>
        </p>
      </React.Fragment>
    );
  }
}

export { UpsellFooter };
