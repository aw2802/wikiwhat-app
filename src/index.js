import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';

import App from './components/App';
import Answer from './components/Answer';
import LoginWithApollo from './components/Login';
import RegisterWithApollo from './components/Register';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';
import './css/main.css';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8888/graphql'
	// ,
	// opts: { credentials: 'include' }
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const Root = () =>{
	return(
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" component={ App } />
					<Match exactly pattern="/answer/:article/:isCorrect" component={ Answer } />
					<Match exactly pattern="/login" component={ LoginWithApollo } />
					<Match exactly pattern="/user/:userId" component={ App } />
					<Match exactly pattern="/register" component={ RegisterWithApollo } />
					<Miss component={ NotFound } />
				</div>
			</BrowserRouter>
		</ApolloProvider>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
