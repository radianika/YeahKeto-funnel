import React from 'react';
import Collapsible from 'react-collapsible';
import { Header, Footer } from 'react/components/common';

class Faq extends React.PureComponent {
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
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="accordion-container">
            <Collapsible trigger="Why Choose American Science?">
              <p className="txt1">
                Receive a wide range of therapeutic and health benefits by
                purchasing the hemp extract dietary supplements American Science
                offers. The supplements we offer are infused with hemp extract
                enriched with over 80 cannabinoids.
              </p>
              <br />
              <p className="txt1">
                You can also avoid the hassle people typically have to deal with
                when buying CBD or medical marijuana. You don’t need a
                prescription, don’t need to import it, or be part of a domestic
                hemp program.
              </p>
            </Collapsible>
            <Collapsible trigger="What is CBD also known as Cannabidiol?">
              <p className="txt1">
                Our cannabidiol is extracted from hemp, which is its most
                abundant component. A major benefit of CBD is that it offers
                numerous benefits and is safe to consume without causing the
                &apos;high&apos; effect.
              </p>
            </Collapsible>
            <Collapsible trigger="Are the products you offer high-quality?">
              <p className="txt1">
                Of course! However, we would say they are of GREAT quality, and
                we would never offer them to you otherwise! We take great pride
                in our standard of purity, potency, and quality, which is second
                to none! Our products meet the highest standards in our
                industry.
              </p>
            </Collapsible>
            <Collapsible trigger="Do you test your products for safety and quality?">
              <p className="txt1">
                All of our products have been thoroughly tested for quality and
                safety while being free from pesticides, fertilizers, and
                herbicides.
              </p>
            </Collapsible>
            <Collapsible trigger="Will I get high using your products with CBD?">
              <p className="txt1">
                CBD is non-psychoactive, therefore, you will not experience a
                “high.” All of our products contain zero THC.
              </p>
            </Collapsible>
            <Collapsible trigger="I have a drug test coming up, will I fail it if I use CBD products?">
              <p className="txt1">
                Rest assured, all our products are free from THC and are in
                complete compliance with all applicable regulations. Also, CBD
                is undetectable in urine and saliva tests.
              </p>
            </Collapsible>
            <Collapsible trigger="What is the Legal status of CBD?">
              <p className="txt1">
                The CBD in our products comes from industrial hemp that is legal
                in all 50 states. CBD is a natural component of the hemp plant
                and is therefore legal to be used as a food supplement.
              </p>
            </Collapsible>
            <Collapsible trigger="CBD and THC, what is the difference?">
              <p className="txt1">
                Though hemp contains both THC and CBD, THC is a psychoactive
                component, while CBD is non-psychoactive.
              </p>
            </Collapsible>
            <Collapsible trigger="Does CBD interact with other medicines I might use?">
              <p className="txt1">
                We recommend you consult with your physician before taking any
                supplements, such as CBD.
              </p>
            </Collapsible>
            <Collapsible trigger="Where does your hemp come from?">
              <p className="txt1">
                Our hemp is grown and derived from natural organic, non-GMO, and
                pesticide-free farms within the United States.
              </p>
            </Collapsible>
            <Collapsible trigger="Will I require a medical card to purchase your products?">
              <p className="txt1">
                A medical card is not required to purchase CBD based products.
              </p>
            </Collapsible>
            <Collapsible trigger="How much CBD should I consume?">
              <p className="txt1">
                The recommended dosage is listed on each bottle. Please consult
                your physician for any specific questions.
              </p>
            </Collapsible>
            <Collapsible trigger="Can I use CBD to treat my condition/illness or sickness?">
              <p className="txt1">
                Please know that our products and CBD are not intended to
                prevent, diagnose, treat or cure any condition/illness or
                sickness or disease. Several researchers and studies indicate
                the benefits of using CBD. However, the FDA has not approved any
                of our products that contain CBD to aid in the prevention,
                diagnosis, treatment or cure of any condition/illness, sickness
                or disease.
              </p>
              <br />
              <p className="txt1">
                We highly advise you to consult your physician before using any
                CBD based products.
              </p>
            </Collapsible>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export { Faq };
