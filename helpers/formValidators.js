import validator from 'validator';
import creditCartType from 'credit-card-type';

console.log();

const shippingFormValidator = values => {
  const errors = {};
  if (!values.firstName || !values.firstName.trim()) {
    errors.firstName = 'The first name is required.';
  }
  if (!values.lastName || !values.lastName.trim()) {
    errors.lastName = 'The last name is required.';
  }
  if (!values.address || !values.address.trim()) {
    errors.address = 'The address is required';
  } else if (values.address && values.address.trim().length > 100) {
    errors.address = 'The address must be less than 100 characters long.';
  }
  if (!values.city || !values.city.trim()) {
    errors.city = 'The city is required';
  } else if (values.city && values.city.trim().length > 50) {
    errors.city = 'The city must be less than 50 characters long.';
  }
  if (!values.state || !values.state.trim()) {
    errors.state = 'The state is required';
  }
  if (!values.postalCode || !values.postalCode.trim()) {
    errors.postalCode = 'The zip code is required';
  } else if (values.postalCode && values.postalCode.trim().length !== 5) {
    errors.postalCode = 'The zip code must be 5 characters long.';
  }
  if (!values.phoneNumber || !values.phoneNumber.trim()) {
    errors.phoneNumber = 'Please enter your phone number';
  } else if (values.phoneNumber && values.phoneNumber.length !== 14) {
    errors.phoneNumber =
      'Not a valid 10-digit US phone number (must not include spaces or special characters).';
  }
  if (!values.email || !values.email.trim()) {
    errors.email = 'The email address is required';
  } else if (values.email && !validator.isEmail(values.email)) {
    errors.email = 'The value is not a valid email address';
  }

  return errors;
};

const billingFormValidator = values => {
  const errors = shippingFormValidator(values);
  if (!values.cardNumber || !values.cardNumber.trim()) {
    errors.cardNumber = 'Card number is required';
  } else if (values.cardNumber) {
    const value = values.cardNumber.replace(/\s/g, '');
    const cardTypes = creditCartType(value);
    let length = 16;
    if (cardTypes.length === 1) {
      [length] = cardTypes[0].lengths;
    }
    if (value.length !== length) {
      errors.cardNumber = `Card number should be ${length} digits`;
    }
  }

  if (!values.cardMonth || !values.cardMonth.trim()) {
    errors.cardMonth = 'Month is required';
  }
  if (!values.cardYear || !values.cardYear.trim()) {
    errors.cardYear = 'Year is required';
  }
  if (!values.cardSecurityCode || !values.cardSecurityCode.trim()) {
    errors.cardSecurityCode = 'Security Code is required';
  } else if (values.cardSecurityCode) {
    let length = 3;
    if (values.cardNumber) {
      const value = values.cardNumber.replace(/\s/g, '');
      const cardTypes = creditCartType(value);
      if (cardTypes.length === 1) {
        length = cardTypes[0].code.size;
      }
      if (values.cardSecurityCode.length !== length) {
        errors.cardSecurityCode = `Security code should be ${length} digits`;
      }
    }
  }
  return errors;
};

const cartFormValidator = values => {
  let errors = shippingFormValidator(values);
  const orderValues = values.order || {};
  const cardErrors = billingFormValidator(orderValues);
  errors = { ...errors, cardErrors };
  return errors;
};

const normalizePhone = value => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
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
    return value.substring(0, value.length - 1);
  }

  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums.slice(0, 5);
};

const normalizeCardNumber = value => {
  value = value.replace(/\s/g, '');
  if (isNaN(value)) {
    value = value.substring(0, value.length - 1);
  }
  const cardTypes = creditCartType(value);
  if (cardTypes.length === 1) {
    const [length] = cardTypes[0].lengths;
    let { gaps } = cardTypes[0];
    gaps = [0, ...gaps, length];
    let returnVal = [];
    for (let i = 0; i < gaps.length - 1; i += 1) {
      returnVal = [...returnVal, value.substring(gaps[i], gaps[i + 1])];
    }
    return returnVal.filter(v => !!v).join(' ');
  }
  return [
    value.substring(0, 4),
    value.substring(4, 8),
    value.substring(8, 12),
    value.substring(12, 16),
  ]
    .filter(v => !!v)
    .join(' ');
};

const normalizeSecurityCode = (value, previousValue, allValues) => {
  if (isNaN(value)) {
    value = value.substring(0, value.length - 1);
  }
  let length = 3;
  let { cardNumber } = allValues;
  if (cardNumber) {
    cardNumber = cardNumber.toString().replace(/\s/g, '');
    const cardTypes = creditCartType(cardNumber);
    if (cardTypes.length === 1) {
      // console.log(cardTypes[0]);
      length = cardTypes[0].code.size;
    }
    // console.log({ length });
  }
  return value.substring(0, length);
};

export {
  shippingFormValidator,
  billingFormValidator,
  cartFormValidator,
  normalizePhone,
  normalizePostalCode,
  normalizeCardNumber,
  normalizeSecurityCode,
};
