import React from 'react';

const packages = [
  {
    id: 154,
    title: (
      <React.Fragment>
        BUY 3 BOTTLES <span> + GET 2 FREE</span>
      </React.Fragment>
    ),
    img: 'product-box1.png',
    desktopImg: 'pkg1-img.png',
    msg: 'MOST POPULAR PACKAGE',
    regularPrice: '$345.00',
    price: '$39.00',
    upsell: 1,
  },
  {
    id: 153,
    title: (
      <React.Fragment>
        BUY 2 BOTTLES <span> + GET 1 FREE</span>
      </React.Fragment>
    ),
    img: 'product-box2.png',
    desktopImg: 'pkg2-img.png',
    msg: 'BEST VALUE PACKAGE',
    regularPrice: '$207.00',
    price: '$49.00',
    upsell: 2,
  },
  {
    id: 152,
    title: <React.Fragment>BUY 1 BOTTLES</React.Fragment>,
    img: 'product-box3.png',
    desktopImg: 'pkg3-img.png',
    msg: 'SIMPLER PACKAGE',
    regularPrice: '$69.00',
    price: '$69.00',
    upsell: 3,
  },
];

export { packages };
