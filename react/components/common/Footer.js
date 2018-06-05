import React, { PureComponent } from 'react';
import { Modal } from './Modal';
import { CustomerCare } from './CustomerCare';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsAndConditions } from './TermsAndConditions';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: null,
    };
  }

  closeModal = () => this.setState({ modal: null });
  closeModalImmediately = () => this.setState({ modal: null });

  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="contentWrap">
              <p className="ftrtxt">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    this.setState({ modal: 'footer_terms' });
                  }}
                >
                  Terms and Conditions
                </a>&nbsp;|&nbsp;
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    this.setState({ modal: 'footer_privacy' });
                  }}
                >
                  Privacy Policy
                </a>&nbsp;|&nbsp;
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    this.setState({ modal: 'footer_customer' });
                  }}
                >
                  Customer Care
                </a>
              </p>

              {!this.props.noLogo && (
                <p className="ftrtxt w40 mtop2">
                  {!this.props.promo ? (
                    <img
                      src="/static/assets/images/mc-v-a.png"
                      alt="We accept VISA, MasterCard"
                    />
                  ) : (
                    <React.Fragment>
                      <div className="cards">
                        <span className="card-amex">
                          <img src="/static/amex-card.png" alt="Amex" />
                        </span>
                        <span className="card-visa">
                          <img src="/static/visa-card.png" alt="Visa" />
                        </span>
                        <span className="card-mastercard">
                          <img
                            src="/static/mastercard-card.png"
                            alt="Mastercard"
                          />
                        </span>
                      </div>
                    </React.Fragment>
                  )}
                </p>
              )}

              {this.props.children || (
                <p className="ftrtxt just">
                  <React.Fragment>
                    <br />This product is not for use by or sale to persons
                    under the age of 18. This product should be used only as
                    directed on the label. It should not be used if you are
                    pregnant or nursing. Consult with a physician before use if
                    you have a serious medical condition or use prescription
                    medications. A {"Doctor's"} advice should be sought before
                    using this and any supplemental dietary product. All
                    trademarks and copyrights are property of their respective
                    owners and are not affiliated with nor do they endorse this
                    product. These statements have not been evaluated by the
                    FDA. This product is not intended to diagnose, treat, cure
                    or prevent any disease. Individual weight loss results will
                    vary. By using this site, you agree to follow the Privacy
                    Policy and all Terms & Conditions printed on this site. Void
                    Where Prohibited by Law.
                  </React.Fragment>
                </p>
              )}
              <p className="ftrtxt mtop2">
                Copyright 2018 © All Rights Reserved - American Science CBD
              </p>
            </div>
          </div>
        </div>
        {this.state.modal === 'footer_terms' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Terms and Conditions</React.Fragment>
            <TermsAndConditions />
          </Modal>
        )}
        {this.state.modal === 'footer_privacy' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Privacy Policy</React.Fragment>
            <PrivacyPolicy />
          </Modal>
        )}
        {this.state.modal === 'footer_customer' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Customer Care</React.Fragment>
            <CustomerCare />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export { Footer };
