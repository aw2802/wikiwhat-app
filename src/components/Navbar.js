import React from 'react';
import '../css/Navbar.css';

class Navbar extends React.Component{
	render(){
		return (
			<div className="Navbar">
				<h1>WikiWhatWhat</h1>
				<p>Score: 1 out of 10</p>
				<p>Correct: 20%</p>
			</div>
		);
	}
}

export default Navbar;