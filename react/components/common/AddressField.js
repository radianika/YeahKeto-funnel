import React from 'react';
import idx from 'idx';

class AddressField extends React.PureComponent {
  constructor() {
    super();
    this.autocompleteRef = React.createRef();
  }

  componentDidMount() {
    const placesScript = document.createElement('script');
    placesScript.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBk1_Ehzo1zD1s5wojBRHNCBhrsU9N7Wb0&libraries=places';
    placesScript.async = true;
    placesScript.addEventListener('load', () => {
      this.initialiseAutoComplete();
    });
    document.body.appendChild(placesScript);
  }

  fillInAddress = () => {
    const place = this.autocomplete.getPlace();
    let city = place.address_components.find(
      c => c.types.indexOf('locality') >= 0,
    );
    city = idx(city, _ => _.long_name);
    let state = place.address_components.find(
      c => c.types.indexOf('administrative_area_level_1') >= 0,
    );
    state = idx(state, _ => _.short_name);
    let postalCode = place.address_components.find(
      c => c.types.indexOf('postal_code') >= 0,
    );
    postalCode = idx(postalCode, _ => _.short_name);
    setImmediate(() => {
      this.props.changeField(
        'address',
        this.autocompleteRef.current.value.split(',')[0],
      );
      this.props.changeField('city', city);
      this.props.changeField('state', state);
      this.props.changeField('postalCode', postalCode);
    });
  };

  initialiseAutoComplete = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteRef.current,
      {
        types: ['geocode'],
      },
    );
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  };

  geolocate = prefix => {
    if (prefix) {
      scopePrefix = prefix;
    } else {
      scopePrefix = '';
    }
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        this.autocomplete.setBounds(circle.getBounds());
      });
    }
  };

  render() {
    const { props } = this;
    const hasError = props.meta.touched && props.meta.error;
    const valid = props.meta.touched && props.meta.valid;
    return (
      <React.Fragment>
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
            <input
              onFocus={this.geolocate}
              ref={this.autocompleteRef}
              {...props}
              {...props.input}
            />
          ) : (
            <div className="field">
              <div className="icon-box">
                <center>
                  <img src={props.icon} />
                </center>
              </div>
              <input
                className="ft-input"
                onFocus={this.geolocate}
                ref={this.autocompleteRef}
                {...props}
                {...props.input}
              />
            </div>
          )}
          <i
            style={{ display: hasError || valid }}
            className={`fv-control-feedback ${hasError &&
              'fa fa-times'} ${valid && 'fa fa-check'}`}
          />
          {hasError && (
            <small className="fv-help-block">{props.meta.error}</small>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export { AddressField };
