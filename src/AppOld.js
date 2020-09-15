import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Genres from './Components/GenresOld';

let bassistUrl = `https://floating-chamber-81210.herokuapp.com`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genres: [],
			bassists: [],
			newGenre: {
				genre: '',
			},
			newBassist: {
				genre: this.genre,
				name: '',
				image_url: '',
				artists_played_with: '',
				notable_basses: '',
				type_of_basses_played: '',
			},
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			username: '',
		};

		// this.handleLogin = this.handleLogin.bind(this)
		// this.handleLogOut = this.handleLogOut.bind(this)
	}

	componentDidMount() {
		if (this.state.logged_in) {
			// fetch('https://floating-chamber-81210.herokuapp.com/api/token/', {
			// })
			// 	.then((res) => res.json())
			// 	.then((json) => {
			// 		this.setState({ username: json.username });
			// 	});
			fetch(`${bassistUrl}/bassists`)
				.then((res) => res.json())
				.then((json) => {
					this.setState({ genres: json });
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}

	handle_login = (e, data) => {
		e.preventDefault();
		fetch('https://floating-chamber-81210.herokuapp.com/api/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('token', json.access);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: this.state.username,
				});
			});
	};

	handle_signup = (e, data) => {
		e.preventDefault();
		fetch('https://floating-chamber-81210.herokuapp.com/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('token', json.access);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: '',
				});
			});
	};

	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	};

	display_form = (form) => {
		this.setState({
			displayed_form: form,
		});
	};

	setBassists = (bassists) => {
		this.setState({ bassists: bassists });
	};

	setGenres = (genres) => {
		this.setState({ genres: genres });
	};

	createGenre = (genre) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(genre),
		};
		fetch(`${bassistUrl}/bassists`, requestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					genres: [...this.state.genres, data],
				})
			);
	};

	updateGenre = (genre) => {
		const requestOptions = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(genre),
		};

		fetch(`${bassistUrl}/bassists/${genre.id}`, requestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					genres: [...this.state.genres, data],
				})
			);
	};

	render() {
		let form;
		switch (this.state.displayed_form) {
			case 'login':
				form = <Login handle_login={this.handle_login} />;
				break;
			case 'signup':
				form = <Signup handle_signup={this.handle_signup} />;
				break;
			default:
				form = null;
		}
		if (this.state.logged_in === true) {
			return (
				<div className='App'>
					<Link to='/'>
						<h1>Bassopedia (Create Your Own)</h1>
					</Link>
					<nav>
						<Link to='/' className='link'>
							<h2>Home</h2>
						</Link>
						<Link to='/about' className='link'>
							<h2>About</h2>
						</Link>
						<Nav
							logged_in={this.state.logged_in}
							display_form={this.display_form}
							handle_logout={this.handle_logout}
						/>
						{form}
						<h3>
							{this.state.logged_in ? `Hello, ${this.state.username}` : ''}
						</h3>
					</nav>
					<Link to='/genres'>
						<h3>Your Genres</h3>
					</Link>
				</div>
			);
		} else {
			return (
				<div className='App'>
					<Link to='/'>
						<h1>Bassopedia (Create Your Own)</h1>
					</Link>
					<nav>
						<Link to='/' className='link'>
							<h2>Home</h2>
						</Link>
						<Link to='/about' className='link'>
							<h2>About</h2>
						</Link>
						<Nav
							logged_in={this.state.logged_in}
							display_form={this.display_form}
							handle_logout={this.handle_logout}
						/>
						{form}
						<h3>
							{this.state.logged_in ? `Hello, ${this.state.username}` : ''}
						</h3>
					</nav>
					<main>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/genres'
							render={() => {
								return (
									<Genres
										setGenres={this.setGenres}
										genres={this.state.genres}
									/>
								);
							}}
						/>
					</main>
				</div>
			);
		}
	}
}

export default App;
