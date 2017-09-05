import React from 'react';
import merge from 'lodash';

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
    this.handleChange = this.handleChange.bind(this);
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
        			alert: 'Username already exists. Please try a new one.',
        			alertClass: 'alert alert-danger'
        		});
					}
	    });
	}

	handleChange(key, value) {
    const newState = {...this.state};
    newState[key] = value;
    this.setState(newState);
	}

  handlePassword2Change(event) {
    const newState = {...this.state};

    const isDisabled = (this.state.password2 !== this.state.password);
    console.log(isDisabled);
    newState.password2 = event.target.value;
    newState.isDisabled = isDisabled;

    const alert = (!isDisabled) ? {} : {
			alert: 'Passwords do not match. Please try again',
			alertClass: 'alert alert-danger'
		};

    this.setState(merge(newState, alert));
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

          <input type='text' placeholder='Username' key='username'
						value={ this.state.username }
						onChange={(e) => { this.handleChange('username', e.target.value) }} required />
					<input className="form-control" type='password' placeholder='Password' key='password'
            onChange={(e) => { this.handleChange('password', e.target.value) }} required />
					<input className="form-control" type='password' placeholder='Repeat Password'
            key='password2' onChange={(e) => { this.handlePassword2Change(e) }} required />

					<button type='submit' className='btn btn-warning' disabled={ this.state.isDisabled }>
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
