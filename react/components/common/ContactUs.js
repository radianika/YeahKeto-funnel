import React from 'react';
import validator from 'validator';
import { post } from 'helpers';
import { Modal, Spinner } from 'react/components/common';

class ContactUs extends React.Component {
  state = {
    contact: {
      question: '',
      name: '',
      email: '',
      phoneNumber: '',
    },
    error: {},
    submitting: null,
  };

  _handleChange = e => {
    const { name, value } = e.target;
    this.setState((ps, pp) => ({
      contact: {
        ...ps.contact,
        [name]: value,
      },
      error: {},
    }));
  };

  _submitForm = () => {
    const {
      question, name, email, phoneNumber,
    } = this.state.contact;
    const error = {
      hasError: false,
    };
    if (!name) {
      error.hasError = true;
      error.name = 'The first name is required.';
    }
    if (!email || !validator.isEmail(email)) {
      error.hasError = true;
      error.email = 'The value is not a valid email address.';
    }
    if (!phoneNumber) {
      error.hasError = true;
      error.phoneNumber = 'please enter the phone';
    }

    console.log(this.state);
    if (error.hasError) {
      this.setState({ error });
    } else {
      this.setState({ submitting: 'submitting' }, async () => {
        const apiResponse = await post('/v1/contact-us', {
          name,
          email,
          phone: phoneNumber,
          question,
        });
        this.setState({ submitting: 'success' });
      });
    }
  };

  closeModal = () => this.setState({ submitting: null });

  render() {
    const { error } = this.state;

    return (
      <div>
        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>contact us</span>
              <p className="comn-txt">
                Get in touch with American Science to source the best-quality of
                hemp extract dietary supplements on the market.
              </p>
            </div>
            <img
              src="/static/assets/images/bnr-prd.png"
              alt=""
              className="inner-prd for-desk"
            />
          </div>
        </div>
        <div className="container">
          <div className="cont-inner">
            <div className="cont-inner-lft">
              <p className="comn-txt">
                You can reach out to us via email or give us a call. Information
                about our location and business hours is provided below.{' '}
              </p>
              <ul className="cont-list">
                <li>
                  <span className="mtop1">American Science CBD</span>
                  <p>
                    Corporate: 835 Woodbine Road, Highland Park, Illinois, 60035
                  </p>
                  <p className="mtop1">
                    Returns: PO Box 9005, Seal Beach, CA 90740-9005
                  </p>
                </li>
                <li>
                  <span>Hour of Operation</span>
                  <p>
                    Mon-Fri Open 24 Hrs (PST)<br />Sat-Sun Open 24 Hrs (PST)
                  </p>
                </li>
                <li>
                  <span>Email</span>
                  <a href="#">support@americansciencecbd.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <p>(888) 313-8529</p>
                </li>
              </ul>
            </div>
            <div className="cont-inner-rgt">
              <p className="frm-hdg-txt">Send us A Message</p>
              <div className="frm-container">
                <form id="contact_main" className="fv-form fv-form-pure">
                  <div className="frmelements pure-control-group fv-has-feedback">
                    <label>
                      Name<span>*</span>
                    </label>
                    <div className="field">
                      <div className="icon-box">
                        <center>
                          <img
                            src="/static/assets/images/frmicon1.png"
                            alt=""
                          />
                        </center>
                      </div>
                      <input
                        type="text"
                        name="name"
                        className="ft-input"
                        required
                        autoComplete="off"
                        placeholder="First name"
                        data-fv-field="name"
                        onChange={this._handleChange}
                      />
                      <i
                        className="fv-control-feedback"
                        data-fv-icon-for="name"
                      />
                    </div>
                    {error.name && (
                      <small
                        className="fv-help-block"
                        data-fv-validator="notEmpty"
                        data-fv-for="name"
                        data-fv-result="NOT_VALIDATED"
                      >
                        {error.name}
                      </small>
                    )}
                  </div>
                  <div className="frmelements pure-control-group fv-has-feedback">
                    <label>
                      Email <span>*</span>{' '}
                    </label>
                    <div className="field">
                      <div className="icon-box">
                        <center>
                          <img
                            src="/static/assets/images/frmicon3.png"
                            alt=""
                          />
                        </center>
                      </div>
                      <input
                        name="email"
                        type="text"
                        placeholder="Example: email@somewhere.com"
                        className="ft-input"
                        required
                        autoComplete="off"
                        data-fv-field="email"
                        onChange={this._handleChange}
                      />
                      <i
                        className="fv-control-feedback"
                        data-fv-icon-for="email"
                      />
                    </div>
                    {error.email && (
                      <small
                        className="fv-help-block"
                        data-fv-validator="notEmpty"
                        data-fv-for="email"
                        data-fv-result="NOT_VALIDATED"
                      >
                        The email address is required.
                      </small>
                    )}
                    {error.email && (
                      <small
                        className="fv-help-block"
                        data-fv-validator="emailAddress"
                        data-fv-for="email"
                        data-fv-result="NOT_VALIDATED"
                      >
                        {error.email}
                      </small>
                    )}
                  </div>
                  <div className="frmelements pure-control-group fv-has-feedback">
                    <label>
                      Phone Number <span>*</span>
                    </label>
                    <div className="field">
                      <div className="icon-box">
                        <center>
                          <img
                            src="/static/assets/images/frmicon4.png"
                            alt=""
                          />
                        </center>
                      </div>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phone_number"
                        placeholder="Example: (123) 555-6789"
                        className="ft-input"
                        required
                        autoComplete="off"
                        data-fv-field="phoneNumber"
                        maxLength="14"
                        onChange={this._handleChange}
                      />
                      <i
                        className="fv-control-feedback"
                        data-fv-icon-for="phoneNumber"
                      />
                    </div>
                    {error.phoneNumber && (
                      <small
                        className="fv-help-block"
                        data-fv-validator="notEmpty"
                        data-fv-for="phoneNumber"
                        data-fv-result="NOT_VALIDATED"
                      >
                        {error.phoneNumber}
                      </small>
                    )}
                    {error.phoneNumber && (
                      <small
                        className="fv-help-block"
                        data-fv-validator="callback"
                        data-fv-for="phoneNumber"
                        data-fv-result="NOT_VALIDATED"
                      >
                        Not a valid 10-digit US phone number (must not include
                        spaces or special characters).
                      </small>
                    )}
                  </div>
                  <div className="frmelements pure-control-group">
                    <label>
                      My Question <span>*</span>
                    </label>
                    <div className="field no-icon comment-box">
                      <textarea
                        name="question"
                        id=""
                        placeholder="Comment"
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className="frmelements btn-element"
                    onClick={this._submitForm}
                  >
                    <img
                      src="/static/assets/images/submit-btn.png"
                      className="button-crt"
                      id="contact_submit"
                      alt=""
                    />
                  </div>
                </form>
                {this.state.submitting === 'success' && (
                  <Modal onClose={this.closeModal}>
                    <h3 className="modal-title">Submission successful!</h3>
                    <div className="modal-body">
                      <p>
                        We have received your message successfully.<br />Thank
                        you.
                      </p>
                      <br />
                      <br />
                    </div>
                  </Modal>
                )}
                {this.state.submitting === 'submitting' && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
