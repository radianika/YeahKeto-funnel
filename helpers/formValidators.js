const shippingFormValidator = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'The first name is required.';
  }
  if (!values.lastName) {
    errors.lastName = 'The last name is required.';
  }
  if (!values.address) {
    errors.address = 'The address is required';
  }
  if (values.address && values.address.length > 100) {
    errors.address = 'The address must be less than 100 characters long.';
  }
  if (!values.city) {
    errors.city = 'The city is required';
  }
  if (values.city && values.city.length > 50) {
    errors.city = 'The city must be less than 50 characters long.';
  }
  if (!values.state) {
    errors.state = 'The state is required';
  }
  if (!values.postalCode) {
    errors.postalCode = 'The zip code is required';
  }
  if (values.postalCode && values.postalCode.length !== 5) {
    errors.postalCode = 'The zip code must be 5 characters long.';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Please enter your phone number';
    // Not a valid 10-digit US phone number (must not include spaces or special characters).
  }
  if (!values.email) {
    errors.email = 'The email address is required';
    // The value is not a valid email address
  }
  return errors;
};

const billingFormValidator = values => {
  const errors = shippingFormValidator(values);
  if (!values.cardNumber) {
    errors.cardNumber = 'Card number is required';
  }
  if (!values.cardMonth) {
    errors.cardMonth = 'Month is required';
  }
  if (!values.cardYear) {
    errors.cardYear = 'Year is required';
  }
  if (!values.cardSecurityCode) {
    errors.cardSecurityCode = 'Security Code is required';
  }
  console.log({ errors });
  return errors;
};

export { shippingFormValidator, billingFormValidator };
