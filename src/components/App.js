import React from 'react';
import Navbar from './Navbar';
import Selection from './Selection';
import axios from 'axios';
import '../css/App.css';

class App extends React.Component{

	constructor(){
		super();
		this.state={images : []};
	}

	componentWillMount(){
		let config = {'X-Mashape-Key': 'ZF4AQocD2Cmsh9IU2WEtKtDHIYrjp16SwqzjsnqF9PbncTEYs7',
					   'Accept': 'application/json'
		};
		var th = this;
    	this.serverRequest = 
      	axios.get('https://hargrimm-wikihow-v1.p.mashape.com/images?count=4', {headers: config})
        .then(function(result) {    
          th.setState({
            images: result.data
          });
        })
	}

	render(){
		var obj = JSON.stringify(this.state.images);
		obj = obj.split("\"");
		
		var titleArray = [];
		titleArray.push(obj[7]);
		titleArray.push(obj[11]);
		titleArray.push(obj[15]);

	    return (
	      <div className='App'>
	        <Navbar />
	        <p>{titleArray[1]}</p>
	    	{/* Uses the first image as the main image */}
	        <Selection image={obj[3]}/>
	      </div>
	    )
	}
}

export default App;