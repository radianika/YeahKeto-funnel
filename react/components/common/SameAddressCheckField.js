import React from 'react';

const SameAddressCheckField = props => (
  <div className="sameas">
    Is your billing address the same as
    <br />your shipping address?<br />
    <span>
      <input className="chkbx" type="radio" {...props.input} />&nbsp;Yes
      <input className="chkbx" type="radio" {...props.input} />&nbsp;No
    </span>
  </div>
);

export { SameAddressCheckField };
