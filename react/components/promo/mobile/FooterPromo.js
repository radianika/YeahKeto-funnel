import React from 'react';
import { getCurrentYear } from 'helpers';
import Link from 'next/link';

class FooterPromo extends React.PureComponent {
  constructor() {
    super();
    this.footerRef = React.createRef();
  }
  componentDidMount() {
    document.onscroll = () => {
      const $elem = $('footer');
      const $window = $(window);
      const docViewTop = $window.scrollTop();
      const docViewBottom = docViewTop + $window.height();
      const elemTop = $elem.offset().top;
      const elemBottom = elemTop + $elem.height();
      if (
        elemTop >= docViewBottom + 20 ||
        elemTop + $('#cta').height() >= docViewBottom + 134
      ) {
        $('#cta').css('position', 'fixed');
      } else {
        $('#cta').css({
          position: 'relative',
        });
      }
    };
  }
  render() {
    return (
      <footer>
        <div id="cta">
          <Link href="/shipping">
            <a className="shipping_redirect">
              <i className="btn pulse sprite3 sprite-ship-btn" />
            </a>
          </Link>
        </div>
        <p className="clearall" />
        <div className="legal">
          <p className="ftr-txt">
            <a href="#" className="popup-link" data-html="terms-and-conditions">
              Terms and Conditions
            </a>&nbsp;|&nbsp;
            <a href="#" className="popup-link" data-html="privacy-policy">
              Privacy Policy
            </a>&nbsp;|&nbsp;
            <a href="#" className="popup-link" data-html="customer-care">
              Customer Care
            </a>
            <br />
            <br /> American Science CBD LTD
            <br /> * These statements have not been evaluated by the FDA. If you
            are pregnant, nursing, taking medications, or have a medical
            condition, consult your physician before using this product.
            Representations regarding the efficacy and safety of American
            Science CBD & American Science Nootripic Complex have not been
            evaluated by the Food and Drug Administration. The FDA only
            evaluates foods and drugs, not supplements like these products.
            These products are not intended to diagnose, prevent, treat, or cure
            any disease.
            <a
              href="https://www.ncbi.nlm.nih.gov/pubmed/18728714"
              target="_blank"
              rel="noopener noreferrer"
              className="legal-wiki-click"
            >
              CLICK HERE
            </a>
            to find evidence of a test, analysis, research, or study describing
            the benefits, performance or efficacy of American Science CBD &
            American Science Nootripic Complex based on the expertise of
            relevant professionals.
            <br />
            <br />
            <span>
              Copyright {getCurrentYear()} © All Rights Reserved - American
              Science CBD
            </span>
          </p>
        </div>
      </footer>
    );
  }
}
export { FooterPromo };
