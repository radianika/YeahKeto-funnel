import React, {Component} from 'react';

class MainBlock extends Component {
	constructor(props) {
	super(props);
}
	render() {
		return (
			<div className="bnr-sec">
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
}
}
export default MainBlock;