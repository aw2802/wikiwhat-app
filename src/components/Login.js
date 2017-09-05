import React from 'react';
import { ApolloClient, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';

import { getLoginGQL } from '../utils/queries';
import { setLocalStorage } from '../utils/helper-functions';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			alert: '',
			alertClass: '',
			username: '',
			password: ''
		};
	}

	onSubmit(event) {
		event.preventDefault();

		const query = getLoginGQL(this.state.username, this.state.password);
		this.props.client.query({ query })
			.then((results) => {
					console.log(results);
					const userId =
						(results.data.login !== null) ? results.data.login.id : null;

					if (userId !== null) {
						const ls = setLocalStorage('user', { userId } );
						this.setState(ls);

						this.context.router.transitionTo(`/user/${userId}`);
					} else {
						this.setState({
							alert: 'Incorrect Username or Password. Please try again.',
							alertClass: 'alert alert-danger'
						});
					}
	    });
	}

	goToRegister(event) {
		event.preventDefault();
		this.context.router.transitionTo(`register`);
	}

	handleUsernameChange(event) {
   this.setState({ username: event.target.value });
	}

	handlePasswordChange(event) {
	   this.setState({ password: event.target.value });
	}

	render(){
		return (
			<div className='account-form'>
				<form onSubmit={(e) => this.onSubmit(e)}>
					<h2>Login to keep track of your score</h2>
					<div role='alert'
						className={`${ this.state.alertClass }`}>
						{ this.state.alert }
					</div>

					<input type='text' placeholder='Username'
						name='username' value={ this.state.username }
						onChange={(e) => { this.handleUsernameChange(e) }} required />

					<input type='password' placeholder='Password'
						name='password' value={ this.state.password }
						onChange={(e) => { this.handlePasswordChange(e) }} required />

					<button type='submit'>Login</button>

					<div className="register-text">
						<a onClick={(e) => this.goToRegister(e)}>
							Don't have an account? Create one!</a>
					</div>

				</form>
			</div>
		);
	}
}

Login.contextTypes = {
  router: PropTypes.object
};

Login.propTypes = {
		client: PropTypes.instanceOf(ApolloClient).isRequired
};

const LoginWithApollo = withApollo(Login);

export default LoginWithApollo;
