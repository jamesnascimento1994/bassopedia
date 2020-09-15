import React from 'react';
import PropTypes from 'prop-types';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        };
    }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    handle_change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        if (e.target.name === 'username') {
            this.setState({username: e.target.value, password: this.state.password});
        } else if (e.target.name === 'password') {
            this.setState({
							password: e.target.value,
							username: this.state.username,
						});
        }
    };

//     handleSubmit(e) {
//         e.preventDefault();
//         console.log("The form was submitted with the following data:")
//         console.log(this.state)
//         axios.post('https://floating-chamber-81210.herokuapp.com/api/token/', {
            
//                 username: this.state.username,
//                 password: this.state.password
            
//         }
//     )
//     .then(response => {
//         localStorage.setItem('token', response.data.access);
//         this.props.history.push('/');
//     })
//     .catch(error => {
//         console.log('login error', error)
//     });
//     e.preventDefault();
// }

    render() {
        return (
					<div>
						<form onSubmit={(e) => this.props.handle_login(e, this.state)}>

							<label type='text' htmlFor='username'>
								Username:
							</label>
							<input
								type='text'
								id='username'
								name='username'
								placeholder='username'
								value={this.state.username}
								onChange={this.handle_change}
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
							/>
							<input type='submit' />
						</form>
					</div>
				);
    }
}

export default Login;

Login.propTypes = {
    handle_login: PropTypes.func.isRequired
};