import React from 'react';
import moment from 'moment';
import {
	PromoStrip,
	PromoSectionOneDesktop,
	PromoSectionTwoDesktop,
	PromoSectionThreeDesktop,
	PromoSectionFourDesktop,
	PromoSectionFiveDesktop,
	PromoSectionSixDesktop,
	PromoSectionSevenDesktop,
} from 'react/components/promo/desktop';
import 'styles/promo-desktop.scss';

class PromoDesktopContainer extends React.PureComponent {
	render() {
		const { props } = this;
		return (
			<React.Fragment>
				<h1 style={{ display: 'none' }}>American cience CBD</h1>
				<div className="topbar">
					<div className="container">
						<p className="topbartxt">
							<span>WARNING:</span> Due to extremely high media demand, there is
							limited supply of <span>Hemp Oil</span> in stock as of{' '}
							<span>{moment().format('DD/MMM/YYYY')}</span>
						</p>
					</div>
				</div>
				<PromoSectionOneDesktop />
				<PromoSectionTwoDesktop />
				<PromoStrip />
				<PromoSectionThreeDesktop />
				<PromoStrip />
				<PromoSectionFourDesktop />
				<PromoStrip />
				<PromoSectionFiveDesktop />
				<PromoStrip />
				<PromoSectionSixDesktop />
				<PromoStrip />
				<PromoSectionSevenDesktop />
				<div style={{ clear: 'both' }} />
			</React.Fragment>
		);
	}
}

export { PromoDesktopContainer };
