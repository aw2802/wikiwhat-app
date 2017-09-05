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
			alertClass: ''
		};
	}

	onSubmit(event) {
		event.preventDefault();
    const query = getRegisterGQL(this.state.username, this.state.password);
		this.props.client.mutate({ query })
			.then((results) => {
					const user =
						(results.data.register !== null) ? results.data.register : null;

					if (user !== null) {
						const ls = setLocalStorage('user', user );
						this.setState(ls);

						this.context.router.transitionTo(`/user/${user.id}`);
					} else {
						this.setState({
							alert: 'Incorrect Username or Password. Please try again.',
							alertClass: 'alert alert-danger'
						});
					}
	    });

		this.setState({
			alert: 'Username already exists. Please try a new one.',
			alertClass: 'alert alert-danger'
		});
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
						className={`${this.props.alertClass || this.state.alertClass }`}>
						{this.props.alert || this.state.alert}
					</div>

					<input className="form-control" type='email' placeholder='Email' required />
					<input className="form-control" type='text' placeholder='Username' required />
					<input className="form-control" type='password' placeholder='Password' required />

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
