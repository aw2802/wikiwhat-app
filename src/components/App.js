import React from 'react';
import Navbar from './Navbar';
import SelectionWithData from './Selection';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state={images : []};
	}

	render(){

	    return (
	      <div>
		        <Navbar />
		        <SelectionWithData/>
				</div>
	    )
	}
}


export default App;



		       