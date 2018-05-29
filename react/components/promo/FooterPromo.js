import React from 'react';
import { Footer } from 'react/components/common';
import { getQueryString } from 'helpers';

class FooterPromo extends React.PureComponent {
  constructor() {
    super();
    this.footerRef = React.createRef();
    this.ctaRef = React.createRef();
    this.state = {
      ctaStyle: { position: 'fixed' },
    };
  }
  componentDidMount() {
    if (this.props.isMobile) {
      document.onscroll = () => {
        const footer = this.footerRef.current;
        const cta = this.ctaRef.current;
        const docViewTop = window.scrollY;
        const docViewBottom = docViewTop + window.innerHeight;
        const elemTop = footer.offsetTop;
        const elemBottom = cta.offsetHeight;
        if (
          elemTop >= docViewBottom + 20 ||
          elemBottom >= docViewBottom + 134
        ) {
          this.setState({ ctaStyle: { position: 'fixed' } });
        } else {
          this.setState({ ctaStyle: { position: 'relative' } });
        }
      };
    }
  }
  render() {
    return (
      <footer ref={this.footerRef}>
        {this.props.isMobile && (
          <div id="cta" ref={this.ctaRef} style={this.state.ctaStyle}>
            <a
              href={`/promo/mobile/shipping?${getQueryString()}`}
              className="shipping_redirect"
            >
              <i className="btn pulse sprite3 sprite-ship-btn" />
            </a>
          </div>
        )}
        <p className="clearall" />
        <div className="legal">
          <div className="ftr-txt">
            <Footer promo>
              <br /> * These statements have not been evaluated by the FDA. If
              you are pregnant, nursing, taking medications, or have a medical
              condition, consult your physician before using this product.
              Representations regarding the efficacy and safety of American
              Science CBD have not been evaluated by the Food and Drug
              Administration. The FDA only evaluates foods and drugs, not
              supplements like these products. These products are not intended
              to diagnose, prevent, treat, or cure any disease. &nbsp;
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/18728714"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-wiki-click"
              >
                CLICK HERE
              </a>
              &nbsp; to find evidence of a test, analysis, research, or study
              describing the ben efits, performance or efficacy of American
              Science CBD based on the expertise of relevant professionals.
            </Footer>
          </div>
        </div>
      </footer>
    );
  }
}
export { FooterPromo };
