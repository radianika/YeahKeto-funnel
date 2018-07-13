import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  stateslist,
  shippingFormValidator,
  normalizePhone,
  normalizePostalCode,
} from 'helpers';
import { TextField, SelectField, AddressField } from 'react/components/common';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

class PromoShippingFormDesktopComponent extends React.PureComponent {
  postActionTracker = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const event1 = {
      name: 'rush-my-order-form-click',
      value_string: 'rush-my-order-form-click',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    const event2 = {
      name: 'rush-my-order-shipping-page-color-test',
      value_string: 'rush-my-order-shipping-page-color-test',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    const event3 = {
      name: 'desktop-hp-text1-test-rush-my-order',
      value_string: 'desktop-hp-text1-test-rush-my-order',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    const event4 = {
      name: 'desktop-hp-text2-test-rush-my-order',
      value_string: 'desktop-hp-text2-test-rush-my-order',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    const event5 = {
      name: 'desktop-hp-top-module-symbol1-test-rush-my-order',
      value_string: 'desktop-hp-top-module-symbol1-test-rush-my-order',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    const event6 = {
      name: 'desktop-hp-last-module-picture-test-rush-my-order',
      value_string: 'desktop-hp-last-module-picture-test-rush-my-order',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo desktop',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };

    axios.post('/multicampaign-abtasty', {
      312492: {
        ...event1,
        action: 'action_tracking_event',
      },
      313763: {
        ...event2,
        action: 'action_tracking_event',
      },
      314234: {
        ...event3,
        action: 'action_tracking_event',
      },
      314363: {
        ...event4,
        action: 'action_tracking_event',
      },
      314334: {
        ...event5,
        action: 'action_tracking_event',
      },
      314691: {
        ...event6,
        action: 'action_tracking_event',
      },
    });
  };

  render() {
    const { props } = this;
    return (
      <form
        id="form-contact"
        onSubmit={e => {
          this.postActionTracker();
          props.handleSubmit(e);
        }}
        className="pure-form pure-form-aligned fv-form fv-form-pure"
      >
        <button
          id={props.id}
          type="submit"
          className="fv-hidden-submit"
          style={{ display: 'none', width: '0px', height: '0px' }}
        />
        <div className="sldrtxt" id="fades">
          <div className="aggettivi">
            <div className="text-animated-one">
              <i className="sprite2 sprite-eye" /> 13 others are viewing this
              offer right now!
            </div>
            <div className="text-animated-two">
              <i className="sprite2 sprite-eye" /> 25 people purchased this in
              the last hour
            </div>
          </div>
        </div>
        <div className="frmhdr sprite2 sprite-frmhdr">
          <p className="frmhd-txt">
            TELL US WHERE TO SEND
            <br /> <span>Your Bottle Today!</span>
          </p>
        </div>
        <Field
          component={TextField}
          name="FirstName"
          label="First Name*:"
          placeholder="First name"
        />
        <Field
          component={TextField}
          name="LastName"
          label="Last Name*:"
          placeholder="Last name"
        />
        <Field
          component={AddressField}
          name="Address1"
          label="Address Line 1*:"
          placeholder="Street and number, P.O. box, c/o."
          changeField={this.props.change}
        />
        <Field
          component={TextField}
          name="Address2"
          label="Address Line 2:"
          placeholder="Apartment, suite, unit, building, floor, etc."
        />
        <Field
          component={TextField}
          name="City"
          label="City*:"
          placeholder="Your City"
        />
        <Field
          component={SelectField}
          name="State"
          label="State*:"
          placeholder="State"
          options={stateslist}
        />
        <Field
          component={TextField}
          name="ZipCode"
          label="Zip Code*:"
          placeholder="Zip Code"
          normalize={normalizePostalCode}
        />
        <Field
          component={TextField}
          name="Phone"
          label="Phone*:"
          placeholder="Example: (123) 555-6789"
          normalize={normalizePhone}
        />
        <Field
          component={TextField}
          name="Email"
          label="Email*:"
          placeholder="Example: email@somewhere.com"
        />
        <div className="clearall" />
        <button
          id="rush-my-order-form-click"
          onClick={this.showErrorModal}
          className={`submit pulse sprite5 sprite5-${
            this.props.abtastyParams.campaignMaps['313763']
          } sprite-submit`}
        />
        <div className="clearall" />
        <div>
          <i className="s1logos sprite3 sprite-s1logos" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = reduxState => {
  if (reduxState.order) {
    return {
      placeOrderStatus: reduxState.order.placeOrderStatus,
      abtastyParams: reduxState.auth.abtastyParams,
    };
  }
  return {};
};

const PromoShippingFormDesktop = connect(mapStateToProps)(
  reduxForm({
    form: 'PromoContact',
    validate: shippingFormValidator,
  })(PromoShippingFormDesktopComponent),
);

export { PromoShippingFormDesktop };
