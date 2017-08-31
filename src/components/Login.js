import React from 'react';

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
		// TODO: add call to backend in regular project
		// print out error if incorrect user/password is sent
		this.setState({
			alert: 'Incorrect Username or Password. Please try again.',
			alertClass: 'alert alert-danger'
		});
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

					<input type='text' placeholder='Username' required />
					<input type='text' placeholder='Password' required />
					<button type='submit'>Login</button>

					<div className="register-text">
						<a href=' '>Don't have an account? Create one!</a>
					</div>

				</form>
			</div>
		);
	}
}

export default Login;
