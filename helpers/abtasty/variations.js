const variations = {
  control: {
    promo: {
      section1Img: '/static/promo/desktop/v2/section1.jpg',
    },
    upsell1: {},
    upsell2: {},
    upsell11: {},
    upsell21: {},
  },
  404691: {
    promo: {
      section1Img: '/static/promo/desktop/v2/section1.jpg',
    },
    upsell1: {},
    upsell2: {},
    upsell11: {},
    upsell21: {},
  },
  404690: {
    promo: {
      section1Img: '/static/promo/desktop/v1/section1.jpg',
    },
    upsell1: {},
    upsell2: {},
    upsell11: {},
    upsell21: {},
  },
};

const getVariationValue = (varId, page, key) => {
  let varVal = '';
  if (!varId) {
    varVal = variations.control[page][key];
  } else if (!variations[varId][page][key]) {
    varVal = variations.control[page][key];
  } else {
    varVal = variations[varId][page][key];
  }
  return varVal;
};

export default getVariationValue;
