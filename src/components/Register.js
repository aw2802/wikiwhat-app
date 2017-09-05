import React from 'react';

import { ApolloClient, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';

import { getRegisterGQL } from '../utils/queries';
import { setLocalStorage } from '../utils/helper-functions';

class Register extends React.Component{
  constructor(){
		super();
		this.state = {
			alert: '',
			alertClass: '',
      isDisabled: true
		};
	}

	onSubmit(event) {
		event.preventDefault();
    const mutation = getRegisterGQL(this.state.username, this.state.password);
		this.props.client.mutate({ mutation })
			.then((results) => {
					const user =
						(results.data.register !== null) ? results.data.register : null;

					if (user !== null) {
						const ls = setLocalStorage('user', user );
						this.setState(ls);

						this.context.router.transitionTo(`/user/${user.id}`);
					}
	    })
      .catch(error => {
        this.setState({
          alert: 'Username already exists. Please try a new one.',
          alertClass: 'alert alert-danger'
        });
      });
	}

  handleUsernameChange(event) {
   this.setState({ username: event.target.value });
	}

	handlePasswordChange(event) {
	   this.setState({ password: event.target.value });
	}

  goToLogin(event) {
		event.preventDefault();
		this.context.router.transitionTo(`login`);
	}

  render(){
		return (
			<div className='account-form'>
				<form className='form-group'
          onSubmit={(e) => this.onSubmit(e)}>
					<h2>Create an account to keep track of your scores</h2>
          <div role='alert'
						className={`${this.state.alertClass }`}>
						{ this.state.alert }
					</div>

          <input className="form-control" type='text' placeholder='Username' key='username'
						value={ this.state.username }
						onChange={(e) => { this.handleUsernameChange(e) }} required />
					<input className="form-control" type='password' placeholder='Password' key='password'
            value={ this.state.password }
            onChange={(e) => { this.handlePasswordChange(e) }} required />

					<button type='submit' className='btn btn-warning'>
            Register
          </button>

          <div className="register-text">
						<a onClick={(e) => this.goToLogin(e)}>
              Already have an account? Click to login here
            </a>
					</div>
				</form>
			</div>
		);
	}
}

Register.contextTypes = {
  router: PropTypes.object
};

Register.propTypes = {
		client: PropTypes.instanceOf(ApolloClient).isRequired
};

const RegisterWithApollo = withApollo(Register);

export default RegisterWithApollo;
