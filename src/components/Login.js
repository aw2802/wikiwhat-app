import React from 'react';
import { ApolloClient, withApollo } from 'react-apollo';
import PropTypes from 'prop-types'; // ES6

import { getLoginGQL } from '../data/login-query';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			alert: '',
			alertClass: '',
			userId: null
		};
	}

	onSubmit(event) {
		event.preventDefault();

		// TODO: refactor for better practice
		//TODO: this.setState can only update a mounted Component
		// TODO: component is unmounted
		//double clikc llogin works
		const query = getLoginGQL(this.state.username, this.state.password);
			this.props.client.query({ query })
			.then((results) => {
					const userId = results.data.login.id;
					this.setState({ userId });
	    });

			if (this.state.userId !== null) {
				this.context.router.transitionTo(`/user/${this.state.userId}`);
			}

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
						className={`${this.props.alertClass || this.state.alertClass }`}>
						{this.props.alert || this.state.alert}
					</div>

					<input type='text' placeholder='Username'
						name='username' value={this.state.username}
						onChange={(e) => { this.handleUsernameChange(e) }} required />

					<input type='password' placeholder='Password'
						name='password' value={this.state.password}
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
