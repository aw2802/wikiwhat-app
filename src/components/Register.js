import React from 'react';

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
		// TODO: add call to backend in regular project
		// print out error if username already exists
		this.setState({
			alert: 'Username already exists. Please try a new one.',
			alertClass: 'alert alert-danger'
		});
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

					<input className="form-control" type='text' placeholder='Email' required />
					<input className="form-control" type='text' placeholder='Username' required />
					<input className="form-control" type='text' placeholder='Password' required />

					<button type='submit' className='btn btn-warning'>
            Register
          </button>
				</form>
			</div>
		);
	}
}

export default Register;
