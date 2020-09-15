import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Genres from './Components/Genres';
import Genre from './Components/Genre';
import Bassist from './Components/Bassist';
import Create from './Components/Create';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		genres: [],
	// 		bassists: [],
	// 		newGenre: {
	// 			genre: '',
	// 		},
	// 		newBassist: {
	// 			genre: this.props.genre,
	// 			name: '',
	// 			image_url: '',
	// 			artists_played_with: '',
	// 			notable_basses: '',
	// 			type_of_basses_played: '',
	// 		},
	// 	};
	// }

	// createGenre = (genre) => {
	// 	const requestOptions = {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(genre),
	// 	};
	// 	fetch(`https://floating-chamber-81210.herokuapp.com/genres`, requestOptions)
	// 		.then((res) => res.json())
	// 		.then((data) =>
	// 			this.setState({
	// 				genres: [...this.state.genres, data],
	// 			})
	// 		);
	// };

	// createBassist = (bassist) => {
	// 	const requestOptions = {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(bassist),
	// 	};
	// 	fetch(
	// 		`https://floating-chamber-81210.herokuapp.com/bassists`,
	// 		requestOptions
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) =>
	// 			this.setState({
	// 				bassists: [...this.state.bassists, data],
	// 			})
	// 		);
	// };

	render() {
		return (
			<div>
				<Link to='/' className='header'>
					<h1>Bassopedia</h1>
				</Link>
				<Route exact path='/genres' component={Genres} />
				<Route exact path='/genres/:genre' component={Genre} />
				<Route exact path='/bassists/:bassist' component={Bassist} />
				<Route
					exact
					path='/'
					render={() => (
						<div>
							<Link to='/genres' className='genres'>
								Genres
							</Link>
						</div>
					)}
				/>
				<Route
					exact
					path='/create'
					render={(routerProps) => {
						return (
							<Create
								match={routerProps.match}
								newBassist={this.state.newBassist}
                                createGenre={this.createGenre}
                                newGenre={this.state.newGenre}
                                createBassist={this.createBassist}
							/>
						);
					}}
				/>
			</div>
		);
	}
}

export default App;
