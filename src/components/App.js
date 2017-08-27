import React from 'react';
import Navbar from './Navbar';
import Selection from './Selection';
import '../css/App.css';

class App extends React.Component{

	render(){
	    return (
	      <div className='App'>
	        <Navbar />
	        <Selection />
	      </div>
	    )
	}
}

export default App;

