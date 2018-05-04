import React from 'react';

const TextField = props => {
  const hasError = props.meta.touched && props.meta.error;
  const valid = props.meta.touched && props.meta.valid;
  return (
    <div
      className={`${
        props.containerClass
      } pure-control-group frmElemts fv-has-feedback ${hasError &&
        'fv-has-error'} ${valid && 'fv-has-success'}`}
    >
      <label>
        {props.label}
        {props.required && <span>*</span>}:
      </label>
      <input
        className={props.className}
        placeholder={props.placeholder}
        autoFocus={props.autofocus}
        type={props.type}
        {...props.input}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
      <i
        style={{ display: hasError || valid }}
        className={`fv-control-feedback ${hasError && 'fa fa-times'} ${valid &&
          'fa fa-check'}`}
      />
      {hasError && <small className="fv-help-block">{props.meta.error}</small>}
    </div>
  );
};

export { TextField };
