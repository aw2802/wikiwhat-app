import React from 'react';

import Navbar from './Navbar';
import Selection from './Selection';

class App extends React.Component{

	constructor(){
		super();
		this.state={images : []};
	}

	render(){
		var obj = JSON.stringify(this.state.images);
		obj = obj.split("\"");

	    return (
	      <div>
		        <Navbar />
		        <img src={obj[3]} />
		        <Selection/>
				</div>
	    )
	}
}

export default App;
