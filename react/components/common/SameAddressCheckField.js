import React from 'react';

const SameAddressCheckField = props => (
  <div className="sameas">
    Is your billing address the same as
    <br />your shipping address?<br />
    <span>
      <input
        checked={props.input.value === 'Yes'}
        className="chkbx"
        type="radio"
        value="Yes"
        {...props.input}
      />&nbsp;Yes
      <input
        checked={props.input.value === 'No'}
        className="chkbx"
        type="radio"
        value="No"
        {...props.input}
      />&nbsp;No
    </span>
  </div>
);

export { SameAddressCheckField };
