import React, { PureComponent } from 'react';

const Slider = props => (
  <React.Fragment>
    <div className="prd-sec1-lft">
      <div className="prd-sec1-inr-lft slider-nav-thumbnails slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div className="slick-track">
            <div
              className="slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
            >
              <div>
                <div
                  className="smll-sec"
                  onClick={() => props.sliderClick('0%')}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side1.png`}
                  />
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div>
                <div
                  className="smll-sec"
                  onClick={() => props.sliderClick('33.33%')}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side2.png`}
                  />
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div>
                <div
                  className="smll-sec"
                  onClick={() => props.sliderClick('66.66%')}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side3.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              width: '300%',
              transition: '0.5s',
              transform: `translate3d(-${props.translate3d}, 0px, 0px)`,
            }}
          >
            <div className="slick-slide" style={{ width: '33.333%' }}>
              <div>
                <div
                  className="prd-sec1-inr-rgt"
                  style={{ width: '100%', display: 'inline-block' }}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side1.png`}
                  />
                </div>
              </div>
            </div>
            <div className="slick-slide" style={{ width: '33.333%' }}>
              <div>
                <div
                  className="prd-sec1-inr-rgt"
                  style={{ width: '100%', display: 'inline-block' }}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side2.png`}
                  />
                </div>
              </div>
            </div>
            <div className="slick-slide" style={{ width: '33.333%' }}>
              <div>
                <div
                  className="prd-sec1-inr-rgt"
                  style={{ width: '100%', display: 'inline-block' }}
                >
                  <img
                    src={`../static/assets/images/cbd-${props.type}-side3.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

class Product extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      products: {
        CBD_HEMP_OIL: {
          type: 'oil',
          title: `CBD HEMP OIL`,
          sub_title: `Pure Cannabidiol complex`,
          header: `AMERICAN SCIENCE`,
          description: `Formulated with high-potency 500MG Hemp Extract, American Science’s Hemp Oil is rich in a wide range of cannabinoids (CBD) that have been proven to support mood patterns, joint health, and mental clarity.`,
          bullets: [
              `Available in an easy-to-take tincture ⁄ herbal drops form`,
              `Free from THC, harmful chemicals, pesticides, and synthetics`,
              `Made from hemp extract that is organically grown & extracted in the USA`
          ],
          price: `$69.00`,
					ingredients: `Ingredients: Hemp Seed Oil, Ethanol, Full Spectrum CBD`,
          supplement: {
            image: `/static/assets/images/cbd-oil-label.jpg`,
            how_to_use: {
              1: `Take 1 dropper full of the American Science Hemp Oil once a day.`,
              2: `Follow a healthy lifestyle along with a balanced diet & regular exercise.`,
              3: `Follow the supplementation & use daily for best results and maximum benefits.`
            }
          },
          recommended_products: [
						`CBD_HEMP_CAPSULES`,
            `WARMING_BALM`
          ]
        },
				CBD_HEMP_CAPSULES: {
					type: 'cap',
					title: `CBD HEMP CAPSULES`,
					sub_title: `Pure Cannabidiol complex`,
					header: `AMERICAN SCIENCE`,
					description: `Formulated with high-potency 300MG Hemp Extract, American Science's Hemp Capsule is rich in a wide range of cannabinoids (CBD) which has been proven to support mood patterns, joint health, and mental clarity.`,
					bullets: [
						`Available in an easy-to-take capsule form`,
						`Free from THC, harmful chemicals, pesticides, and synthetics`,
						`Made from hemp extract that is organically grown & extracted in the USA`
					],
					price: `$77.00`,
					ingredients: `Ingredients: Hemp Powder, CBD Isolate, Vegetable Capsule`,
					supplement: {
						image: `/static/assets/images/cbd-capsule-label.jpg`,
						how_to_use: {
							1: `Take one capsule of American Science Hemp Capsule daily with a glass of water.`,
							2: `Follow a healthy lifestyle along with a balanced diet & regular exercise. `,
							3: `Follow the supplementation & use daily for best results and maximum benefits.`
						}
					},
					recommended_products: [
						`CBD_HEMP_OIL`,
						`WARMING_BALM`
					]
        },
				WARMING_BALM: {
					type: 'balm',
					title: `WARMING BALM`,
					sub_title: `Premium Cognitive Function`,
					header: `AMERICAN SCIENCE`,
					description: `Formulated with a range of brain health-supporting ingredients, American Science's Warming balm may help support relief from problems like soreness, inflammation, and irritated skin.`,
					bullets: [
						`Reduces age-related decline in cognitive health`,
						`Supports mental clarity & agility with higher focus & concentration`,
						`Improves information rention & memory recall`
					],
					price: `$87.00`,
					ingredients: `
                      Ingredient List: Grapeseed Oil,
                      Beeswax, Cocoa Butter, Menthol
                      Crystals, Camphor Essential Oil,
                      Cinnamon Leaf Essential Oil, Coconut
                      Oil, Peppermint Essential Oil,
                      Ravensara Wild Essential Oil,
                      Rosemary Essential Oil, Fennel Sweet
                      Essential Oil, Cypress Essential Oil,
                      15 % CBD Hemp Extract`,
					supplement: {
						image: `/static/assets/images/cbd-balm-label.jpg`,
						how_to_use: {
							1: `Take two capsules of American Science Warming Balm daily with a glass of water.`,
							2: `Follow a healthy lifestyle along with a balanced diet & regular exercise.`,
							3: `Follow the supplementation & use daily for best results and maximum benefits.`
						}
					},
					recommended_products: [
						`CBD_HEMP_OIL`,
						`CBD_HEMP_CAPSULES`
					]
        }
      },
      slider: { translate3d: '0%' },
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  sliderClick(e) {
    this.setState({ slider: { translate3d: e } });
  }

  render() {

    let active_product = this.state.products[this.props.product || `CBD_HEMP_OIL`]
		let { type, header, title, sub_title, description, bullets, price, ingredients, supplement, recommended_products } = active_product
    let { translate3d } = this.state.slider

    // console.log(active_product)

    return (
      <React.Fragment>
        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>our products</span>
              <p className="comn-txt">
                Find out more about American Science's range of hemp extract
                enriched dietary supplements.{' '}
              </p>
            </div>
            <img
              src="/static/assets/images/bnr-prd.png"
              className="inner-prd for-desk for-tab"
            />
          </div>
        </div>

        <div className="prd-sec1">
          <div className="container">
            <Slider
              type={type}
              sliderClick={this.sliderClick.bind(this)}
              translate3d={translate3d}
            />

            <div className="prd-sec1-rgt">
              <p className="prd-sec1-txt1">{header}</p>
              <p className="prd-sec1-txt2">{title}</p>
              <p className="prd-sec-1txt3">{sub_title}</p>
              <p className="comn-txt prd-sec1-txt5">
                {description}
              </p>
              <ul className="prd-sec1-list">
                {
                  bullets.map((b, i)=> {
                    return <li key={`b-${i}`}>{b}</li>
                  })
                }
              </ul>
              <div style={{ float: 'left', width: '100%' }}>
                <p className="prd-sec1-txt6">{price}</p>
                <a
                  className="prd-sec1-btn"
                  onClick={ev => {
                    ev.preventDefault();
                  }}
                >
                  <img src="/static/assets/images/btn.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="container inline-bl">
            <div className="prd-sec1-lft">
              <div className="slider slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ width: '100%' }}>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                    >
                      <div>
                        <div className="just ingr">
                          {ingredients}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prd-sec1-rgt" />
          </div>
        </div>

        <div className="prd-sec2">
          <div className="container">
            <p className="comn-hdg">Supplement Facts &amp; Directions Of Use</p>
            <p className="comn-sub-hdg">
              Find out what's inside our hemp supplements and how to use them
              for best results.
            </p>
            <img src="/static/assets/images/comn-hdg-img.png" />
            <div className="clearall" />
            <img
              src={supplement.image}
              className="cbd-label-img"
            />
            <div className="howtouse">
              <h3>How to use</h3>
              <ul>
                <li>
                  <span>
                    Step<br />1
                  </span>
                  <p>
                    {supplement.how_to_use[1]}
                  </p>
                </li>
                <li>
                  <span>
                    Step<br />2
                  </span>
                  <p>
										{supplement.how_to_use[2]}
                  </p>
                </li>
                <li>
                  <span>
                    Step<br />3
                  </span>
                  <p>
										{supplement.how_to_use[3]}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prd-sec3">
          <div className="container">
            <RecommendedProducts products={recommended_products}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class RecommendedProducts extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      [`CBD_HEMP_OIL`]: {
        title: `CBD HEMP OIL`,
        sub_title: `PURE CANNABIDIOL COMPLEX`,
        description: `Hemp oil may help reduce pains & aches while improving mood patterns & relaxation.`,
        link: ``,
        image: `/static/assets/images/sec2-prd1.png`
      },
      [`CBD_HEMP_CAPSULES`]: {
        title: `CBD HEMP CAPSULES`,
        sub_title: `PURE CANNABIDIOL COMPLEX`,
        description: `Hemp capsules may help support joint health & may promote better sleep quality.`,
        link: ``,
				image: `/static/assets/images/sec2-prd3.png`
      },
      [`WARMING_BALM`]: {
				title: `WARMING BALM`,
				sub_title: `PREMIUM COGNITIVE FUNCTION`,
				description: `Warming balm may help support relief from problems like soreness, inflammation, and irritated skin.`,
				link: ``,
				image: `/static/assets/images/sec2-prd3.png`
			}
    }
  }

  _getProduct(props) {
    return (
        <li key={props.title}>
          <img
              src={props.image}
              className="sec2-prd"
          />
          <div className="prd-details">
            <p className="prd-txt1">American Science</p>
            <p className="prd-txt2">{props.title}</p>
            <p className="prd-txt3">{props.sub_title}</p>
            <p className="prd-txt4 comn-txt">
              {props.description}
            </p>
            <a href="hemp-capsule.html">
              <img src="/static/assets/images/btn.png" className="btn" />
            </a>
          </div>
        </li>
    )
  }

  render() {

    let { products } = this.props

    // console.log(products)

    return <React.Fragment>
      <p className="comn-hdg">Recommended Products</p>
      <p className="comn-sub-hdg">
        Complete Your American Science Supplement Stack
      </p>
      <img src="/static/assets/images/comn-hdg-img.png" />
      <ul className="prd-sec3-list">
        {
					products.map((p, i)=> {
					  return this._getProduct(this.state[p])
          })
        }
      </ul>
    </React.Fragment>
  }
}

export { Product };
