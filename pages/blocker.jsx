import React, {Component} from 'react';

class Blocker extends Component {
	constructor(props) {
	super(props);
}
	render() {
		return (
			<div className="parlx-sec">
				<div className="container">
					{this.props.children[0]}
					{this.props.children[1]}

					{this.props.children[2]}	

				</div>
			</div>
		)
}
}
export default Blocker; 