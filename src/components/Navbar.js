import React from 'react';

class Navbar extends React.Component{
	render(){
		const info = this.props.navbarInfo.user;
		let correct = 0, streak = 0, numGames = 0, totalCorrect = 0;
		let username = '';
		if (info !== undefined) {
			correct = (info.score.totalCorrect / info.score.numGames) * 100;
			streak = info.score.streak;
			numGames = info.score.numGames;
			totalCorrect = info.score.totalCorrect;
			username = info.username;
		}

		return (
			<div className='navbar'>

				<img src={require('../css/img/logo.png')} alt="wikiWhat? logo" />

				{/* <div className='inner'>
					<p><span className='title'>Score:</span> {totalCorrect}</p>
					<p><span className='title'>Streak:</span> {streak}</p>
					<p><span className='title'>Correct:</span> {correct}%</p>
					<p><span className='title'>Games:</span> {numGames}</p>
					<p><span className='title'>User:</span>  {username}</p>
				</div> */}

			</div>
		);
	}
}

export default Navbar;
