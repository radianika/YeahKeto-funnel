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
  }
  // we have put length 12 below because as per UI we need to show two parenthesis,space and one hyphen too
  if (values.phoneNumber && values.phoneNumber.length !== 14) {
    errors.phoneNumber =
      'Not a valid 10-digit US phone number (must not include spaces or special characters).';
  }
  if (!values.email) {
    errors.email = 'The email address is required';
    // The value is not a valid email address
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'The value is not a valid email address';
  }

  return errors;
};

const billingFormValidator = values => {
  const errors = shippingFormValidator(values);
  if (!values.cardNumber) {
    errors.cardNumber = 'Card number is required';
  }

  if (values.cardNumber && values.cardNumber.length !== 16) {
    errors.cardNumber = 'Card number should be 16 digits';
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

const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  console.log('only number ==', onlyNums);
  if (onlyNums.length <= 3) {
    return `(${onlyNums}`;
  }
  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

const normalizePostalCode = value => {
  if (isNaN(value)) {
    return '';
  }

  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums.slice(0, 5);
};

export { shippingFormValidator, billingFormValidator, normalizePhone, normalizePostalCode };
