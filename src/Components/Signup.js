import React from 'react';
import PropTypes from 'prop-types';

class Signup extends React.Component {
    constructor(props) {
        super(props)
		this.state = {
			createUsername: '',
			email: '',
			password: '',
			passwordAgain: '',
			registrationErrors: '',
		};
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
    }

	handle_change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
		if (e.target.name === 'createUsername') {
			this.setState({
				createUsername: e.target.value,
                password: this.state.password,
                passwordAgain: this.state.passwordAgain,
                email: this.state.email,
                registrationErrors: this.state.registrationErrors
			});
		} else if (e.target.name === 'password') {
			this.setState({
				password: e.target.value,
				createUsername: this.state.createUsername,
				passwordAgain: this.state.passwordAgain,
				email: this.state.email,
				registrationErrors: this.state.registrationErrors,
			});
		} else if (e.target.name === 'email') {
            this.setState({
							password: this.state.password,
							createUsername: this.state.createUsername,
							passwordAgain: this.state.passwordAgain,
							email: e.target.value,
							registrationErrors: this.state.registrationErrors,
						});
        }   else if (e.target.name === 'passwordAgain') {
            this.setState({
							password: this.state.password,
							createUsername: this.state.createUsername,
							passwordAgain: e.target.value,
							email: this.state.email,
							registrationErrors: this.state.registrationErrors,
						});
        }

    }

	// handleSubmit(e) {
    //     axios.post('https://floating-chamber-81210.herokuapp.com/users/register', {
    //         data: {
    //             username: this.state.createUsername,
    //             email: this.state.email,
    //             password: this.state.password,
    //         }
    //     }
    //     ).then(response => {
    //         if (response.data.status === 'created') {
    //         this.props.handleSuccessfulAuth(response.data)
    //     }
    //     }).catch(error => {
    //         console.log('registration error', error);
    //     })
	// 	e.preventDefault();
	// 	console.log('The form was submitted with the following data:');
	// 	console.log(this.state);
	// 	if (this.state.password === this.state.passwordAgain) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
	render() {
		return (
			<div>
				<form onSubmit={e => this.props.handle_signup(e, {username: this.state.createUsername, password: this.state.password, email: this.state.email})}>
                    <h4>Sign Up</h4>
					<label type='text' htmlFor='username'>
						Create Username:
					</label>
					<input
						type='text'
						id='username'
						name='createUsername'
						placeholder='username'
						value={this.state.createUsername}
						onChange={this.handle_change}
						required
					/>
					<label type='text' htmlFor='email'>
						Email:
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='email'
						value={this.state.email}
						onChange={this.handle_change}
						required
					/>
					<label type='text' htmlFor='password'>
						Password:
					</label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='password'
						value={this.state.password}
						onChange={this.handle_change}
						required
					/>
					<label type='password' htmlFor='password-again'>
						Password Again:
					</label>
					<input
						type='password'
						id='password-again'
						name='passwordAgain'
						placeholder='password again'
						value={this.state.passwordAgain}
						onChange={this.handle_change}
						required
					/>
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default Signup;

Signup.propTypes = {
    handle_signup: PropTypes.func.isRequired
};