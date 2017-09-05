import React from 'react';
import { graphql } from 'react-apollo';

import Navbar from './Navbar';
import GuessArticleWithData from './GuessArticle';

import { getUserGQL } from '../utils/queries';


class App extends React.Component {
	constructor() {
		super();
		this.state = { user: {} };
		this.updateScore = this.updateScore.bind(this);
	}

	updateScore(user) {
		const state = {...this.state};
		state.user = user;

		this.setState(state);
	}

	render(){

		return (
			<div>
				<Navbar navbarInfo={ this.state.user || this.props.user}/>
				<GuessArticleWithData updateNavbar={this.updateScore}/>
			</div>
		);
	}
}

export default App;
