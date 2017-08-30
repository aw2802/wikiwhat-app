import React from 'react';

class Navbar extends React.Component{
	render(){
		return (
			<div className="Navbar">

				<h1>wikiWhat?</h1>
				
				<div className="inner">
					<p><b>Score:</b> 1 / 10</p>
					<p><b>Streak:</b> 2</p>
					<p><b>Correct:</b> 20%</p>
					<p><b>User:</b> aw2809</p>
				</div>

			</div>
		);
	}
}

export default Navbar;
