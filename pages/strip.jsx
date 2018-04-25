import React, {Component} from 'react';

class Strip extends Component {
	constructor(props) {
	super(props);
}
	render() {
		return (
            <div className="strip-sec">
                <div className="container">
                    <ul className="strip-list">
                        <li>
                            <img src="../static/assets/images/strip-lst-img2.png" alt="" />
                            <p><span>All Natural</span><br />Safe &amp; Effective</p>
                        </li>
                        <li>
                            <img src="../static/assets/images/strip-lst-img3.png" alt="" />
                            <p><span>Made In USA</span><br />Premium Quality</p>
                        </li>
                        <li>
                            <img src="../static/assets/images/strip-lst-img4.png" alt="" />
                            <p><span>Customer Support</span><br />24x7 via Email / Phone</p>
                        </li>
                        <li>
                            <img src="../static/assets/images/strip-lst-img1.png" alt="" />
                            <p><span>Quick Shipping</span><br />Within 1 - 2 days</p>
                        </li>
                    </ul>
                </div>
            </div>
		)
}
}
export default Strip;