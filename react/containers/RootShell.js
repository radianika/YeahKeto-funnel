import React, { PureComponent } from 'react';
import Head from 'next/head';
import { CommonFooter } from 'react/components/common/desktop';

class RootShell extends PureComponent {
	constructor(props) {
		super(props);
		this.internalData = {};
	}
	render() {
		return (
			<React.Fragment>
				<Head>
					<meta charSet="utf-8" />
					<title>{this.props.title || 'American Science CBD Hemp Oil'}</title>
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/static/favicon.ico"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
						key="viewport"
					/>
					<meta
						name="description"
						content="Premium Quality Hemp Extract Products, Organic and Natural"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/assets/css/simpleMobileMenu.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/assets/fonts/fonts.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/assets/fonts/font-open-sans.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/assets/fonts/font-raleway.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/assets/css/style.css"
					/>
				</Head>
				{this.props.children}
				<CommonFooter />
			</React.Fragment>
		);
	}
}

export { RootShell };
