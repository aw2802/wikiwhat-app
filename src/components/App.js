import React from 'react';

import Navbar from './Navbar';
import GuessArticleWithData from './GuessArticle';

class App extends React.Component {
	render(){
		return (
			<div>
				<Navbar />
				<GuessArticleWithData />
			</div>
		);
	}
}

export default App;
