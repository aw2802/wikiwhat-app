import React from 'react';

import Navbar from './Navbar';
import Selection from './Selection';

import { ApolloClient, ApolloProvider } from 'react-apollo';

const client = new ApolloClient();
class App extends React.Component{

	constructor(){
		super();
		this.state={images : []};
	}

	render(){
		var obj = JSON.stringify(this.state.images);
		obj = obj.split("\"");

	    return (
	      <ApolloProvider client={client}>
		        <Navbar />
		        <img src={obj[3]} />
		        <Selection/>
				</ApolloProvider>
	    )
	}
}

export default App;
