import React from 'react';
import '../css/Login.css';
import App from './App';

class Login extends React.Component{
	render(){
		return (
			<div>
				<div className="Login">
					<form className="loginForm">
						<p>Login to keep track of your score</p>
						<input type="text" placeholder="Username" required/>
						<input type="text" placeholder="Password" required/>
						<button type="submit">Login</button>
						<p><a href=" ">Don't have an account? Create one!</a></p>
					</form>
				</div>

				<div className="opaqueBackground">
					<App />
				</div>

			</div>
		);
	}
}

export default Login;