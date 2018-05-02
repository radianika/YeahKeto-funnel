import React from 'react';
import { Field } from 'redux-form';
import { InlineSelectField } from './InlineSelectField';

const CardExpiryField = props => (
  <React.Fragment>
    <div className="frmElemts exp-label">
      <label>&nbsp;</label>
      <label>(MM/YY)</label>
      <div
        className="pure-control-group frmElemts frm-elem-expiry hideIcon fv-has-feedback"
        style={{ marginTop: 0 }}
      >
        <label>
          Expiry Date<span>*</span>:
        </label>
        <Field
          component={InlineSelectField}
          name="month"
          className="short"
          placeholder="MM"
          options={[]}
          required
          inline
        />
        <Field
          component={InlineSelectField}
          name="year"
          className="short"
          placeholder="YY"
          options={[]}
          inline
        />
      </div>
    </div>
  </React.Fragment>
);

export { CardExpiryField };
