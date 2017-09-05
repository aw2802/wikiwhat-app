import React from 'react';

class Navbar extends React.Component{
	render(){
		return (
			<div className='navbar'>

				<img src={require('../css/img/logo.png')} alt="wikiWhat? logo" />

				<div className='inner'>
					<p><span className='title'>Score:</span> 20</p>
					<p><span className='title'>Streak:</span> 2</p>
					<p><span className='title'>Correct:</span>  20%</p>
					<p><span className='title'>Tries:</span> 100</p>
					<p><span className='title'>User:</span>  aw2809</p>
				</div>

			</div>
		);
	}
}

export default Navbar;
