const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const getMFD = () => {
  let mfd = [];
  var keyMap = [
    {
      name: 'AffId',
      value: getParameterByName('affId')
    },
    {
      name: 'TransactionID',
      value: getParameterByName('sourceValue3')
    },
    {
      name: 'AffSource',
      value: getParameterByName('sourceValue4')
    },
    {
      name: 'OfferID',
      value: getParameterByName('sourceValue5')
    },
    {
      name: 'utm_source',
      value: getParameterByName('utm_source')
    },
    {
      name: 'utm_medium',
      value: getParameterByName('utm_medium')
    },
    {
      name: 'utm_campaign',
      value: getParameterByName('utm_campaign')
    },
    {
      name: 'utm_term',
      value: getParameterByName('utm_term')
    },
    {
      name: 'utm_content',
      value: getParameterByName('utm_content')
    }
  ];

  mfd = keyMap.filter(key => {
    return !!key.value
  });

  return mfd;
}

const parseLeadPostData = (values) => {
  const AffiliateID = getParameterByName('sourceValue1');
  const SubAffiliateID = getParameterByName('sourceValue2');

  let postData = {
    "Email": values.Email,
    "Phone": values.Phone,
    "ShippingAddress": {
      "FirstName": values.FirstName,
      "LastName": values.LastName,
      "Address1": values.Address1,
      "Address2": values.Address2,
      "City": values.City,
      "State": values.State,
      "ZipCode": values.ZipCode
    },
    "MFD": getMFD()
  }

  postData = Object.assign(postData,
    AffiliateID ? { AffiliateID } : null,
    SubAffiliateID ? { SubAffiliateID } : null
  );

  return postData;
};

const parseOrderPostData = (values, pack) => {
  const AffiliateID = getParameterByName('sourceValue1');
  const SubAffiliateID = getParameterByName('sourceValue2');
  const shippingLocalStorageData = JSON.parse(localStorage.getItem('parsedShipping'));

  let postData = {
    "BillingAddress": {
      "FirstName": shippingLocalStorageData.ShippingAddress.FirstName,
      "LastName": shippingLocalStorageData.ShippingAddress.LastName,
      "Address1": shippingLocalStorageData.ShippingAddress.Address1,
      "Address2": shippingLocalStorageData.ShippingAddress.Address2,
      "City": shippingLocalStorageData.ShippingAddress.City,
      "State": shippingLocalStorageData.ShippingAddress.State,
      "ZipCode": shippingLocalStorageData.ShippingAddress.ZipCode
    },
    "PaymentInformation": {
      "ExpMonth": values.cardExpiry.cardMonth,
      "ExpYear": values.cardExpiry.cardYear,
      "CCNumber": values.cardNumber,
      "NameOnCard": `${shippingLocalStorageData.ShippingAddress.FirstName}${shippingLocalStorageData.ShippingAddress.LastName}`,
      "CVV": values.cardSecurityCode,
      "ProductGroups": [{
        ProductGroupKey: pack.id
      }]
    },
    "MFD": getMFD()
  }

  postData = Object.assign(postData,
    AffiliateID ? { AffiliateID } : null,
    SubAffiliateID ? { SubAffiliateID } : null
  );

  return postData;
};

export { parseLeadPostData, parseOrderPostData };
