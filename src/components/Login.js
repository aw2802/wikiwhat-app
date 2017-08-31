import React from 'react';
import { ApolloClient, withApollo } from 'react-apollo';
import PropTypes from 'prop-types'; // ES6

import { getLoginGQL } from '../data/login-query';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			alert: '',
			alertClass: ''
		};
	}

	onSubmit(event) {
		event.preventDefault();

		const query = getLoginGQL(this.username, this.password);
		this.props.client.query({ query });

		// TODO: add call to backend in regular project
		// print out error if incorrect user/password is sent
		this.setState({
			alert: 'Incorrect Username or Password. Please try again.',
			alertClass: 'alert alert-danger'
		});
	}

	goToRegister(event) {
		event.preventDefault();
		this.context.router.transitionTo(`register`);
	}

	render(){
		return (
			<div className='account-form'>
				<form onSubmit={(e) => this.onSubmit(e)}>
					<h2>Login to keep track of your score</h2>
					<div role='alert'
						className={`${this.props.alertClass || this.state.alertClass }`}>
						{this.props.alert || this.state.alert}
					</div>

					<input type='text' placeholder='Username'
							ref={(input) =>  { this.username = input }} required />
					<input type='password' placeholder='Password'
						ref={(input) =>  { this.password = input }} required />
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
