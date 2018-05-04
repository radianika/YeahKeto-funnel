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
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAlvv7t6WqKzDpDBiKZjKfKCm0VqWqjM3s&libraries=places';
    placesScript.async = true;
    placesScript.addEventListener('load', () => {
      this.initialiseAutoComplete();
    });
    document.body.appendChild(placesScript);
  }

  fillInAddress = () => {
    const place = this.autocomplete.getPlace();
    console.log(place.address_components);
    let address = place.address_components.find(
      c => c.types.indexOf('sublocality') >= 0,
    );
    address = idx(address, _ => _.long_name);
    let city = place.address_components.find(
      c => c.types.indexOf('locality') >= 0,
    );
    console.log(city);
    city = idx(city, _ => _.long_name);
    let state = place.address_components.find(
      c => c.types.indexOf('administrative_area_level_1') >= 0,
    );
    state = idx(state, _ => _.short_name);
    setImmediate(() => {
      this.props.changeField('address', address);
      this.props.changeField('city', city);
      this.props.changeField('state', state);
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
    const hasError = props.meta.submitFailed && props.meta.error;
    const valid = props.meta.touched && props.meta.valid;
    return (
      <React.Fragment>
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
            onFocus={this.geolocate}
            ref={this.autocompleteRef}
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
