import React from 'react';

class MobileCardExpiryField extends React.PureComponent {
  updateMonth = e => {
    this.props.input.onChange({
      cardYear: this.props.input.value.cardYear,
      cardMonth: e.target.value,
    });
  };
  updateYear = e => {
    this.props.input.onChange({
      cardYear: e.target.value,
      cardMonth: this.props.input.value.cardMonth,
    });
  };

  render() {
    console.log(this.props);
    const { props } = this;
    const { value, onChange } = props.input;
    const hasError = props.meta.touched && props.meta.error;
    const valid = props.input.value && props.meta.valid;
    console.log(props.meta.error);
    return (
      <React.Fragment>
        <div
          className={`pure-control-group frmelmnts2 fv-has-feedback ${hasError &&
            'fv-has-error'} ${valid && 'fv-has-success'}`}
        >
          <label className="exp-label">
            Expiry Date<span>*</span>: <span>(MM/YY)</span>
          </label>
          <span>
            <select
              name="cardMonth"
              className="short"
              value={value.cardMonth}
              onChange={this.updateMonth}
            >
              <option value={null}>– –</option>
              {[...Array(12).keys()].map(month => (
                <option key={month} value={month + 1}>
                  {month + 1}
                </option>
              ))}
            </select>
          </span>
          <span>
            <select
              name="cardYear"
              className="short2"
              value={value.cardYear}
              onChange={this.updateYear}
            >
              <option value={null}>– –</option>
              {[18, 19, 20, 21, 22, 23, 24].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </span>
          <div className="clearall" />
          {hasError && (
            <small className="fv-help-block">{props.meta.error}</small>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export { MobileCardExpiryField };
