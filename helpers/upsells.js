import React from 'react';

const upsell2Packs = [
  {
    id: 156,
    title: 'Add 1 Container',
    img: 'one-bottle.png',
    boxTxt: (
      <span className="span1">
        Purchase 1 containers of<br />
        CBD Capsules
      </span>
    ),
    price: '$90',
    discount: '($5 off retail)',
    boxClassName: 'pkg1-box',
  },
  {
    id: 157,
    title: 'Add 2 Containers',
    img: 'two-bottles.png',
    boxTxt: (
      <span className="span1">
        Purchase 2 containers of<br />
        CBD Capsules
      </span>
    ),
    price: '$149',
    discount: '($5 off retail)',
    boxClassName: 'pkg1-box',
  },
  {
    id: 158,
    title: 'Add 3 Containers',
    img: 'three-bottles.png',
    boxTxt: (
      <span className="span1">
        Purchase 3 containers of<br />
        CBD Capsules
      </span>
    ),
    price: '$195',
    discount: '($36 off retail)',
    boxClassName: 'pkg2-box',
  },
];

const upsell3Packs = [
  {
    id: 156,
    title: 'Add 1 Container',
    img: 'jar1.jpg',
    boxTxt: (
      <span className="span1">
        Buy 1 jar of<br />
        CBD Warming Rub
      </span>
    ),
    price: '$xx.00',
    discount: '($XX.00 savings off retail)',
    boxClassName: 'pkg1-box',
  },
  {
    id: 157,
    title: 'Add 2 Containers',
    img: 'jar2.jpg',
    boxTxt: (
      <span className="span1">
        Buy 2 jars of<br />
        CBD Warming Rub
      </span>
    ),
    price: '$xx.00',
    discount: '($xx.00 savings off retail)',
    boxClassName: 'pkg1-box',
  },
  {
    id: 158,
    title: 'Add 3 Containers',
    img: 'jar3.jpg',
    boxTxt: (
      <span className="span1">
        Buy 3 jars of<br />
        CBD Warming Rub
      </span>
    ),
    price: '$xx.00',
    discount: '($xx.00 off retail)',
    boxClassName: 'pkg2-box',
  },
];

export { upsell2Packs, upsell3Packs };
