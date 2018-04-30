import React from 'react';

const FooterPromo = () => (
  <React.Fragment>
    <div id="cta">
      <a className="shipping_redirect" href="shipping.html">
        <i className="btn pulse sprite3 sprite-ship-btn" />
      </a>
    </div>
    <p className="clearall" />
    <div className="legal">
      <p className="ftr-txt">
        <a href="#" className="popup-link" data-html="terms-and-conditions">
          Terms and Conditions{' '}
        </a>&nbsp;|&nbsp;{' '}
        <a href="#" className="popup-link" data-html="privacy-policy">
          Privacy Policy
        </a>&nbsp;|&nbsp;{' '}
        <a href="#" className="popup-link" data-html="customer-care">
          {' '}
          Customer Care{' '}
        </a>
        <br />
        <br /> American Science CBD LTD
        <br /> * These statements have not been evaluated by the FDA. If you are
        pregnant, nursing, taking medications, or have a medical condition,
        consult your physician before using this product. Representations
        regarding the efficacy and safety of American Science CBD & American
        Science Nootripic Complex have not been evaluated by the Food and Drug
        Administration. The FDA only evaluates foods and drugs, not supplements
        like these products. These products are not intended to diagnose,
        prevent, treat, or cure any disease.{' '}
        <a
          href="https://www.ncbi.nlm.nih.gov/pubmed/18728714"
          target="_blank"
          className="legal-wiki-click"
          rel="noopener noreferrer"
        >
          CLICK HERE
        </a>{' '}
        to find evidence of a test, analysis, research, or study describing the
        benefits, performance or efficacy of American Science CBD & American
        Science Nootripic Complex based on the expertise of relevant
        professionals.
        <br />
        <br />
        <span>
          Copyright{' '}
          <script type="text/javascript">
            var year = new Date();document.write(year.getFullYear());
          </script>
          © All Rights Reserved - American Science CBD
        </span>
      </p>
    </div>
  </React.Fragment>
);
export { FooterPromo };
