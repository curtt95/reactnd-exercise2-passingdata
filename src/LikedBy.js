import React, { Component } from 'react';

class LikedBy extends Component {
 	render() {
		return <li>{this.props.name}</li>;
    }
}

export default LikedBy