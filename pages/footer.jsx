import React, {Component} from 'react';
import Modal from './modal';

const texts = {
    footer_terms: 'atata',
    footer_privacy: 'ololo',
};

class Footer extends Component {
	constructor(props) {
        super(props);
        this.state = {};
        this.onModalOpen = this.onModalOpen.bind(this);
        this.state.showModal = false;
        this.state.text = '';
    }
    onModalOpen (e) {
        e.preventDefault();
        let targetKey = e.target.id;
        this.setState({
            showModal: true,
            text: texts[targetKey],
        });
    }
	render() {
		return (
			<div className="footer">
				<div className="container">
					<p className="ftr-txt">
                        <a href="#" onClick={this.onModalOpen} id="footer_terms">Terms and Conditions </a>&nbsp;|&nbsp;
                        <a href="#" onClick={this.onModalOpen} id="footer_privacy"> Privacy Policy</a>&nbsp;|&nbsp;
                        <a href="#" onClick={this.onModalOpen} id="footer_customer"> Customer Care </a>&nbsp;|&nbsp;
                        <a href="#" onClick={this.onModalOpen} id="footer_refund"> Refund Policy </a>
					</p>
                    <p className="ftr-txt w40 mtop2">We accept: <img src="../static/assets/images/mc-v.png" alt="We accept VISA, MasterCard" /></p>
					<p className="ftr-txt just"><br/>This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. A Doctor's advice should be sought before using this and any supplemental dietary product. All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual weight loss results will vary. By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law. </p>	
					<p className="ftr-txt mtop2">Copyright 2018 © All Rights Reserved - American Science CBD</p>
				</div>
                {this.state.showModal &&
                    <Modal>
                        <span>{this.state.text}</span>
                    </Modal>
                }
			</div>
		)
}
}
export default Footer;