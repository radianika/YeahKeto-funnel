import React from 'react'

class SquareTop extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<ul className="sec1-list">
				{this.props.children}
			</ul>
		)
	}
}

class SquareBot extends React.Component {
	constructor (props) {
		super(props);
	}
	render () { 
		return (
			<ul className="sec2-list">
				{this.props.children}
			</ul>
		)
	}
}

export { SquareBot, SquareTop }