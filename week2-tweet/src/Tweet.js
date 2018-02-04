import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
	render() {
		return <div className="Tweet">
		{this.props.tweetText}

		</div>
	}
}

export default Tweet;