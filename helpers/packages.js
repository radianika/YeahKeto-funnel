import React from 'react';

const packages = [
  {
    id: 210,
    title: (
      <React.Fragment>
        BUY 3 BOTTLES <span> + GET 2 FREE</span>
      </React.Fragment>
    ),
    name: 'BUY 3 BOTTLES + GET 2 FREE',
    img: 'product-box1.png',
    desktopImg: 'pkg1-img.png',
    msg: 'MOST POPULAR PACKAGE',
    regularPrice: '445.00',
    price: '49.00',
    packagePrice: '245.00',
    upsell: 1,
  },
  {
    id: 209,
    title: (
      <React.Fragment>
        BUY 2 BOTTLES <span> + GET 1 FREE</span>
      </React.Fragment>
    ),
    name: 'BUY 2 BOTTLES + GET 1 FREE',
    img: 'product-box2.png',
    desktopImg: 'pkg2-img.png',
    msg: 'BEST VALUE PACKAGE',
    regularPrice: '267.00',
    price: '59.00',
    packagePrice: '177.00',
    upsell: 2,
  },
  {
    id: 208,
    title: <React.Fragment>BUY 1 BOTTLE</React.Fragment>,
    name: 'BUY 1 BOTTLE',
    img: 'product-box3.png',
    desktopImg: 'pkg3-img.png',
    msg: 'SIMPLER PACKAGE',
    regularPrice: '89.00',
    price: '79.00',
    packagePrice: '79.00',
    upsell: 3,
  },
];

export { packages };
