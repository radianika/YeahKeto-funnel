import React, { PureComponent } from 'react';
import 'styles/cart.scss';

const prices = {
  product1: 69,
  product2: 77,
  product3: 87,
};

class ChoseProductsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product1Selected: '0',
      product2Selected: '0',
      product3Selected: '0',
    };
    this.selectProduct = this.selectProduct.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  getTotal() {
    const s1 = parseInt(this.state.product1Selected, 10) * prices.product1;
    const s2 = parseInt(this.state.product2Selected, 10) * prices.product2;
    const s3 = parseInt(this.state.product3Selected, 10) * prices.product3;
    return (s1 + s2 + s3).toFixed(2);
  }
  selectProduct(e, productId) {
    this.setState({
      [`product${productId}Selected`]: e.target.value,
    });
  }
  render() {
    return (
      <form id="product_select">
        <table
          border="0"
          cellSpacing="0"
          cellPadding="0"
          width="97%"
          className="tbl2"
        >
          <tbody>
            <tr>
              <td className="row2 txt1-cart midc1">
                <img
                  alt=""
                  src="/static/assets/images/pro1crt.png"
                  className="procrt"
                />
                <p className="txt3-crt">
                  American Science<br />
                  <span>CBD HEMP OIL 500 mg</span>
                </p>
              </td>
              <td className="row2 txt1-cart midc2">
                <select
                  id="product1_qty"
                  name="cbd-oil"
                  className="drop"
                  onChange={e => {
                    this.selectProduct(e, 1);
                  }}
                  defaultValue="0"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div style={{ display: 'none' }}>
                  <input type="text" name="product1_id" defaultValue={152} />
                </div>
              </td>
              <td className="row2 txt1-cart midc3 pinktxt1" id="cbd-oil-price">
                ${(
                  parseInt(this.state.product1Selected, 10) * prices.product1
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="txt1-cart midc1 row3">
                <img
                  alt=""
                  src="/static/assets/images/pro2crt.png"
                  className="procrt"
                />
                <p className="txt3-crt">
                  American Science<br />
                  <span>CBD HEMP CAPSULES 300 mg</span>
                </p>
              </td>
              <td className="txt1-cart row3 midc2">
                <select
                  id="product2_qty"
                  name="cbd-capsules"
                  className="drop"
                  onChange={e => {
                    this.selectProduct(e, 2);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div style={{ display: 'none' }}>
                  <input type="text" name="product2_id" defaultValue={157} />
                </div>
              </td>
              <td
                className="txt1-cart row3 midc3 pinktxt1"
                id="cbd-capsules-price"
              >
                ${(
                  parseInt(this.state.product2Selected, 10) * prices.product2
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="txt1-cart midc1 row3">
                <img
                  alt=""
                  src="/static/assets/images/pro3crt.png"
                  width="54"
                  height="80"
                  className="procrt"
                />
                <p className="txt3-crt">
                  American Science<br />
                  <span>WARMING BALM 50 mg</span>
                </p>
              </td>
              <td className="txt1-cart row3 midc2">
                <select
                  id="product3_qty"
                  name="cbd-balm"
                  className="drop"
                  onChange={e => {
                    this.selectProduct(e, 3);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div style={{ display: 'none' }}>
                  <input type="text" name="product3_id" defaultValue={175} />
                </div>
              </td>
              <td className="txt1-cart row3 midc3 pinktxt1" id="cbd-balm-price">
                ${(
                  parseInt(this.state.product3Selected, 10) * prices.product3
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan="2">
                <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                  <tbody>
                    <tr>
                      <td className="sec1crt-row4td-l">Total</td>
                      <td className="sec1crt-row4td-r" id="product-total">
                        ${this.getTotal()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan="2">
                <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                  <tbody>
                    <tr>
                      <td className="sec1crt-row4td-l">Shipping</td>
                      <td className="sec1crt-row4td-r">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ float: 'left' }} />
              <td colSpan="2">
                <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                  <tbody>
                    <tr>
                      <td className="sec1crt-row4td-l grand">Grand Total</td>
                      <td
                        className="sec1crt-row4td-r grand"
                        id="product-grand-total"
                      >
                        ${this.getTotal()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export { ChoseProductsForm };
