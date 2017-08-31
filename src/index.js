import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

import './css/main.css';

const Root = () =>{
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Login} />
				<Match exactly pattern="/user/:userId" component={App} />
				<Match exactly pattern="/register" component={Register} />
				<Miss component={ NotFound } />
			</div>
		</BrowserRouter>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
