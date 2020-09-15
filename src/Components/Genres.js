import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Genres.css'

class Genres extends Component {
	constructor() {
		super();
		this.state = {
			genres: [],
		};
	}
	componentDidMount() {
		fetch('https://floating-chamber-81210.herokuapp.com/genres/')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ genres: json });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			<div>
				<h1 className='genre-plural'>Genres</h1>
                {/* <Link to='/create'>
                <aside>Create</aside>
                </Link> */}
				{this.state.genres.map((genre) => {
					return (
						<Link key={genre.id} to={`/genres/${genre.id}`} className='genre'>
							<h2>{genre.genre}</h2>
						</Link>
					);
				})}
			</div>
		);
	}
}

export default Genres;
