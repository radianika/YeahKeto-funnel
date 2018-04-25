import React, {Component} from 'react';

class Frame extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.sec}>
                <div className="container">
                    {this.props.children[0]}
                    {this.props.children[1]}
                    <img src="../static/assets/images/comn-hdg-img.png" alt=""/>
                    {this.props.children[2]}
                    {this.props.children[3]}
                    {this.props.children[4]}
                </div>
            </div>
        )
    }
}
export default Frame;