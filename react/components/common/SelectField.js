import React from 'react';

const SelectField = props => {
  const hasError = props.meta.touched && props.meta.error;
  const valid = props.input.value && props.meta.valid;
  return (
    <div
      className={`${props.containerClass} pure-control-group ${
        props.large ? 'frmelements' : 'frmElemts'
      } fv-has-feedback ${hasError && 'fv-has-error'} ${valid &&
        'fv-has-success'}`}
    >
      <label>
        {props.label}
        {props.required && <span>*</span>}
      </label>
      {!props.large ? (
        <select
          {...props.input}
          className="sprite5 sprite-select-arrow"
          disabled={props.disabled}
          style={props.inputStyle}
        >
          <option value={null}>{props.placeholder}</option>
          {Object.keys(props.options).map(val => (
            <option key={val} value={val}>
              {props.options[val]}
            </option>
          ))}
        </select>
      ) : (
        <div className={`field ${!props.icon && 'no-icon'}`}>
          {props.icon && (
            <div className="icon-box">
              <center>
                <img src={props.icon} />
              </center>
            </div>
          )}
          <select
            {...props.input}
            className="ft-input"
            disabled={props.disabled}
          >
            <option value={null}>{props.placeholder}</option>
            {Object.keys(props.options).map(val => (
              <option key={val} value={val}>
                {props.options[val]}
              </option>
            ))}
          </select>
        </div>
      )}

      <i
        style={{ display: hasError || valid }}
        className={`fv-control-feedback ${hasError && 'fa fa-times'} ${valid &&
          'fa fa-check'}`}
      />
      {hasError && <small className="fv-help-block">{props.meta.error}</small>}
    </div>
  );
};

export { SelectField };
