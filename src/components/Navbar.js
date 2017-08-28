import React from 'react';
import '../css/Navbar.css';

class Navbar extends React.Component{
	render(){
		return (
			<div className="Navbar">
				<h1>WikiWhat</h1>

				<div className="inner">
					<div className="info">
						<p>Score: 1 out of 10</p>
					</div>

					<div className="info">
						<p>Correct: 20%</p>
					</div>
				</div>

			</div>
		);
	}
}

export default Navbar;
