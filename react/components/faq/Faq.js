import React, { PureComponent } from 'react';
import { Header, Footer } from 'react/components/common';

class Faq extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>faq’s</span>
              <p className="comn-txt">
                Here are some of the questions we hear most often, with
                responses we hope you find helpful! include this where the
                filler text is.
              </p>
            </div>
            <img
              src="/static/assets/images/bnr-prd.png"
              className="inner-prd for-desk"
            />
          </div>
        </div>

        <div className="container">
          <div className="accordion-container">
            <div className="acdn-bg">
              <div className="accordion" id="hd-one">
                Why Choose American Science?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Receive a wide range of therapeutic and health benefits by
                  purchasing the hemp extract dietary supplements American
                  Science offers. The supplements we offer are infused with hemp
                  extract enriched with over 80 cannabinoids.
                </p>
                <br />
                <p className="txt1">
                  You can also avoid the hassle people typically have to deal
                  with when buying CBD or medical marijuana. You don’t need a
                  prescription, don’t need to import it, or be part of a
                  domestic hemp program.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion">
                What is CBD also known as Cannabidiol?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Our cannabidiol is extracted from hemp, which is its most
                  abundant component. A major benefit of CBD is that it offers
                  numerous benefits and is safe to consume without causing the
                  "high" effect.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion">
                Are the products you offer high-quality?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Of course! However, we would say they are of GREAT quality,
                  and we would never offer them to you otherwise! We take great
                  pride in our standard of purity, potency, and quality, which
                  is second to none! Our products meet the highest standards in
                  our industry.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion">
                {' '}
                Do you test your products for safety and quality?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  All of our products have been thoroughly tested for quality
                  and safety while being free from pesticides, fertilizers, and
                  herbicides.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion">
                {' '}
                Will I get high using your products with CBD?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  CBD is non-psychoactive, therefore, you will not experience a
                  “high.” All of our products contain zero THC.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion">
                I have a drug test coming up, will I fail it if I use CBD
                products?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Rest assured, all our products are free from THC and are in
                  complete compliance with all applicable regulations. Also, CBD
                  is undetectable in urine and saliva tests.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion"> What is the Legal status of CBD?</div>
              <div className="acdn-content">
                <p className="txt1">
                  The CBD in our products comes from industrial hemp that is
                  legal in all 50 states. CBD is a natural component of the hemp
                  plant and is therefore legal to be used as a food supplement.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                CBD and THC, what is the difference?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Though hemp contains both THC and CBD, THC is a psychoactive
                  component, while CBD is non-psychoactive.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                Does CBD interact with other medicines I might use?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  We recommend you consult with your physician before taking any
                  supplements, such as CBD.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                Where does your hemp come from?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Our hemp is grown and derived from natural organic, non-GMO,
                  and pesticide-free farms within the United States.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                Will I require a medical card to purchase your products?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  A medical card is not required to purchase CBD based products.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                How much CBD should I consume?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  The recommended dosage is listed on each bottle. Please
                  consult your physician for any specific questions.
                </p>
              </div>
            </div>
            <div className="acdn-bg">
              <div className="accordion" style={{ borderBottom: 'none' }}>
                {' '}
                Can I use CBD to treat my condition/illness or sickness?
              </div>
              <div className="acdn-content">
                <p className="txt1">
                  Please know that our products and CBD are not intended to
                  prevent, diagnose, treat or cure any condition/illness or
                  sickness or disease. Several researchers and studies indicate
                  the benefits of using CBD. However, the FDA has not approved
                  any of our products that contain CBD to aid in the prevention,
                  diagnosis, treatment or cure of any condition/illness,
                  sickness or disease.
                </p>
                <br />
                <p className="txt1">
                  We highly advise you to consult your physician before using
                  any CBD based products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export { Faq };
