import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div>
				<Head>
					<meta charSet="utf-8" />
					<title>American Science</title>
					<link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" key="viewport" />
					<meta name="description" content="Premium Quality Hemp Extract Products, Organic and Natural" />
					<link rel="stylesheet" type="text/css" href="/static/assets/css/simpleMobileMenu.css" />
					<link rel="stylesheet" type="text/css" href="/static/assets/fonts/fonts.css" />
					<link rel="stylesheet" type="text/css" href="/static/assets/fonts/font-open-sans.css" />
					<link rel="stylesheet" type="text/css" href="/static/assets/fonts/font-raleway.css" />
					<link rel="stylesheet" type="text/css" href="/static/assets/css/style.css" />
				</Head>
				<span>IT WORKS!</span>
			</div>
		);
	}
};