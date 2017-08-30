import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Match, Miss} from 'react-router';

const Root = () =>{
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Login} />
				<Match exactly pattern="/loggedIn" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
